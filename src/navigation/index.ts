import { Navigation, LayoutStackChildren } from 'react-native-navigation';
import { SIZE, FAMILY } from 'styles/font';
import { Colors } from 'styles/colors';
import { Screens } from 'constant/ScreenConstants';
import { Icons } from 'constant/icons';
import Octicons from 'react-native-vector-icons/Octicons';

export const setDefaultOptions = () => {
  Navigation.setDefaultOptions({
    layout: {
      orientation: ['portrait'],
    },
    statusBar: {
      style: 'light',
      backgroundColor: Colors.Primary,
    },
    topBar: {
      background: {
        color: Colors.DarkRed,
      },
      title: {
        color: Colors.White,
        fontSize: SIZE.HEADER,
        fontFamily: FAMILY.QUICKSAND_SEMI_BOLD,
      },
      backButton: {
        color: Colors.White,
      },
    },
  });
};


export const showInitialScreen = () => {
  return Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              id: Screens.INITIAL_SCREEN,
              name: Screens.INITIAL_SCREEN,
            },
          } as LayoutStackChildren,
        ],
      },
    },
  });
};

export const showAuthenticationScreen = () => {

  return Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              id: Screens.AUTHENTICATION_SCREEN,
              name: Screens.AUTHENTICATION_SCREEN,
              options: {
                topBar: {
                  visible: false,
                },
              },
            },
          } as LayoutStackChildren,
        ],
      },
    },
  });
};

export const showMainScreen = async () => {

  return Navigation.setRoot({
    root: {
      bottomTabs: {
        id: 'BOTTOM_TABS_LAYOUT',
        options: {
          bottomTabs: {
            animate: false,
            backgroundColor: '#fff',
            titleDisplayMode: 'alwaysShow',
            drawBehind: false,
            tabsAttachMode: 'onSwitchToTab',
            currentTabIndex: 0,
          },
        },
        children: [
          {
            stack: {
              id: 'HOME_TAB',
              children: [
                {
                  component: {
                    id: Screens.HOME_SCREEN,
                    name: Screens.HOME_SCREEN,
                    options: {
                      topBar: {
                        title: {
                          text: 'Home',
                        },
                      },
                    },
                  },
                },
              ],
              options: {
                bottomTab: {
                  text: 'Home',
                  icon: Icons.HOME_ICON,
                  iconColor: Colors.DarkGray,
                  selectedIconColor: Colors.Primary,
                },
              },
            },
          },
          {
            stack: {
              id: 'FORMS_TAB',
              children: [
                {
                  component: {
                    id: Screens.FORMS_SCREEN,
                    name: Screens.FORMS_SCREEN,
                    options: {
                      topBar: {
                        title: {
                          text: 'Forms',
                        },
                      },
                    },
                  },
                },
              ],
              options: {
                bottomTab: {
                  text: 'Forms',
                  icon: Icons.FORMS_ICON,
                  iconColor: Colors.DarkGray,
                  selectedIconColor: Colors.Primary,
                },
              },
            },
          },
          {
            stack: {
              id: 'NOTIFICATION_TAB',
              children: [
                {
                  component: {
                    id: Screens.NOTIFICATIONS_SCREEN,
                    name: Screens.NOTIFICATIONS_SCREEN,
                    options: {
                      topBar: {
                        title: {
                          text: 'Notifications',
                        },
                      },
                    },
                  },
                },
              ],
              options: {
                bottomTab: {
                  text: 'Notifications',
                  icon: Icons.NOTIFICATIONS_ICON,
                  fontSize: 10,
                  iconColor: Colors.DarkGray,
                  selectedIconColor: Colors.Primary,
                },
              },
            },
          },

          // {
          //   stack: {
          //     id: 'OFFLINEFORM_TAB',
          //     children: [
          //       {
          //         component: {
          //           id: Screens.OFFLINEFORM_SCREEN,
          //           name: Screens.OFFLINEFORM_SCREEN,
          //           options: {
          //             topBar: {
          //               title: {
          //                 text: 'Outbox ',
          //               },
          //             },
          //           },
          //         },
          //       },
          //     ],
          //     options: {
          //       bottomTab: {
          //         text: 'Outbox',
          //         icon: Icons.OUTBOX_ICON,
          //         iconColor: Colors.DarkGray,
          //         selectedIconColor: Colors.Primary,
          //       },
          //     },
          //   },
          // },

          {
            stack: {
              id: 'HISTORY_TAB',
              children: [
                {
                  component: {
                    id: Screens.HISTORY_SCREEN,
                    name: Screens.HISTORY_SCREEN,
                    options: {
                      topBar: {
                        title: {
                          text: 'History',
                        },
                      },
                    },
                  },
                },
              ],
              options: {
                bottomTab: {
                  text: 'History',
                  icon: Icons.HISTORY_ICON,
                  iconColor: Colors.DarkGray,
                  selectedIconColor: Colors.Primary,
                },
              },
            },
          },

          {
            stack: {
              id: 'PROFILE_TAB',
              children: [
                {
                  component: {
                    id: Screens.PROFILE_SCREEN,
                    name: Screens.PROFILE_SCREEN,
                    options: {
                      topBar: {
                        title: {
                          text: 'Profile',
                        },
                      },
                    },
                  },
                },
              ],
              options: {
                bottomTab: {
                  text: 'Profile',
                  icon: Icons.PROFILE_ICON,
                  iconColor: Colors.DarkGray,
                  selectedIconColor: Colors.Primary,
                },
              },
            },
          },
        ],
      },
    },
  });
};

export const showActivityIndicator = () => {
  Navigation.showOverlay({
    component: {
      id: Screens.ACTIVITY_INDICATOR_OVERLAY_SCREEN,
      name: Screens.ACTIVITY_INDICATOR_OVERLAY_SCREEN,
      options: {
        overlay: {
          interceptTouchOutside: true,
        },
        layout: {
          componentBackgroundColor: 'transparent',
        },
      },
    },
  });
};

export const dismissActivityIndicator = () => {
  Navigation.dismissOverlay(Screens.ACTIVITY_INDICATOR_OVERLAY_SCREEN);
};
