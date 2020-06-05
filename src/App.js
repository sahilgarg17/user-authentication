import React, {Component} from 'react';
import {View} from 'react-native';
import firebase from 'firebase';
import {Header, Button, Spinner} from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
    state = {loggedIn: null};
    UNSAFE_componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyA5dF0v0fN8IBYRGuqNjEXrHWrTYL3zMtc',
            authDomain: 'authentication-1d9f1.firebaseapp.com',
            databaseURL: 'https://authentication-1d9f1.firebaseio.com',
            projectId: 'authentication-1d9f1',
            storageBucket: 'authentication-1d9f1.appspot.com',
            messagingSenderId: '875833771136',
          });
          firebase.auth().onAuthStateChanged( (user) => {
                if(user){
                    this.setState({loggedIn: true});
                }
                else{
                    this.setState({loggedIn: false});
                }
          }
          );
    }
    renderContent() {
        switch (this.state.loggedIn) {
            case true:
                return (
                    <Button onPress={() => firebase.auth().signOut()}>
                        Log Out!!
                    </Button>
                );
            case false:
                return <LoginForm />;
            default:
                return <Spinner size = "large" />;
                
        }        
    }
    render() {
        return(
            <View>
                <Header headerText="AUTHENTICATION" />
                {this.renderContent()}
            </View>
        );
    }
}
export default App;