//library
import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { Input, Button } from 'react-native-elements';

//navigation
import { UserActionLogin } from 'store/user';
import { useDispatch, useSelector } from 'react-redux';

import { IMAGES } from 'constant/Images';
import { userSelectorLoginError } from 'selector/user';
import { EyeIcon } from 'components/Common/EyeIcon';
import { styles } from './styles';

const LoginScreen = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = React.useState<String>('');
  const [password, setPassword] = React.useState<String>('');
  const [showPassword, setShowPassword] = React.useState(false);
  const loginError = useSelector(userSelectorLoginError);

  const onPressLogin = async () => {
    const payload = { email, password };
    dispatch(UserActionLogin(payload));
  };

  const toggleEye = () => {
    setShowPassword(!showPassword);
  };
  return (
    <KeyboardAvoidingView style={styles.mainContainer} behavior={Platform.OS === "ios" ? "padding" : "height"} >
      <Image style={styles.logo} resizeMode="contain" source={IMAGES.LOGO} />
      <Text style={Platform.OS === "ios" ? styles.signInText : styles.androidSignInText}>Sign In</Text>
      <Text style={Platform.OS === "ios" ? styles.welcomeText : styles.androidWelcomeText}>
        Welcome to Sans Paper remote access portal
      </Text>
      <Input
        containerStyle={Platform.OS === "ios" ? styles.inputContainer : styles.androidInputContainer}
        inputContainerStyle={styles.textInputContainer}
        label="Email"
        labelStyle={styles.inputLabelText}
        onChangeText={text => setEmail(text)}
        autoCapitalize='none'
      />
      <Input
        containerStyle={Platform.OS === "ios" ? styles.inputContainer : styles.androidInputContainer}
        inputContainerStyle={styles.textInputContainer}
        errorMessage={loginError}
        secureTextEntry={!showPassword}
        label="Password"
        labelStyle={styles.inputLabelText}
        leftIconContainerStyle={{}}
        autoCapitalize='none'
        rightIcon={
          <EyeIcon showPassword={showPassword} toggleEye={toggleEye} />
        }
        onChangeText={text => setPassword(text)}
      />
      <Button
        buttonStyle={Platform.OS === "ios" ? styles.signInButton : styles.androidSignInButton}
        onPress={onPressLogin}
        title="Login to your account"
        titleProps={{}}
        titleStyle={styles.signInButtonText}
      />
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
