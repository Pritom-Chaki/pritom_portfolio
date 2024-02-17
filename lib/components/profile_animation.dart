import 'package:flutter/material.dart';

import '../utils/app_assets.dart';

class ProfileAnimation extends StatefulWidget {
  // ignore: use_super_parameters
  const ProfileAnimation({Key? key}) : super(key: key);

  @override
  ProfileAnimationState createState() => ProfileAnimationState();
}

class ProfileAnimationState extends State<ProfileAnimation>
    with TickerProviderStateMixin {
  late final AnimationController _controller;
  late Animation<Offset> _animation;

  @override
  void initState() {
    super.initState();
    _controller =
        AnimationController(vsync: this, duration: const Duration(seconds: 3))
          ..repeat(reverse: true);

    _animation = Tween(begin: const Offset(0,0.05), end: const Offset(0, 0))
        .animate(_controller);
  }

  @override
  void dispose() {
    super.dispose();
    _controller.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return SlideTransition(
      position: _animation,
      child: Image.asset(
        AppAssets.profile1,
        width: 300,
        height: 300,
        fit: BoxFit.fill,
      ),
    );
  }
}
