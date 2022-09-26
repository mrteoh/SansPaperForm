import React from 'react';
import {SideMenuView} from 'react-native-navigation-drawer-extension';
import {Screens} from 'constant/ScreenConstants';
import BodyOfKnowledge from '../BodyOfKnowledge';

const HomeScreen = () => {
  return (
    <SideMenuView
      style={{flex: 1}} // Styles the view
      drawerName={'SideMenu'}
      direction={'left'}
      passProps={{
        animationOpenTime: 300,
        animationCloseTime: 300,
        dismissWhenTouchOutside: true,
        fadeOpacity: 0.6,
        drawerScreenWidth: '75%' || 445,
        drawerScreenHeight: '100%' || 700,
        parentComponentId: Screens.MAIN_SCREEN,
      }}>
      <BodyOfKnowledge />
    </SideMenuView>
  );
};

export default HomeScreen;
