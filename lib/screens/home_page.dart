import 'package:animate_do/animate_do.dart';
import 'package:animated_text_kit/animated_text_kit.dart';
import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';
import 'package:pritom_portfolio/utils/app_buttons.dart';
import 'package:pritom_portfolio/utils/app_colors.dart';
import 'package:pritom_portfolio/utils/app_text_styles.dart';
import 'package:pritom_portfolio/utils/constants.dart';
import 'package:pritom_portfolio/helper%20class/responsive_helper.dart';
import 'package:pritom_portfolio/components/profile_animation.dart';
import 'package:url_launcher/url_launcher.dart';
import '../model/social_account_model.dart';
import '../utils/app_constant.dart';

class HomePage extends StatefulWidget {
  const HomePage({super.key});

  @override
  State<HomePage> createState() => HomePageState();
}

class HomePageState extends State<HomePage> {
  int? socialBI;
  Future<void> _launchUrl(url) async {
    if (!await launchUrl(Uri.parse(url))) {
      throw Exception('Could not launch $url');
    }
  }

  @override
  Widget build(BuildContext context) {
    final Size size = MediaQuery.of(context).size;
    return ResponsiveHelper(
      mobile: Column(
        children: [
          const ProfileAnimation(),
          Constants.sizedBox(height: 25.0),
          buildHomePersonalInfo(size),
        ],
      ),
      tablet: Flex(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        crossAxisAlignment: CrossAxisAlignment.center,
        direction: Axis.vertical,
        children: [
          Flexible(flex: 3, child: buildHomePersonalInfo(size)),
          const Flexible(flex: 1, child: ProfileAnimation()),
        ],
      ),
      desktop: Flex(
        direction: Axis.horizontal,
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        crossAxisAlignment: CrossAxisAlignment.center,
        children: [
          Flexible(flex: 3, child: buildHomePersonalInfo(size)),
          const Flexible(flex: 1, child: ProfileAnimation()),
        ],
      ),
      paddingWidth: size.width * 0.1,
      bgColor: Colors.transparent,
    );
  }

  Widget buildHomePersonalInfo(Size size) {
    return SizedBox(
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        mainAxisSize: MainAxisSize.min,
        children: [
          FadeInDown(
            duration: const Duration(milliseconds: 1500),
            child: Text(
              'Hello, It\'s Me',
              style: AppTextStyles.montserratStyle(color: Colors.white),
            ),
          ),
          Constants.sizedBox(height: 15.0),
          FadeInRight(
            duration: const Duration(milliseconds: 1400),
            child: Text(
              'Pritom Chaki',
              style: AppTextStyles.headingStyles(),
            ),
          ),
          Constants.sizedBox(height: 15.0),
          FadeInLeft(
            duration: const Duration(milliseconds: 1400),
            child: Row(
              children: [
                Text(
                  'And I\'m a ',
                  style: AppTextStyles.montserratStyle(color: Colors.white),
                ),
                AnimatedTextKit(
                  animatedTexts: [
                    TyperAnimatedText(
                      'Flutter Developer',
                      textStyle: AppTextStyles.montserratStyle(
                          color: Colors.lightBlue),
                    ),
                    TyperAnimatedText('Laravel Developer',
                        textStyle: AppTextStyles.montserratStyle(
                            color: Colors.lightBlue)),
                    TyperAnimatedText('App Developer',
                        textStyle: AppTextStyles.montserratStyle(
                            color: Colors.lightBlue))
                  ],
                  pause: const Duration(milliseconds: 1000),
                  displayFullTextOnTap: true,
                  stopPauseOnTap: true,
                )
              ],
            ),
          ),
          Constants.sizedBox(height: 15.0),
          FadeInDown(
            duration: const Duration(milliseconds: 1600),
            child: Text(
              'I love coding and app development with a passion, and solving challenging problems by working with others to hit deadlines.'
              'I realize that I don\'t know everything, but I recognize my weak points and add it to my learning.',
              style: AppTextStyles.normalStyle(),
            ),
          ),
          Constants.sizedBox(height: 22.0),
          FadeInUp(
            duration: const Duration(milliseconds: 1600),
            child: SizedBox(
              height: 48,
              child: ListView.separated(
                itemCount: AppConstant.socialAccounts.length,
                shrinkWrap: true,
                scrollDirection: Axis.horizontal,
                separatorBuilder: (context, child) =>
                    Constants.sizedBox(width: 8.0),
                itemBuilder: (context, index) {
                  return InkWell(
                    onTap: () {
                      _launchUrl(AppConstant.socialAccounts[index].link!);
                    },
                    onHover: (value) {
                      setState(() {
                        if (value) {
                          socialBI = index;
                        } else {
                          socialBI = null;
                        }
                      });
                    },
                    borderRadius: BorderRadius.circular(550.0),
                    hoverColor: AppColors.themeColor,
                    splashColor: AppColors.lawGreen,
                    child: buildSocialButton(
                        asset: AppConstant.socialAccounts[index],
                        hover: socialBI == index ? true : false),
                  );
                },
              ),
            ),
          ),
          Constants.sizedBox(height: 18.0),
          FadeInUp(
            duration: const Duration(milliseconds: 1800),
            child: AppButtons.buildMaterialButton(
                onTap: () {
                  _launchUrl(AppConstant.cvLink);
                },
                buttonName: 'Download CV'),
          ),
        ],
      ),
    );
  }

  Ink buildSocialButton(
      {required SocialAccountModel asset, required bool hover}) {
    return Ink(
      width: 45,
      height: 45,
      decoration: BoxDecoration(
        border: Border.all(color: AppColors.themeColor, width: 2.0),
        color: AppColors.bgColor,
        shape: BoxShape.circle,
      ),
      padding: const EdgeInsets.all(6),
      child: Image.asset(
        asset.icon!,
        width: 10,
        height: 12,
        color: hover ? AppColors.bgColor : AppColors.themeColor,
        // fit: BoxFit.fill,
      ),
    );
  }
}
