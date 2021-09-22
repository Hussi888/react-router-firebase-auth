import React, { Component } from 'react';
import { database, auth, storage } from '../../config/constants';

import '../../styles/Skill.css';

class Interest extends Component {

  constructor(props){
    super(props);

    this.state = {
      value: {
        value1: '',
        value2: ''
      },
      isSubmitted: false
    };
    this.answerSelected = this.answerSelected.bind(this);
    this.questionSubmit = this.questionSubmit.bind(this);
  }

  answerSelected(event){
    var value = this.state.value;
    if(event.target.name === 'value1'){
      value.value1 = event.target.value;
    } else if(event.target.name === 'value2'){
      value.value2 = event.target.value;
    }
    this.setState({value: value }, function(){
      console.log(this.state);
    });
  }

  questionSubmit(){
      //Validate

    database.ref('users/'+ auth.currentUser.uid + '/InterestTest/').set({
      value: this.state.value
    });
    this.setState({isSubmitted: true});
    this.props.history.push('/');
  }

  componentDidMount() {
    window.scrollTo(0, 0)
    auth.onAuthStateChanged((currentUser) => {
      this.setState({ currentUser: currentUser || {} });      
      
      if (currentUser) {
        // Init current user Refs
        this.userRef = database.ref('/users').child(currentUser.uid);
        this.skillRef = this.userRef.child('SkillSurvey');
        this.userStorageRef = storage.ref('/user-files').child(currentUser.uid);

        this.guidesRef.on('value', (snapshot) => {
          const guides = snapshot.val();
          this.setState({ guides });
        });

        this.userRef.child('images').on('value', (snapshot) => {
          const userImages = snapshot.val();
          if (userImages) {
            this.setState({ userImages });
          }
        });

        // Add user to users database if not exist
        this.userRef.once('value', (snapshot) => {
          const userData = snapshot.val();
          if (!userData) {
            this.userRef.set({ name: currentUser.displayName });
          }
        });

      } else {
        this.setState({ guides: null, userImages: null });
      }
    });
  }

  render() {
    var questions; 
    var user = auth.currentUser;

    if (user && !this.state.isSubmitted) {
        questions =
        <div className="App">
          
          <div style={{backgroundColor: "#04D5C9"}}>
            <div className="container">
            <br/><br/><br/><br/>
              <h1 className="Hero-text">Find your Interests! </h1> <br/><br/>
              <p className="Hero-paragraph">Review the following fifty-two skills and their corresponding definitions. Check all skills you think you would enjoy consistently performing at work.</p>
              <br/><br/><br/><br/>
            </div>
          </div>

          <div className="alert alert-info sticky-top" role="alert">
          <div className="container" >Enter your results obtained from 123Test for Interests, and input below.</div>
          </div>
          <br/>
          <div className="container">
            <div className="card">
              <h5 className="card-header" style={{backgroundColor: "#04D5C9"}}>123Test for Interests</h5>
              <div className="card-body">
                <h5 className="card-title">Take the test and obtain two values for defining your interests.</h5>
                <p className="card-text">Input the obtained results below into the fields.</p>
                <a href="https://www.123test.com/career-test/" className="btn" style={{backgroundColor: "#04D5C9"}}>Take Test</a>
              </div>
            </div>
            <br/><br/>
            <form className="row g-3 needs-validation" onSubmit={this.questionSubmit} novalidate>
              <div className="col-md-3">
                <label for="validationCustom04" className="form-label">Input 1st Result</label>
                <select name="value1" className="form-select" id="validationCustom04" value={this.state.value1} onChange={this.answerSelected} required>
                  <option selected disabled value="">Choose...</option>
                  <option value="Artistic">Artistic</option>
                  <option value="Conventional">Conventional</option>
                  <option value="Enterprising">Enterprising</option>
                  <option value="Investigative">Investigative</option>
                  <option value="Realistic">Realistic</option>
                  <option value="Social">Social</option>
                </select>
                <div className="invalid-feedback">
                  Please select a valid choice.
                </div>
              </div>

              <div className="col-md-3">
                <label for="validationCustom04" className="form-label">Input 2nd Result</label>
                <select name="value2" className="form-select" id="validationCustom04" value={this.state.value2} onChange={this.answerSelected} required>
                  <option selected disabled value="">Choose...</option>
                  <option value="Artistic">Artistic</option>
                  <option value="Conventional">Conventional</option>
                  <option value="Enterprising">Enterprising</option>
                  <option value="Investigative">Investigative</option>
                  <option value="Realistic">Realistic</option>
                  <option value="Social">Social</option>
                </select>
                <div className="invalid-feedback">
                  Please select a valid choice.
                </div>
              </div>
              
              
              <div className="col-12">
                <button className="btn" style={{backgroundColor: "#04D5C9"}} type="submit">Submit 123Test Results</button>
              </div>
            </form>
          </div>
          <div className="container" >
            
          </div>
          </div> 
    }
    else if(this.state.isSubmitted) {

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

export default Interest;