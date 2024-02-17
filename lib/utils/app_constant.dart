import '../model/social_account_model.dart';
import 'app_assets.dart';

class AppConstant {
  static String cvLink = 'https://www.pritom.me';
  static String emailValidatorPattern =
      r"^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]"
      r"{0,253}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]"
      r"{0,253}[a-zA-Z0-9])?)*$";
  static String fieldRequire = "Field is Required";
  static List<SocialAccountModel> socialAccounts = [
    SocialAccountModel(
      id: 1,
      title: 'Facebook',
      icon: AppAssets.facebook,
      link: 'https://www.facebook.com/pritom.chaki.77',
    ),
    SocialAccountModel(
      id: 2,
      title: 'X',
      icon: AppAssets.twitter,
      link: 'https://www.twitter.com/PritomChaki',
    ),
    SocialAccountModel(
      id: 3,
      title: 'LinkedIn',
      icon: AppAssets.linkedIn,
      link: 'https://www.linkedin.com/in/pritom-chaki-cse',
    ),
    SocialAccountModel(
      id: 4,
      title: 'Instagram',
      icon: AppAssets.insta,
      link: 'https://www.instagram.com/pritom_chaki',
    ),
    SocialAccountModel(
      id: 5,
      title: 'Github',
      icon: AppAssets.github,
      link: 'https://github.com/Pritom-Chaki',
    ),
  ];
}
