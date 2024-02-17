import 'package:animate_do/animate_do.dart';
import 'package:flutter/material.dart';
import 'package:pritom_portfolio/utils/app_buttons.dart';
import 'package:pritom_portfolio/helper%20class/responsive_helper.dart';
import '../utils/app_colors.dart';
import '../utils/app_constant.dart';
import '../utils/app_text_styles.dart';
import '../utils/constants.dart';

class ContactUs extends StatefulWidget {
  const ContactUs({super.key});

  @override
  State<ContactUs> createState() => _ContactUsState();
}

class _ContactUsState extends State<ContactUs> {
  TextEditingController _nameController = TextEditingController();
  TextEditingController _emailController = TextEditingController();
  TextEditingController _mobileController = TextEditingController();
  TextEditingController _subjectController = TextEditingController();
  TextEditingController _messageController = TextEditingController();
  final _formKey = GlobalKey<FormState>();
  @override
  void dispose() {
    // TODO: implement dispose
    super.dispose();
    _nameController.dispose();
    _emailController.dispose();
    _mobileController.dispose();
    _subjectController.dispose();
    _messageController.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final Size size = MediaQuery.of(context).size;
    return ResponsiveHelper(
      mobile: buildFormMobile(),
      tablet: buildForm(),
      desktop: buildForm(),
      paddingWidth: size.width * 0.2,
      bgColor: AppColors.bgColor,
    );
  }

  Widget buildFormMobile() {
    return Form(
      key: _formKey,
      child: Column(
        mainAxisAlignment: MainAxisAlignment.start,
        mainAxisSize: MainAxisSize.min,
        children: [
          buildContactText(),
          Constants.sizedBox(height: 40.0),
          Material(
            borderRadius: BorderRadius.circular(10),
            color: Colors.transparent,
            elevation: 8,
            child: TextFormField(
                controller: _nameController,
                cursorColor: AppColors.white,
                style: AppTextStyles.normalStyle(),
                decoration: buildInputDecoration(hintText: 'Full Name'),
                validator: (value) {
                  if (value == null || value.isEmpty) {
                    return AppConstant.fieldRequire;
                  }
                  return null;
                }),
          ),
          Constants.sizedBox(height: 20.0),
          Material(
            borderRadius: BorderRadius.circular(10),
            color: Colors.transparent,
            elevation: 8,
            child: TextFormField(
                controller: _emailController,
                cursorColor: AppColors.white,
                style: AppTextStyles.normalStyle(),
                decoration: buildInputDecoration(hintText: 'Email Address'),
                validator: (value) {
                  RegExp regex = RegExp(AppConstant.emailValidatorPattern);
                  if (value == null || value.isEmpty) {
                    return AppConstant.fieldRequire;
                  } else if (!regex.hasMatch(value)) {
                    return "Enter a valid email address";
                  }
                  return null;
                }),
          ),
          Constants.sizedBox(height: 20.0),
          Material(
            borderRadius: BorderRadius.circular(10),
            color: Colors.transparent,
            elevation: 8,
            child: TextFormField(
              controller: _mobileController,
              cursorColor: AppColors.white,
              style: AppTextStyles.normalStyle(),
              decoration: buildInputDecoration(hintText: 'Mobile Number'),
            ),
          ),
          Constants.sizedBox(height: 20.0),
          Material(
            borderRadius: BorderRadius.circular(10),
            color: Colors.transparent,
            elevation: 8,
            child: TextFormField(
                controller: _subjectController,
                cursorColor: AppColors.white,
                style: AppTextStyles.normalStyle(),
                decoration: buildInputDecoration(hintText: 'Email Subject'),
                validator: (value) {
                  if (value == null || value.isEmpty) {
                    return AppConstant.fieldRequire;
                  }
                  return null;
                }),
          ),
          Constants.sizedBox(height: 20.0),
          Material(
            borderRadius: BorderRadius.circular(10),
            color: Colors.transparent,
            elevation: 8,
            child: TextFormField(
                controller: _messageController,
                maxLines: 15,
                cursorColor: AppColors.white,
                style: AppTextStyles.normalStyle(),
                decoration: buildInputDecoration(hintText: 'Your Message'),
                validator: (value) {
                  if (value == null || value.isEmpty) {
                    return AppConstant.fieldRequire;
                  }
                  return null;
                }),
          ),
          Constants.sizedBox(height: 40.0),
          AppButtons.buildMaterialButton(
              buttonName: 'Send Message', onTap: () => _click()),
          Constants.sizedBox(height: 30.0),
        ],
      ),
    );
  }

  Widget buildForm() {
    return Form(
      key: _formKey,
      child: Column(
        mainAxisAlignment: MainAxisAlignment.start,
        mainAxisSize: MainAxisSize.min,
        children: [
          buildContactText(),
          Constants.sizedBox(height: 40.0),
          Row(
            children: [
              Expanded(
                child: Material(
                  borderRadius: BorderRadius.circular(10),
                  color: Colors.transparent,
                  elevation: 8,
                  child: TextFormField(
                      controller: _nameController,
                      cursorColor: AppColors.white,
                      style: AppTextStyles.normalStyle(),
                      decoration: buildInputDecoration(hintText: 'Full Name'),
                      validator: (value) {
                        if (value == null || value.isEmpty) {
                          return AppConstant.fieldRequire;
                        }
                        return null;
                      }),
                ),
              ),
              Constants.sizedBox(width: 20.0),
              Expanded(
                child: Material(
                  borderRadius: BorderRadius.circular(10),
                  color: Colors.transparent,
                  elevation: 8,
                  child: TextFormField(
                      controller: _emailController,
                      cursorColor: AppColors.white,
                      style: AppTextStyles.normalStyle(),
                      decoration:
                          buildInputDecoration(hintText: 'Email Address'),
                      validator: (value) {
                        RegExp regex =
                            RegExp(AppConstant.emailValidatorPattern);
                        if (value == null || value.isEmpty) {
                          return AppConstant.fieldRequire;
                        } else if (!regex.hasMatch(value)) {
                          return "Enter a valid email address";
                        }
                        return null;
                      }),
                ),
              ),
            ],
          ),
          Constants.sizedBox(height: 20.0),
          Row(
            children: [
              Expanded(
                child: Material(
                  borderRadius: BorderRadius.circular(10),
                  color: Colors.transparent,
                  elevation: 8,
                  child: TextFormField(
                    controller: _mobileController,
                    cursorColor: AppColors.white,
                    style: AppTextStyles.normalStyle(),
                    decoration: buildInputDecoration(hintText: 'Mobile Number'),
                  ),
                ),
              ),
              Constants.sizedBox(width: 20.0),
              Expanded(
                child: Material(
                  borderRadius: BorderRadius.circular(10),
                  color: Colors.transparent,
                  elevation: 8,
                  child: TextFormField(
                      controller: _subjectController,
                      cursorColor: AppColors.white,
                      style: AppTextStyles.normalStyle(),
                      decoration:
                          buildInputDecoration(hintText: 'Email Subject'),
                      validator: (value) {
                        if (value == null || value.isEmpty) {
                          return AppConstant.fieldRequire;
                        }
                        return null;
                      }),
                ),
              ),
            ],
          ),
          Constants.sizedBox(height: 20.0),
          Material(
            borderRadius: BorderRadius.circular(10),
            color: Colors.transparent,
            elevation: 8,
            child: TextFormField(
                controller: _messageController,
                maxLines: 15,
                cursorColor: AppColors.white,
                style: AppTextStyles.normalStyle(),
                decoration: buildInputDecoration(hintText: 'Your Message'),
                validator: (value) {
                  if (value == null || value.isEmpty) {
                    return AppConstant.fieldRequire;
                  }
                  return null;
                }),
          ),
          Constants.sizedBox(height: 40.0),
          AppButtons.buildMaterialButton(
              buttonName: 'Send Message', onTap: () => _click()),
          Constants.sizedBox(height: 30.0),
        ],
      ),
    );
  }

  FadeInDown buildContactText() {
    return FadeInDown(
      duration: const Duration(milliseconds: 1200),
      child: RichText(
        text: TextSpan(
          text: 'Contact ',
          style: AppTextStyles.headingStyles(fontSize: 30.0),
          children: [
            TextSpan(
              text: 'Me!',
              style: AppTextStyles.headingStyles(
                  fontSize: 30, color: AppColors.robinEdgeBlue),
            )
          ],
        ),
      ),
    );
  }

  InputDecoration buildInputDecoration({required String hintText}) {
    return InputDecoration(
        hintText: hintText,
        hintStyle: AppTextStyles.comfortaaStyle(),
        enabledBorder: OutlineInputBorder(
            borderRadius: BorderRadius.circular(10),
            borderSide: BorderSide.none),
        focusedBorder: OutlineInputBorder(
            borderRadius: BorderRadius.circular(10),
            borderSide: BorderSide.none),
        errorBorder: OutlineInputBorder(
            borderRadius: BorderRadius.circular(10),
            borderSide: BorderSide.none),
        focusedErrorBorder: OutlineInputBorder(
            borderRadius: BorderRadius.circular(10),
            borderSide: BorderSide.none),
        border: OutlineInputBorder(
            borderRadius: BorderRadius.circular(10),
            borderSide: BorderSide.none),
        filled: true,
        fillColor: AppColors.bgColor2,
        contentPadding:
            const EdgeInsets.symmetric(horizontal: 24, vertical: 16));
  }

  void _click() {
    if (_formKey.currentState!.validate()) {
      ScaffoldMessenger.of(context).showSnackBar(const SnackBar(
        content: Text('Thanks for Your Message'),
      ));
      _clear();
    }
  }

  void _clear() {
    _nameController.clear();
    _emailController.clear();
    _mobileController.clear();
    _subjectController.clear();
    _messageController.clear();
  }
}
