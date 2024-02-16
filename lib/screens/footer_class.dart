import 'package:flutter/material.dart';
import 'package:pritom_portfolio/utils/app_colors.dart';

class FooterClass extends StatelessWidget {
  const FooterClass({
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      height: 70,
      width: MediaQuery.of(context).size.width,
      color: AppColors.bgColor2,
      alignment: Alignment.centerRight,
      padding: const EdgeInsets.symmetric(
        horizontal: 40,
      ),
      child: const Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          Text("Copyright ©2024 Pritom Chaki. All rights reserved. ", style: TextStyle(color: Colors.white),),
        ],
      )
    );
  }
}
