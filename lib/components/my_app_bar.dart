import 'package:flutter/material.dart';
import 'package:scrollable_positioned_list/scrollable_positioned_list.dart';

import '../utils/app_colors.dart';
import '../utils/app_text_styles.dart';
import '../utils/constants.dart';

class MyAppBar extends StatefulWidget implements PreferredSizeWidget {
  @override
  final Size preferredSize;
  final ItemScrollController itemScrollController;
  const MyAppBar({super.key, required this.itemScrollController})
      : preferredSize = const Size.fromHeight(50.0);

  @override
  State<MyAppBar> createState() => _MyAppBarState();
}

class _MyAppBarState extends State<MyAppBar> {
  final menuItems = <String>[
    'Home',
    'About',
    'Services',
    'Portfolio',
    'Contact',
  ];

  final onMenuHover = Matrix4.identity()..scale(1.0);
  var menuIndex = 0;
  Future scrollTo({required int index}) async {
    widget.itemScrollController
        .scrollTo(
            index: index,
            duration: const Duration(seconds: 2),
            curve: Curves.fastLinearToSlowEaseIn)
        .whenComplete(() {
      setState(() {
        menuIndex = index;
      });
    });
  }

  @override
  Widget build(BuildContext context) {
    final Size size = MediaQuery.of(context).size;
    return AppBar(
      backgroundColor: AppColors.bgColor,
      toolbarHeight: 90,
      titleSpacing: 40,
      elevation: 0,
      foregroundColor: AppColors.themeColor,
      title: LayoutBuilder(
        builder: (context, constraints) {
          if (constraints.maxWidth < 768) {
            return Row(
              crossAxisAlignment: CrossAxisAlignment.end,
              children: [
                Text(
                  'Portfolio',
                  style: TextStyle(color: AppColors.themeColor),
                ),
                const Spacer(),
                PopupMenuButton(
                  icon: Icon(
                    Icons.menu_sharp,
                    size: 32,
                    color: AppColors.white,
                  ),
                  color: AppColors.bgColor2,
                  position: PopupMenuPosition.under,
                  constraints: BoxConstraints.tightFor(width: size.width * 0.9),
                  itemBuilder: (BuildContext context) => menuItems
                      .asMap()
                      .entries
                      .map(
                        (e) => PopupMenuItem(
                          textStyle: AppTextStyles.headerTextStyle(),
                          onTap: () {
                            scrollTo(index: e.key);
                          },
                          child: Text(e.value),
                        ),
                      )
                      .toList(),
                ),
              ],
            );
          } else {
            return Row(
              crossAxisAlignment: CrossAxisAlignment.end,
              children: [
                const Text('Portfolio'),
                const Spacer(),
                SizedBox(
                  height: 30,
                  child: ListView.separated(
                    itemCount: menuItems.length,
                    shrinkWrap: true,
                    scrollDirection: Axis.horizontal,
                    separatorBuilder: (context, child) =>
                        Constants.sizedBox(width: 8),
                    itemBuilder: (context, index) {
                      return InkWell(
                        onTap: () {
                          scrollTo(index: index);
                        },
                        borderRadius: BorderRadius.circular(100),
                        onHover: (value) {
                          setState(() {
                            if (value) {
                              menuIndex = index;
                            } else {
                              menuIndex = 0;
                            }
                          });
                        },
                        child: buildNavBarAnimatedContainer(
                            index, menuIndex == index ? true : false),
                      );
                    },
                  ),
                ),
                Constants.sizedBox(width: 30),
              ],
            );
          }
        },
      ),
    );
  }

  AnimatedContainer buildNavBarAnimatedContainer(int index, bool hover) {
    return AnimatedContainer(
      alignment: Alignment.center,
      width: hover ? 80 : 75,
      duration: const Duration(milliseconds: 200),
      transform: hover ? onMenuHover : null,
      child: Text(
        menuItems[index],
        style: AppTextStyles.headerTextStyle(
            color: hover ? AppColors.themeColor : AppColors.white),
      ),
    );
  }
}
