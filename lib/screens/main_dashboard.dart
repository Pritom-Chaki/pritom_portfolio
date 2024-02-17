import 'dart:async';

import 'package:avatar_glow/avatar_glow.dart';
import 'package:connectivity_plus/connectivity_plus.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:pritom_portfolio/screens/contact_us.dart';
import 'package:pritom_portfolio/screens/footer_class.dart';
import 'package:pritom_portfolio/screens/home_page.dart';
import 'package:scrollable_positioned_list/scrollable_positioned_list.dart';
import '../components/my_app_bar.dart';
import '../utils/app_colors.dart';
import 'dart:developer' as developer;

class MainDashBoard extends StatefulWidget {
  const MainDashBoard({super.key});

  @override
  MainDashBoardState createState() => MainDashBoardState();
}

class MainDashBoardState extends State<MainDashBoard> {
  final ItemScrollController _itemScrollController = ItemScrollController();
  final ItemPositionsListener itemPositionsListener =
      ItemPositionsListener.create();
  final ScrollOffsetListener scrollOffsetListener =
      ScrollOffsetListener.create();
  ConnectivityResult _connectionResult = ConnectivityResult.none;
  final Connectivity _connectivity = Connectivity();
  late StreamSubscription<ConnectivityResult> _connectivitySubscription;
  var menuIndex = 0;

  final screensList = const <Widget>[
    HomePage(),
    // AboutMe(),
    // MyServices(),
    // MyPortfolio(),
     ContactUs(),
    FooterClass(),
  ];

  final yourScrollController = ScrollController();

  @override
  void initState() {
    super.initState();
    initConnectivity();

    _connectivitySubscription =
        _connectivity.onConnectivityChanged.listen(_updateConnectionStatus);
  }

  // Platform messages are asynchronous, so we initialize in an async method.
  Future<void> initConnectivity() async {
    late ConnectivityResult result;
    // Platform messages may fail, so we use a try/catch PlatformException.
    try {
      result = await _connectivity.checkConnectivity();
    } on PlatformException catch (e) {
      developer.log('Couldn\'t check connectivity status', error: e);
      return;
    }

    // If the widget was removed from the tree while the asynchronous platform
    // message was in flight, we want to discard the reply rather than calling
    // setState to update our non-existent appearance.
    if (!mounted) {
      return Future.value(null);
    }

    return _updateConnectionStatus(result);
  }

  Future<void> _updateConnectionStatus(ConnectivityResult result) async {
    setState(() {
      _connectionResult = result;
    });
  }

  @override
  void dispose() {
    _connectivitySubscription.cancel();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final Size size = MediaQuery.of(context).size;
    return Scaffold(
      backgroundColor: AppColors.bgColor,
      floatingActionButton: _floatButton(),
      appBar: MyAppBar(itemScrollController: _itemScrollController),
      body: _connectionResult != ConnectivityResult.none
          ? Scrollbar(
              trackVisibility: true,
              thumbVisibility: true,
              thickness: 8,
              interactive: true,
              controller: yourScrollController,
              child: ScrollablePositionedList.builder(
                itemCount: screensList.length,
                itemScrollController: _itemScrollController,
                itemPositionsListener: itemPositionsListener,
                scrollOffsetListener: scrollOffsetListener,
                itemBuilder: (context, index) {
                  menuIndex = index;
                  return screensList[index];
                },
              ),
            )
          : _noInternet(size),
    );
  }

  Widget _floatButton() {
    return AvatarGlow(
      startDelay: const Duration(milliseconds: 3000),
      glowColor: AppColors.themeColor,
      animate: true,
      glowShape: BoxShape.circle,
      curve: Curves.fastOutSlowIn,
      child: Material(
        // Replace this child with your own
        elevation: 8.0,
        shape: const CircleBorder(),
        child: InkWell(
          onTap: () {
            _itemScrollController
                .scrollTo(
                    index: 0,
                    duration: const Duration(seconds: 2),
                    curve: Curves.fastLinearToSlowEaseIn)
                .whenComplete(() {
              setState(() {
                menuIndex = 0;
              });
            });
          },
          child: CircleAvatar(
            backgroundColor: AppColors.themeColor,
            radius: 25,
            child: const Icon(
              Icons.arrow_upward,
              color: Colors.black,
              size: 20,
            ),
          ),
        ),
      ),
    );
  }

  Widget _noInternet(Size size) {
    return Center(
      child: Container(
        width: size.width * 0.80,
        height: size.height * 0.60,
        alignment: Alignment.center,
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          crossAxisAlignment: CrossAxisAlignment.center,
          children: [
            Image.asset(
              "assets/images/no_internet.png",
              width: size.width * 0.70,
              height: size.height * 0.50,
              fit: BoxFit.contain,
            ),
            FittedBox(child: Text("No Internet Service Found", style:  GoogleFonts.lato(textStyle: const TextStyle(fontSize: 35,fontWeight: FontWeight.w500, color: Colors.red)),))
          ],
        ),
      ),
    );
  }
}
