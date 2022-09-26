import { Navigation } from 'react-native-navigation';
import { Screens } from 'constant/ScreenConstants';
import { pushComponentProps } from './types';

export const pushScreenOnAuthenticationScreen = (props: pushComponentProps) => {
  Navigation.push(Screens.AUTHENTICATION_SCREEN, {
    component: {
      id: props.componentId,
      name: props.componentId,
      passProps: props.passProps,
      options: {
        topBar: {
          visible: false,
        },
      },
    },
  });
};

export const pushScreenOnFormScreen = (props: pushComponentProps) => {

  Navigation.push(Screens.FORMS_SCREEN, {
    component: {
      id: props.componentId,
      name: props.componentId,
      passProps: props.passProps,
      options: {
        topBar: {
          title: {
            text: props.passProps.formData.name,
          },
          backButton: {
            showTitle: false,
          },
        },
      },
    },
  });
};

export const pushScreenOnResultScreen = (props: pushComponentProps) => {
  Navigation.push(Screens.FORMS_SCREEN, {
    component: {
      id: props.componentId,
      name: props.componentId,
      passProps: props.passProps,
      options: {
        topBar: {
          backButton: {
            visible: false,
          },
        },
      },
    },
  });
};

export const pushScreenOnHistoryScreen = (props: pushComponentProps) => {

  const name = props.passProps.formData.form.name;
  const id = props.passProps.formData.id;

  Navigation.push(Screens.HISTORY_SCREEN, {
    component: {
      id: props.componentId,
      name: props.componentId,
      passProps: props.passProps,
      options: {
        topBar: {
          title: {
            text: name + ' (ID: ' + id + ')'
          },
          backButton: {
            showTitle: false,
          },
        },
      },
    },
  });
};

