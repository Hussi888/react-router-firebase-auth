import React, { Component } from 'react';
import { database, auth, storage } from '../../config/constants';

import '../../styles/Skill.css';

class Strength extends Component {

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
    this.setState({value: event.target.value});
  }

  questionSubmit(){
      //Validate

    database.ref('users/'+ auth.currentUser.uid + '/StrengthTest/').set({
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
        this.skillRef = this.userRef.child('SkillSurvey');
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
          
          <div style={{backgroundColor: "#FDC332"}}>
            <div className="container">
            <br/><br/><br/><br/>
              <h1 className="Hero-text">Find your Strenghts! </h1> <br/><br/>
              <p className="Hero-paragraph">Review the following fifty-two skills and their corresponding definitions. Check all skills you think you would enjoy consistently performing at work.</p>
              <br/><br/><br/><br/>
            </div>
          </div>

          <div className="alert alert-warning sticky-top" role="alert">
          <div className="container" >Enter your results obtained from Gallup Strength Test, and input below.</div>
          </div>
          <br/>
          <div className="container">
            <div className="card">
              <h5 className="card-header bg-warning mb-3" >Gallup Strength Test</h5>
              <div className="card-body">
                <h5 className="card-title">Request credentials for your test, by emailing on <a href="mailto:hussain.imtiaz99@gmail.com" style={{color:"#FDC332"}}>hussain.imtiaz99@gmail.com</a></h5>
                <p className="card-text">Access code + Username will be sent.</p>
                <a href="https://my.gallup.com/_Home/RedeemAccessCode" className="btn btn-warning">Take Test</a>
              </div>
            </div>
            <br/><br/>
            <form className="row g-3 needs-validation" onSubmit={this.questionSubmit} novalidate>
              <div className="col-md-3">
                <label for="validationCustom04" className="form-label">Input Gallup Result</label>
                <select className="form-select" id="validationCustom04" value={this.state.value} onChange={this.answerSelected} required>
                  <option selected disabled value="">Choose...</option>
                  <option value="Achiever">Achiever</option>
                  <option value="Activator">Activator</option>
                  <option value="Adaptability">Adaptability</option>
                  <option value="Analytical">Analytical</option>
                  <option value="Arranger">Arranger</option>
                  <option value="Belief">Belief</option>
                  <option value="Command">Command</option>
                  <option value="Communication">Communication</option>
                  <option value="Competition">Competition</option>
                  <option value="Connectedness">Connectedness</option>
                  <option value="Consistency">Consistency</option>
                  <option value="Context">Context</option>
                  <option value="Deliberative">Deliberative</option>
                  <option value="Developer">Developer</option>
                  <option value="Discipline">Discipline</option>
                  <option value="Empathy">Empathy</option>
                  <option value="Focus">Focus</option>
                  <option value="Futuristic">Futuristic</option>
                  <option value="Harmony">Harmony</option>
                  <option value="Ideation">Ideation</option>
                  <option value="Includer">Includer</option>
                  <option value="Individualization">Individualization</option>
                  <option value="Input">Input</option>
                  <option value="Intellection">Intellection</option>
                  <option value="Learner">Learner</option>
                  <option value="Maximizer">Maximizer</option>
                  <option value="Positivity">Positivity</option>
                  <option value="Relator">Relator</option>
                  <option value="Responsibility">Responsibility</option>
                  <option value="Restorative">Restorative</option>
                  <option value="Self-Assurance">Self-Assurance</option>
                  <option value="Significance">Significance</option>
                  <option value="Strategic">Strategic</option>
                  <option value="Woo">Woo</option>
                </select>
                <div className="invalid-feedback">
                  Please select a valid choice.
                </div>
              </div>
              <div className="col-12">
                <button className="btn btn-warning" type="submit">Submit Gallup Results</button>
              </div>
            </form>
          </div>
          <div className="container" >
            
          </div>
          </div> 
    }
    else if(this.state.isSubmitted) {
      questions =
        <div style={{pointerEvents: "none", opacity: "0.4"}}>
            <h1> Text</h1>
            <input type="text"/>
            <input type="password"/>
            <button>Login</button>
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

export default Strength;