import React, { Component } from "react";
import { Image, View, StatusBar, TouchableOpacity } from "react-native";

import { Container, Content, Button, Text, Form, Header, Item, Label, Input, Icon, Title, Body, Left, Right } from "native-base";

import styles from "./styles";

const launchscreenLogo = require("../../../img/logo.png");

class Login extends Component {
	render() {
		return (
			<Container>
				<StatusBar backgroundColor="#5ABECC" barStyle="light-content" />
				<Content style={styles.container}>	
					<View style={styles.logoContainer}>
						<Image source={launchscreenLogo} style={styles.logo} />
						<Text style={styles.titleContainer}>Promote - Engage - Recruit</Text>
					</View>
					<View style={styles.contentForm}>
						<Form>
							<Item style={{ borderColor: "#FFF" }}>
								<Icon active name='person' style={{ color:'#FFF', fontSize: 20}}/>
								<Input placeholder='Username or email' style={{ color: '#FFF', fontSize: 15 }} placeholderTextColor="#FFF" />
							</Item>
							<Item style={{ borderColor: "#FFF" }}>
								<Icon active name='unlock' style={{color:'#FFF', fontSize: 20 }} />
								<Input placeholder='Password' secureTextEntry  style={{ color: '#FFF', fontSize: 15 }} placeholderTextColor="#FFF" />
							</Item>
						</Form>
						<TouchableOpacity style={{alignItems : 'center', marginTop: 20, marginBottom:20}} onPress={() => this.props.navigation.navigate("ForgotPassword")}>
							<Text style={{ textAlign: 'right', 
									marginTop:10,
									color:'#FFF', 
									fontSize: 12, 
									paddingLeft:5 }}>Forgot your password?</Text>
						</TouchableOpacity>
						<Button full rounded style={{ 
							marginBottom:25, 
							backgroundColor:'#189DAE' }}
						onPress={() => this.props.navigation.navigate("Home")}
						>
							<Text>Sign In</Text>
						</Button>
						<Text style={{ justifyContent: 'center', 
							           textAlign: 'center', 
									   color:'#FFF', 
									   fontSize:15,
									   opacity:0.8 }}>Or continue with social media and email</Text>
						<View style={styles.socialMediaForm}>
							<Button rounded small style={{ marginRight:10 }}>
								<Icon active
								name='logo-facebook'
								size={100}
								color='#FFF'
								/>
							</Button>
							<Button rounded danger small>
								<Icon active
								name='logo-googleplus'
								size={100}
								color='#FFF'
								/>
							</Button>
		
						</View>
					</View>
					<View style={styles.footer}>
							<Text style={{ textAlign: 'center', color:'#FFF', fontSize: 13  }}>
								new member? 
							</Text> 
							<TouchableOpacity 
								onPress={() => this.props.navigation.navigate("Register")}
							>
								<Text 
									style={{ textAlign: 'center', 
										color:'#FFF', 
										fontSize: 13, 
										textDecorationLine: 'underline', 
										paddingLeft:5 }}>Register here</Text>
							</TouchableOpacity>
					</View>
				</Content>
			</Container>
		);
	}
}

export default Login;
