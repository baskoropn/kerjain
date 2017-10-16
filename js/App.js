/* @flow */

import React from "react";

import { Platform } from "react-native";
import { Root } from "native-base";
import { StackNavigator, TabNavigator } from "react-navigation";

import Drawer from "./Drawer";
import Login from "./components/login/";
import Register from "./components/register/";
import Home from "./components/home/";
import Education from "./components/register/education";
import EducationAdd from "./components/register/educationAdd";
import WorkExperience from "./components/register/workExperience";
import WorkExperienceAdd from "./components/register/workExperienceAdd";
import MyProfile from "./components/myProfile/";
import ChangePassword from "./components/myProfile/changePassword";
import EducationProfile from "./components/myProfile/education";
import PersonalInfo from "./components/myProfile/personalInfo";
import SelfPromotingVideo from "./components/myProfile/selfPromotingVideo";
import WorkExperienceProfile from "./components/myProfile/workExperience";
import JobDetail from "./components/jobDetail/";
import Notification from "./components/home/notification";
import JobSearch from "./components/home/jobSearch";
import ForgotPassword from "./components/forgotPassword/";

const AppNavigator = StackNavigator(
    {
        Drawer: { screen: Drawer },
        Login: { screen: Login },
        Register: { screen: Register },
        Home: { screen: Home },
        Education: { screen: Education },
        EducationAdd: { screen: EducationAdd },
        WorkExperience: { screen: WorkExperience },
        WorkExperienceAdd: { screen: WorkExperienceAdd },
        MyProfile: { screen: MyProfile },
        JobDetail: { screen: JobDetail },
        Notification: { screen: Notification },
        JobSearch: { screen: JobSearch },
        ForgotPassword: { screen: ForgotPassword },
        ChangePassword: { screen: ChangePassword },
        EducationProfile: { screen: EducationProfile },
        PersonalInfo: { screen: PersonalInfo },
        SelfPromotingVideo: { screen: SelfPromotingVideo },
        WorkExperienceProfile: { screen: WorkExperienceProfile },
    },
    {
        initialRouteName: "Drawer",
        headerMode: "none",
    }
);

export default () =>
    <Root>
        <AppNavigator />
    </Root>;
