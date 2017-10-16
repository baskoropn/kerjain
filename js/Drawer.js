/* @flow */

import React from "react";
import { DrawerNavigator } from "react-navigation";

import Home from "./components/home/";
import SideBar from "./components/sidebar";
import Login from "./components/login/";

const Drawer = DrawerNavigator(
  {
    Login: { screen: Login },
    Home: { screen: Home }
  },
  {
    initialRouteName: "Login",
    contentOptions: {
      activeTintColor: "#fff"
    },
    contentComponent: props => <SideBar {...props} />
  }
);

export default Drawer;
