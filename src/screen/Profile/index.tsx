import React, { useState } from 'react';
import { Image, Linking, StyleSheet, Text, View, Alert } from 'react-native';
import { List } from 'react-native-paper';
import { Divider } from 'react-native-elements';
import { Colors } from '../../styles/colors';
import { IMAGES } from '../../constant/Images';
import { FAMILY, SIZE } from '../../styles/font';
import { LogoutIcon, MailIcon, PolicyIcon, UpdateIcon } from '../../assets/svg';
import { useDispatch, useSelector } from 'react-redux';
import { UserActionLogout } from '../../store/user';
import { selectUserData, userSelectorAuthenticationToken } from '../../selector/user';

const Profile = () => {
  const dispatch = useDispatch();
  // const user = useSelector(selectUserData);

  //hardcode 
  const user = {
    "id": "6",
    "name": "Developer",
    "email": "ceo@mrteoh.com",
    "phone_number": null,
    "parent_id": null,
    "organizations": [
      {
        "id": "4",
        "name": "Default"
      }
    ],
    "roles": [
      {
        "id": "801",
        "label": "Administrator"
      }
    ],
    "profile": {
      "first_name": "Developer",
      "middle_name": "Developer",
      "last_name": "Developer",
      "date_of_birth": "2022-08-16"
    }
  };

  const token = useSelector(userSelectorAuthenticationToken);

  const [showBox, setShowBox] = useState(true);

  // auto logout
  if (!user) {
    dispatch(UserActionLogout())
  }

  const showConfirmDialog = () => {
    return Alert.alert(
      "Are your sure?",
      "Are you sure you want to leave?",
      [
        // The "Yes" button
        {
          text: "Yes",
          onPress: () => {
            // setShowBox(false);
            dispatch(UserActionLogout())

          },
        },
        // The "No" button
        // Does nothing but dismiss the dialog when tapped
        {
          text: "No",
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Image
          source={IMAGES.PROFILE_PLACEHOLDER}
          resizeMode="contain"
          resizeMethod="auto"
          style={styles.profileLogo}
        />
        <View style={styles.topHeader}>
          <Text style={styles.name}>{user ? user.name : ''}</Text>
          <Text style={styles.subText}>{user ? user.phone_number : ''}</Text>
        </View>
      </View>

      {/* email */}
      <View style={styles.listContainer}>
        <List.Item
          style={styles.list}
          titleStyle={styles.title}
          title="Email"
          descriptionStyle={styles.description}
          description={user ? user.email : ''}
          left={() => (
            <View style={styles.listIcon}>
              <MailIcon width={30} height={40} color={Colors.DarkGray} />
            </View>
          )}
        />
        <Divider />
      </View>

      <View style={styles.listContainer}>
        <List.Item
          style={styles.list}
          titleStyle={styles.title}
          title="Update"
          descriptionStyle={styles.updateText}
          description={() => (
            <>
              <Text style={styles.updateText}>Updated</Text>
              <Text style={styles.updateVersion}>Current Version 1.03 Build 1101</Text>
            </>
          )}
          left={() => (
            <View style={styles.listIcon}>
              <UpdateIcon width={30} height={40} color={Colors.DarkGray} />
            </View>
          )}
        />
        <Divider />
      </View>

      {/* Privacy Policy */}
      <View style={styles.listContainer}>
        <List.Item
          onPress={() =>
            Linking.openURL('https://sanspaper.com/privacy-policy/')
          }
          style={styles.list}
          titleStyle={styles.title}
          title="Privacy Policy"
          left={() => (
            <View style={styles.listIcon}>
              <PolicyIcon width={30} height={40} color={Colors.DarkGray} />
            </View>
          )}
        />
        <Divider />
      </View>
      {/* logout */}
      <View style={styles.listContainer}>
        <List.Item
          onPress={() => showConfirmDialog()}
          style={styles.list}
          titleStyle={styles.title}
          title="Logout"
          left={() => (
            <View style={styles.listIcon}>
              <LogoutIcon width={30} height={40} color={Colors.DarkRed} />
            </View>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.White,
  },
  top: {
    backgroundColor: Colors.DarkRed,
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingTop: 23,
    paddingBottom: 23,
  },
  profileLogo: {
    width: 75,
    height: 75,
  },
  topHeader: {
    flex: 1,
    marginLeft: 20,
    justifyContent: 'center',
  },
  name: {
    fontSize: SIZE.MEDIUM,
    marginBottom: 5,
    letterSpacing: 1,
    color: Colors.White,
    fontFamily: FAMILY.QUICKSAND_REGULAR,
  },
  subText: {
    color: Colors.White,
    fontSize: SIZE.REGULAR - 2,
    fontFamily: FAMILY.QUICKSAND_REGULAR,
  },
  listContainer: {
    paddingHorizontal: 30,
    justifyContent: 'center',
  },
  list: {
    paddingVertical: 20,
  },
  status: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 20,
  },
  title: {
    fontFamily: FAMILY.QUICKSAND_REGULAR,
    letterSpacing: 0.2,
    color: Colors.Black,
  },
  description: {
    fontFamily: FAMILY.QUICKSAND_REGULAR,
    letterSpacing: 0.2,
    paddingTop: 3,
    color: Colors.DarkGray,
  },
  updateText: {
    fontFamily: FAMILY.QUICKSAND_REGULAR,
    paddingVertical: 3,
    color: Colors.DarkGray,
    fontSize: 10,
  },
  updateVersion: {
    color: Colors.Green,
    fontFamily: FAMILY.QUICKSAND_REGULAR,
  },
});

export default Profile;
