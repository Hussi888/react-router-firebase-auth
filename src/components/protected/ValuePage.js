import React, { Component } from 'react';
import { database, auth, storage } from '../../config/constants';

import ValueDnd from '../../helpers/drag-n-drop/ValueDND';

import '../../styles/Values.css';


class Value extends Component {

  constructor(props){
    super(props);
    
    this.state = {
      value: '',
      isSubmitted: false,
     
    };

    this.answerSelected = this.answerSelected.bind(this);
    this.questionSubmit = this.questionSubmit.bind(this);
  
  }
  
  answerSelected(event){
    this.setState({value: ''});
  }

  questionSubmit(){
      //Validate
    database.ref('users/'+ auth.currentUser.uid + '/ValueTest/').set({
      value: this.state.value
    });
    this.setState({isSubmitted: true});
    this.props.history.push('/value');
  }

  componentDidMount() {
    window.scrollTo(0, 0)
    auth.onAuthStateChanged((currentUser) => {
      this.setState({ currentUser: currentUser || {} });      
      
      if (currentUser) {
        // Init current user Refs
        this.userRef = database.ref('/users').child(currentUser.uid);
        this.skillRef = this.userRef.child('ValueSurvey');
        this.userStorageRef = storage.ref('/user-files').child(currentUser.uid);

        // Add user to users database if not exist
        this.userRef.once('value', (snapshot) => {
          const userData = snapshot.val();
          if (!userData) {
            this.userRef.set({ name: currentUser.displayName });
          }
        });

      } else {
        this.setState({ value: null });
      }
    });
  }

  render() {
    var questions; 
    var user = auth.currentUser;

    if (user && !this.state.isSubmitted) {
        questions =
        <div className="App">
          
          <div style={{backgroundColor: "#0085FF"}}>
            <div className="container">
            <br/><br/><br/><br/>
              <h1 className="Hero-text">Select your Values! </h1> <br/><br/>
              <p className="Hero-paragraph">Review the following fifty-two skills and their corresponding definitions. Check all skills you think you would enjoy consistently performing at work.</p>
              <br/><br/><br/><br/>
            </div>
          </div>

          <div className="alert alert-primary sticky-top" role="alert">
          <div className="container" >Enter your results obtained from Gallup Strength Test, and input below.</div>
          </div>
          <br/>
          <br/>
          <div className="container">
            <ValueDnd/> <br/>
          </div>

          </div> 
    }

    else {
      questions =
        <div className="App">
          <div style={{backgroundColor: "#EAEAF7"}}>
            <div className="container">
            <br/><br/><br/><br/>
              <h1 className="Hero-text">Sign in first, <br/> then I can help.</h1> <br/><br/>
              <p className="Hero-paragraph">You need to login to be able to find your values and save your progress.</p>
              <button className="Hero-button" onClick={this.signIn}>Sign In</button>
              <br/><br/><br/><br/>
            </div>
          </div>
       
          </div>
    }
    return (
      <div>
        {questions}
      </div>
    );
    
  }
}

export default Value;