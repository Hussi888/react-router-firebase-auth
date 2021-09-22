import React, { Component } from 'react';
import { database, auth, storage } from '../../config/constants';

import '../../styles/Skill.css';

class Skill extends Component {

  constructor(props){
    super(props);

    this.state = {
      answers: {
        answer1: '',
        answer2: '',
        answer4: '',
        answer5: '',
        answer6: '',
        answer7: '',
        answer8: '',
        answer9: '',
        answer10: '',
        answer11: '',
        answer12: '',
        answer13: '',
        answer14: '',
        answer15: '',
        answer16: '',
        answer17: '',
        answer18: '',
        answer19: '',
        answer20: '',
        answer21: '',
        answer22: '',
        answer23: '',
        answer24: '',
        answer25: '',
        answer26: '',
        answer27: '',
        answer28: '',
        answer29: '',
        answer30: '',
        answer31: '',
        answer32: '',
        answer33: '',
        answer34: '',
        answer35: '',
        answer36: '',
        answer37: '',
        answer38: '',
        answer39: '',
        answer40: '',
        answer41: '',
        answer42: '',
        answer43: '',
        answer44: '',
        answer45: '',
        answer46: '',
        answer47: '',
        answer48: '',
        answer49: '',
        answer50: '',
        answer51: ''
      },
      isSubmitted: false
    };
    this.answerSelected = this.answerSelected.bind(this);
    this.questionSubmit = this.questionSubmit.bind(this);
  }

  answerSelected(event){
    var answers = this.state.answers;
    if(event.target.name === 'answer1'){
      answers.answer1 = event.target.value;
    } else if(event.target.name === 'answer2'){
      answers.answer2 = event.target.value;
    } else if(event.target.name === 'answer3'){
      answers.answer3 = event.target.value;
    } else if(event.target.name === 'answer4'){
      answers.answer4 = event.target.value;
    } else if(event.target.name === 'answer5'){
      answers.answer5 = event.target.value;
    } else if(event.target.name === 'answer6'){
      answers.answer6 = event.target.value;
    } else if(event.target.name === 'answer7'){
      answers.answer7 = event.target.value;
    } else if(event.target.name === 'answer8'){
      answers.answer8 = event.target.value;
    } else if(event.target.name === 'answer9'){
      answers.answer9 = event.target.value;
    } else if(event.target.name === 'answer10'){
      answers.answer10 = event.target.value;
    } else if(event.target.name === 'answer11'){
      answers.answer11 = event.target.value;
    } else if(event.target.name === 'answer12'){
      answers.answer12 = event.target.value;
    } else if(event.target.name === 'answer13'){
      answers.answer13 = event.target.value;
    } else if(event.target.name === 'answer14'){
      answers.answer14 = event.target.value;
    } else if(event.target.name === 'answer15'){
      answers.answer15 = event.target.value;
    } else if(event.target.name === 'answer16'){
      answers.answer16 = event.target.value;
    } else if(event.target.name === 'answer17'){
      answers.answer17 = event.target.value;
    } else if(event.target.name === 'answer18'){
      answers.answer18 = event.target.value;
    } else if(event.target.name === 'answer19'){
      answers.answer19 = event.target.value;
    } else if(event.target.name === 'answer20'){
      answers.answer20 = event.target.value;
    } else if(event.target.name === 'answer21'){
      answers.answer21 = event.target.value;
    } else if(event.target.name === 'answer22'){
      answers.answer22 = event.target.value;
    } else if(event.target.name === 'answer23'){
      answers.answer23 = event.target.value;
    } else if(event.target.name === 'answer24'){
      answers.answer24 = event.target.value;
    } else if(event.target.name === 'answer25'){
      answers.answer25 = event.target.value;
    } else if(event.target.name === 'answer26'){
      answers.answer26 = event.target.value;
    } else if(event.target.name === 'answer27'){
      answers.answer27 = event.target.value;
    } else if(event.target.name === 'answer28'){
      answers.answer28 = event.target.value;
    } else if(event.target.name === 'answer29'){
      answers.answer29 = event.target.value;
    } else if(event.target.name === 'answer30'){
      answers.answer30 = event.target.value;
    } else if(event.target.name === 'answer31'){
      answers.answer31 = event.target.value;
    } else if(event.target.name === 'answer32'){
      answers.answer32 = event.target.value;
    } else if(event.target.name === 'answer33'){
      answers.answer33 = event.target.value;
    } else if(event.target.name === 'answer34'){
      answers.answer34 = event.target.value;
    } else if(event.target.name === 'answer35'){
      answers.answer35 = event.target.value;
    } else if(event.target.name === 'answer36'){
      answers.answer36 = event.target.value;
    } else if(event.target.name === 'answer37'){
      answers.answer37 = event.target.value;
    } else if(event.target.name === 'answer38'){
      answers.answer38 = event.target.value;
    } else if(event.target.name === 'answer39'){
      answers.answer39 = event.target.value;
    } else if(event.target.name === 'answer40'){
      answers.answer40 = event.target.value;
    } else if(event.target.name === 'answer41'){
      answers.answer41 = event.target.value;
    } else if(event.target.name === 'answer42'){
      answers.answer42 = event.target.value;
    } else if(event.target.name === 'answer43'){
      answers.answer43 = event.target.value;
    } else if(event.target.name === 'answer44'){
      answers.answer44 = event.target.value;
    } else if(event.target.name === 'answer45'){
      answers.answer45 = event.target.value;
    } else if(event.target.name === 'answer46'){
      answers.answer46 = event.target.value;
    } else if(event.target.name === 'answer47'){
      answers.answer47 = event.target.value;
    } else if(event.target.name === 'answer48'){
      answers.answer48 = event.target.value;
    } else if(event.target.name === 'answer49'){
      answers.answer49 = event.target.value;
    } else if(event.target.name === 'answer50'){
      answers.answer50 = event.target.value;
    } else if(event.target.name === 'answer51'){
      answers.answer51 = event.target.value;
    } 

    this.setState({answers: answers}, function(){
      console.log(this.state);
    });
  }

  questionSubmit(){
      //Validate

    database.ref('users/'+ auth.currentUser.uid + '/SkillSurvey/').set({
      answers: this.state.answers
    });
    this.setState({isSubmitted: true});
    this.props.history.push('/interest');
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
          
          <div style={{backgroundColor: "#FD6A65"}}>
            <div className="container">
            <br/><br/><br/><br/>
              <h1 className="Hero-text">Find your Skills! </h1> <br/><br/>
              <p className="Hero-paragraph">Review the following fifty-two skills and their corresponding definitions. Check all skills you think you would enjoy consistently performing at work.</p>
              <br/><br/><br/><br/>
            </div>
          </div>

          <div className="alert alert-danger sticky-top" role="alert">
          <div className="container" >Is the following a skill that you enjoy using or are good at?</div>
          </div>

          <div className="container" >
            
            <form onSubmit={this.questionSubmit} >

              <div className="card" style={{width: "20rem"}, {marginTop: "40px"}}>
                  <br/>
                  <div className="form-check form-check-inline">
                  <label className="Form-label">Act as Liaison – Represent, serve as a link between individuals or groups</label> <br /><br/>
                  <label className="Form-label"><input type="radio" name="answer1" value="Act as Liaison" style={{transform: "scale(2)"}} onChange={this.answerSelected} required/>&nbsp; &nbsp; Yes &nbsp; &nbsp;	&nbsp;</label>
                  <label className="Form-label"><input type="radio" name="answer1" value="No" style={{transform: "scale(2)"}} onChange={this.answerSelected} required/>&nbsp; &nbsp; No	</label> <br/>	<br/>                 
                </div>
              </div>

              <div className="card" style={{width: "20rem"}, {marginTop: "40px"}}>
              <br/>
                  <div className="form-check form-check-inline">
                  <label className="Form-label">Adapt to Change – Easily and quickly respond to changing assignments, work settings and priorities</label> <br /><br/>
                  <label className="Form-label"><input type="radio" name="answer2" value="Adapt to Change" style={{transform: "scale(2)"}} onChange={this.answerSelected} required/>&nbsp; &nbsp; Yes &nbsp; &nbsp;	&nbsp;</label>
                  <label className="Form-label"><input type="radio"  name="answer2" value="No" style={{transform: "scale(2)"}} onChange={this.answerSelected} required/>&nbsp; &nbsp; No	</label> <br/>	<br/>                 
                </div>
              </div>

              <div className="card" style={{width: "20rem"}, {marginTop: "40px"}}>
                  <br/>
                  <div className="form-check form-check-inline">
                  <label className="Form-label">Ambiguity (Dealing with) – Be comfortable and effective with issues that lack clarity, structure, or certainty</label> <br /><br/>
                  <label className="Form-label"><input type="radio"  name="answer3" value="Ambiguity, Deal with" style={{transform: "scale(2)"}} onChange={this.answerSelected} required/>&nbsp; &nbsp; Yes &nbsp; &nbsp;	&nbsp;</label>
                  <label className="Form-label"><input type="radio"  name="answer3" value="No" style={{transform: "scale(2)"}} onChange={this.answerSelected} required/>&nbsp; &nbsp; No	</label> <br/>	<br/>                 
                </div>
              </div>

              <div className="card" style={{width: "20rem"}, {marginTop: "40px"}}>
                  <br/>
                  <div className="form-check form-check-inline">
                  <label className="Form-label">Analyze – Break down and figure out problems logically</label> <br /><br/>
                  <label className="Form-label"><input type="radio"  name="answer4" value="Analyze" style={{transform: "scale(2)"}} onChange={this.answerSelected} required/>&nbsp; &nbsp; Yes &nbsp; &nbsp;	&nbsp;</label>
                  <label className="Form-label"><input type="radio"  name="answer4" value="No" style={{transform: "scale(2)"}} onChange={this.answerSelected} required/>&nbsp; &nbsp; No	</label> <br/>	<br/>                 
                </div>
              </div>

              <div className="card" style={{width: "20rem"}, {marginTop: "40px"}}>
                  <br/>
                  <div className="form-check form-check-inline">
                  <label className="Form-label">Budget – Economize, save, stretch money or other resources</label> <br /><br/>
                  <label className="Form-label"><input type="radio"  name="answer5" value="Budget" style={{transform: "scale(2)"}} onChange={this.answerSelected} required/>&nbsp; &nbsp; Yes &nbsp; &nbsp;	&nbsp;</label>
                  <label className="Form-label"><input type="radio"  name="answer5" value="No" style={{transform: "scale(2)"}} onChange={this.answerSelected} required/>&nbsp; &nbsp; No	</label> <br/>	<br/>                 
                </div>
              </div>

              <div className="card" style={{width: "20rem"}, {marginTop: "40px"}}>
                  <br/>
                  <div className="form-check form-check-inline">
                  <label className="Form-label">Classify – Group, categorize, systematize data, people, or things</label> <br /><br/>
                  <label className="Form-label"><input type="radio"  name="answer6" value="Classify" style={{transform: "scale(2)"}} onChange={this.answerSelected} required/>&nbsp; &nbsp; Yes &nbsp; &nbsp;	&nbsp;</label>
                  <label className="Form-label"><input type="radio"  name="answer6" value="No" style={{transform: "scale(2)"}} onChange={this.answerSelected} required/>&nbsp; &nbsp; No	</label> <br/>	<br/>                 
                </div>
              </div>

              <div className="card" style={{width: "20rem"}, {marginTop: "40px"}}>
                  <br/>
                  <div className="form-check form-check-inline">
                  <label className="Form-label">Computer Literate – Develop, organize, complete tasks/projects using software: Word, Excel, PowerPoint</label> <br /><br/>
                  <label className="Form-label"><input type="radio"  name="answer7" value="Computer Literate" style={{transform: "scale(2)"}} onChange={this.answerSelected} required/>&nbsp; &nbsp; Yes &nbsp; &nbsp;	&nbsp;</label>
                  <label className="Form-label"><input type="radio"  name="answer7" value="No" style={{transform: "scale(2)"}} onChange={this.answerSelected} required/>&nbsp; &nbsp; No	</label> <br/>	<br/>                 
                </div>
              </div>

              <div className="card" style={{width: "20rem"}, {marginTop: "40px"}}>
                  <br/>
                  <div className="form-check form-check-inline">
                  <label className="Form-label">Conceptualize – Conceive and internally develop concepts and ideas</label> <br /><br/>
                  <label className="Form-label"><input type="radio"  name="answer8" value="Conceptualize" style={{transform: "scale(2)"}} onChange={this.answerSelected} required/>&nbsp; &nbsp; Yes &nbsp; &nbsp;	&nbsp;</label>
                  <label className="Form-label"><input type="radio"  name="answer8" value="No" style={{transform: "scale(2)"}} onChange={this.answerSelected} required/>&nbsp; &nbsp; No	</label> <br/>	<br/>                 
                </div>
              </div>

              <div className="card" style={{width: "20rem"}, {marginTop: "40px"}}>
                  <br/>
                  <div className="form-check form-check-inline">
                  <label className="Form-label">Counsel – Facilitate insight and personal growth, guide, advise, coach students, employees, or clients</label> <br /><br/>
                  <label className="Form-label"><input type="radio"  name="answer9" value="Counsel" style={{transform: "scale(2)"}} onChange={this.answerSelected} required/>&nbsp; &nbsp; Yes &nbsp; &nbsp;	&nbsp;</label>
                  <label className="Form-label"><input type="radio"  name="answer9" value="No" style={{transform: "scale(2)"}} onChange={this.answerSelected} required/>&nbsp; &nbsp; No	</label> <br/>	<br/>                 
                </div>
              </div>

              <div className="card" style={{width: "20rem"}, {marginTop: "40px"}}>
                  <br/>
                  <div className="form-check form-check-inline">
                  <label className="Form-label">Customer Service – Effectively solve problems and challenges to satisfy customers</label> <br /><br/>
                  <label className="Form-label"><input type="radio"  name="answer10" value="Customer Service" style={{transform: "scale(2)"}} onChange={this.answerSelected} required/>&nbsp; &nbsp; Yes &nbsp; &nbsp;	&nbsp;</label>
                  <label className="Form-label"><input type="radio"  name="answer10" value="No" style={{transform: "scale(2)"}} onChange={this.answerSelected} required/>&nbsp; &nbsp; No	</label> <br/>	<br/>                 
                </div>
              </div>

              <div className="card" style={{width: "20rem"}, {marginTop: "40px"}}>
                  <br/>
                  <div className="form-check form-check-inline">
                  <label className="Form-label">Deal with Feelings – Listen, accept, empathize, show sensitivity, defuse anger, use humor, appreciate</label> <br /><br/>
                  <label className="Form-label"><input type="radio"  name="answer11" value="Deal with Feelings" style={{transform: "scale(2)"}} onChange={this.answerSelected} required/>&nbsp; &nbsp; Yes &nbsp; &nbsp;	&nbsp;</label>
                  <label className="Form-label"><input type="radio"  name="answer11" value="No" style={{transform: "scale(2)"}} onChange={this.answerSelected} required/>&nbsp; &nbsp; No	</label> <br/>	<br/>                 
                </div>
              </div>

              <div className="card" style={{width: "20rem"}, {marginTop: "40px"}}>
                  <br/>
                  <div className="form-check form-check-inline">
                  <label className="Form-label">Delegate – Achieve effective results by assigning tasks to others</label> <br /><br/>
                  <label className="Form-label"><input type="radio"  name="answer12" value="Delegate" style={{transform: "scale(2)"}} onChange={this.answerSelected} required/>&nbsp; &nbsp; Yes &nbsp; &nbsp;	&nbsp;</label>
                  <label className="Form-label"><input type="radio"  name="answer12" value="No" style={{transform: "scale(2)"}} onChange={this.answerSelected} required/>&nbsp; &nbsp; No	</label> <br/>	<br/>                 
                </div>
              </div>

              <div className="card" style={{width: "20rem"}, {marginTop: "40px"}}>
                  <br/>
                  <div className="form-check form-check-inline">
                  <label className="Form-label">Design – Structure new or innovative practices, programs, products or environments</label> <br /><br/>
                  <label className="Form-label"><input type="radio"  name="answer13" value="Design" style={{transform: "scale(2)"}} onChange={this.answerSelected} required/>&nbsp; &nbsp; Yes &nbsp; &nbsp;	&nbsp;</label>
                  <label className="Form-label"><input type="radio"  name="answer13" value="No" style={{transform: "scale(2)"}} onChange={this.answerSelected} required/>&nbsp; &nbsp; No	</label> <br/>	<br/>                 
                </div>
              </div>

              <div className="card" style={{width: "20rem"}, {marginTop: "40px"}}>
                  <br/>
                  <div className="form-check form-check-inline">
                  <label className="Form-label">Entertain/Perform – Amuse, sing, dance, create art, play music for, demonstrate or speak to an audience</label> <br /><br/>
                  <label className="Form-label"><input type="radio"  name="answer14" value="Entertain/Perform" style={{transform: "scale(2)"}} onChange={this.answerSelected} required/>&nbsp; &nbsp; Yes &nbsp; &nbsp;	&nbsp;</label>
                  <label className="Form-label"><input type="radio"  name="answer14" value="No" style={{transform: "scale(2)"}} onChange={this.answerSelected} required/>&nbsp; &nbsp; No	</label> <br/>	<br/>                 
                </div>
              </div>

              <div className="card" style={{width: "20rem"}, {marginTop: "40px"}}>
                  <br/>
                  <div className="form-check form-check-inline">
                  <label className="Form-label">Estimating – Appraise value or cost</label> <br /><br/>
                  <label className="Form-label"><input type="radio"  name="answer15" value="Estimating" style={{transform: "scale(2)"}} onChange={this.answerSelected} required/>&nbsp; &nbsp; Yes &nbsp; &nbsp;	&nbsp;</label>
                  <label className="Form-label"><input type="radio"  name="answer15" value="No" style={{transform: "scale(2)"}} onChange={this.answerSelected} required/>&nbsp; &nbsp; No	</label> <br/>	<br/>                 
                </div>
              </div>

              <div className="card" style={{width: "20rem"}, {marginTop: "40px"}}>
                  <br/>
                  <div className="form-check form-check-inline">
                  <label className="Form-label">Evaluate – Assess, review, or critique feasibility or quality</label> <br /><br/>
                  <label className="Form-label"><input type="radio"  name="answer16" value="Evaluate" style={{transform: "scale(2)"}} onChange={this.answerSelected} required/>&nbsp; &nbsp; Yes &nbsp; &nbsp;	&nbsp;</label>
                  <label className="Form-label"><input type="radio"  name="answer16" value="No" style={{transform: "scale(2)"}} onChange={this.answerSelected} required/>&nbsp; &nbsp; No	</label> <br/>	<br/>                 
                </div>
              </div>

              <div className="card" style={{width: "20rem"}, {marginTop: "40px"}}>
                  <br/>
                  <div className="form-check form-check-inline">
                  <label className="Form-label">Expedite – Speed up production or services, troubleshoot problems, streamline procedures</label> <br /><br/>
                  <label className="Form-label"><input type="radio"  name="answer17" value="Expedite" style={{transform: "scale(2)"}} onChange={this.answerSelected} required/>&nbsp; &nbsp; Yes &nbsp; &nbsp;	&nbsp;</label>
                  <label className="Form-label"><input type="radio"  name="answer17" value="No" style={{transform: "scale(2)"}} onChange={this.answerSelected} required/>&nbsp; &nbsp; No	</label> <br/>	<br/>                 
                </div>
              </div>

              <div className="card" style={{width: "20rem"}, {marginTop: "40px"}}>
                  <br/>
                  <div className="form-check form-check-inline">
                  <label className="Form-label"> Ideas (Generate) – Reflect upon, conceive of, dream up, brainstorm ideas</label> <br /><br/>
                  <label className="Form-label"><input type="radio"  name="answer18" value="Ideas (Generate)" style={{transform: "scale(2)"}} onChange={this.answerSelected} required/>&nbsp; &nbsp; Yes &nbsp; &nbsp;	&nbsp;</label>
                  <label className="Form-label"><input type="radio"  name="answer18" value="No" style={{transform: "scale(2)"}} onChange={this.answerSelected} required/>&nbsp; &nbsp; No	</label> <br/>	<br/>                 
                </div>
              </div>

              <div className="card" style={{width: "20rem"}, {marginTop: "40px"}}>
                  <br/>
                  <div className="form-check form-check-inline">
                  <label className="Form-label">Initiate Change – Exert influence to change status quo, exercise leadership to bring about new direction</label> <br /><br/>
                  <label className="Form-label"><input type="radio"  name="answer19" value="Initiate Change" style={{transform: "scale(2)"}} onChange={this.answerSelected} required/>&nbsp; &nbsp; Yes &nbsp; &nbsp;	&nbsp;</label>
                  <label className="Form-label"><input type="radio"  name="answer19" value="No" style={{transform: "scale(2)"}} onChange={this.answerSelected} required/>&nbsp; &nbsp; No	</label> <br/>	<br/>                 
                </div>
              </div>

              <div className="card" style={{width: "20rem"}, {marginTop: "40px"}}>
                  <br/>
                  <div className="form-check form-check-inline">
                  <label className="Form-label">Implement – Provide detailed follow-through of policies and plans</label> <br /><br/>
                  <label className="Form-label"><input type="radio"  name="answer20" value="Implement" style={{transform: "scale(2)"}} onChange={this.answerSelected} required/>&nbsp; &nbsp; Yes &nbsp; &nbsp;	&nbsp;</label>
                  <label className="Form-label"><input type="radio"  name="answer20" value="No" style={{transform: "scale(2)"}} onChange={this.answerSelected} required/>&nbsp; &nbsp; No	</label> <br/>	<br/>                 
                </div>
              </div>

              <div className="card" style={{width: "20rem"}, {marginTop: "40px"}}>
                  <br/>
                  <div className="form-check form-check-inline">
                  <label className="Form-label">Improvise – To effectively think, speak, and act without preparation</label> <br /><br/>
                  <label className="Form-label"><input type="radio"  name="answer21" value="Improvise" style={{transform: "scale(2)"}} onChange={this.answerSelected} required/>&nbsp; &nbsp; Yes &nbsp; &nbsp;	&nbsp;</label>
                  <label className="Form-label"><input type="radio"  name="answer21" value="No" style={{transform: "scale(2)"}} onChange={this.answerSelected} required/>&nbsp; &nbsp; No	</label> <br/>	<br/>                 
                </div>
              </div>

              <div className="card" style={{width: "20rem"}, {marginTop: "40px"}}>
                  <br/>
                  <div className="form-check form-check-inline">
                  <label className="Form-label">Innovate/Invent – Create unique ideas or combine existing ideas to obtain a new or unique result</label> <br /><br/>
                  <label className="Form-label"><input type="radio"  name="answer22" value="Innovate/Invent" style={{transform: "scale(2)"}} onChange={this.answerSelected} required/>&nbsp; &nbsp; Yes &nbsp; &nbsp;	&nbsp;</label>
                  <label className="Form-label"><input type="radio"  name="answer22" value="No" style={{transform: "scale(2)"}} onChange={this.answerSelected} required/>&nbsp; &nbsp; No	</label> <br/>	<br/>                 
                </div>
              </div>

              <div className="card" style={{width: "20rem"}, {marginTop: "40px"}}>
                  <br/>
                  <div className="form-check form-check-inline">
                  <label className="Form-label">Interview for Information – Draw out subjects through insightful questioning</label> <br /><br/>
                  <label className="Form-label"><input type="radio"  name="answer23" value="Interview for Information" style={{transform: "scale(2)"}} onChange={this.answerSelected} required/>&nbsp; &nbsp; Yes &nbsp; &nbsp;	&nbsp;</label>
                  <label className="Form-label"><input type="radio"  name="answer23" value="No" style={{transform: "scale(2)"}} onChange={this.answerSelected} required/>&nbsp; &nbsp; No	</label> <br/>	<br/>                 
                </div>
              </div>

              <div className="card" style={{width: "20rem"}, {marginTop: "40px"}}>
                  <br/>
                  <div className="form-check form-check-inline">
                  <label className="Form-label">Leadership – Organizing, motivating, providing direction to a group of people to achieve a common goal</label> <br /><br/>
                  <label className="Form-label"><input type="radio"  name="answer24" value="Leadership" style={{transform: "scale(2)"}} onChange={this.answerSelected} required/>&nbsp; &nbsp; Yes &nbsp; &nbsp;	&nbsp;</label>
                  <label className="Form-label"><input type="radio"  name="answer24" value="No" style={{transform: "scale(2)"}} onChange={this.answerSelected} required/>&nbsp; &nbsp; No	</label> <br/>	<br/>                 
                </div>
              </div>

              <div className="card" style={{width: "20rem"}, {marginTop: "40px"}}>
                  <br/>
                  <div className="form-check form-check-inline">
                  <label className="Form-label">Maintain Records – Keep accurate and up-to-date records, log, record, itemize, collate, tabulate data</label> <br /><br/>
                  <label className="Form-label"><input type="radio"  name="answer25" value="Maintain Records" style={{transform: "scale(2)"}} onChange={this.answerSelected} required/>&nbsp; &nbsp; Yes &nbsp; &nbsp;	&nbsp;</label>
                  <label className="Form-label"><input type="radio"  name="answer25" value="No" style={{transform: "scale(2)"}} onChange={this.answerSelected} required/>&nbsp; &nbsp; No	</label> <br/>	<br/>                 
                </div>
              </div>

              <div className="card" style={{width: "20rem"}, {marginTop: "40px"}}>
                  <br/>
                  <div className="form-check form-check-inline">
                  <label className="Form-label">Make Arrangements – Coordinate events and handle logistics</label> <br /><br/>
                  <label className="Form-label"><input type="radio"  name="answer26" value="Make Arrangements" style={{transform: "scale(2)"}} onChange={this.answerSelected} required/>&nbsp; &nbsp; Yes &nbsp; &nbsp;	&nbsp;</label>
                  <label className="Form-label"><input type="radio"  name="answer26" value="No" style={{transform: "scale(2)"}} onChange={this.answerSelected} required/>&nbsp; &nbsp; No	</label> <br/>	<br/>                 
                </div>
              </div>

              <div className="card" style={{width: "20rem"}, {marginTop: "40px"}}>
                  <br/>
                  <div className="form-check form-check-inline">
                  <label className="Form-label">Make Decisions – Make major, complex, or frequent decisions</label> <br /><br/>
                  <label className="Form-label"><input type="radio"  name="answer27" value="Decision-Making" style={{transform: "scale(2)"}} onChange={this.answerSelected} required/>&nbsp; &nbsp; Yes &nbsp; &nbsp;	&nbsp;</label>
                  <label className="Form-label"><input type="radio"  name="answer27" value="No" style={{transform: "scale(2)"}} onChange={this.answerSelected} required/>&nbsp; &nbsp; No	</label> <br/>	<br/>                 
                </div>
              </div>

              <div className="card" style={{width: "20rem"}, {marginTop: "40px"}}>
                  <br/>
                  <div className="form-check form-check-inline">
                  <label className="Form-label">Manage Time – Ability to prioritize, structure and schedule tasks to maximize effort and meet deadlines</label> <br /><br/>
                  <label className="Form-label"><input type="radio"  name="answer28" value="Manage Time" style={{transform: "scale(2)"}} onChange={this.answerSelected} required/>&nbsp; &nbsp; Yes &nbsp; &nbsp;	&nbsp;</label>
                  <label className="Form-label"><input type="radio"  name="answer28" value="No" style={{transform: "scale(2)"}} onChange={this.answerSelected} required/>&nbsp; &nbsp; No	</label> <br/>	<br/>                 
                </div>
              </div>

              <div className="card" style={{width: "20rem"}, {marginTop: "40px"}}>
                  <br/>
                  <div className="form-check form-check-inline">
                  <label className="Form-label">Mentor – Educate, guide, coach, or counsel a less accomplished or junior colleague</label> <br /><br/>
                  <label className="Form-label"><input type="radio"  name="answer29" value="Mentor" style={{transform: "scale(2)"}} onChange={this.answerSelected} required/>&nbsp; &nbsp; Yes &nbsp; &nbsp;	&nbsp;</label>
                  <label className="Form-label"><input type="radio"  name="answer29" value="No" style={{transform: "scale(2)"}} onChange={this.answerSelected} required/>&nbsp; &nbsp; No	</label> <br/>	<br/>                 
                </div>
              </div>

              <div className="card" style={{width: "20rem"}, {marginTop: "40px"}}>
                  <br/>
                  <div className="form-check form-check-inline">
                  <label className="Form-label">Mediate – Manage conflict and reconcile differences</label> <br /><br/>
                  <label className="Form-label"><input type="radio"  name="answer30" value="Mediate" style={{transform: "scale(2)"}} onChange={this.answerSelected} required/>&nbsp; &nbsp; Yes &nbsp; &nbsp;	&nbsp;</label>
                  <label className="Form-label"><input type="radio"  name="answer30" value="No" style={{transform: "scale(2)"}} onChange={this.answerSelected} required/>&nbsp; &nbsp; No	</label> <br/>	<br/>                 
                </div>
              </div>

              <div className="card" style={{width: "20rem"}, {marginTop: "40px"}}>
                  <br/>
                  <div className="form-check form-check-inline">
                  <label className="Form-label">Monitor – Keep track of the movement of data, people, and things</label> <br /><br/>
                  <label className="Form-label"><input type="radio"  name="answer31" value="Monitor" style={{transform: "scale(2)"}} onChange={this.answerSelected} required/>&nbsp; &nbsp; Yes &nbsp; &nbsp;	&nbsp;</label>
                  <label className="Form-label"><input type="radio"  name="answer31" value="No" style={{transform: "scale(2)"}} onChange={this.answerSelected} required/>&nbsp; &nbsp; No	</label> <br/>	<br/>                 
                </div>
              </div>

              <div className="card" style={{width: "20rem"}, {marginTop: "40px"}}>
                  <br/>
                  <div className="form-check form-check-inline">
                  <label className="Form-label">Motivate – Recruit involvement, mobilize energy, stimulate peak performance</label> <br /><br/>
                  <label className="Form-label"><input type="radio"  name="answer32" value="Motivate" style={{transform: "scale(2)"}} onChange={this.answerSelected} required/>&nbsp; &nbsp; Yes &nbsp; &nbsp;	&nbsp;</label>
                  <label className="Form-label"><input type="radio"  name="answer32" value="No" style={{transform: "scale(2)"}} onChange={this.answerSelected} required/>&nbsp; &nbsp; No	</label> <br/>	<br/>                 
                </div>
              </div>

              <div className="card" style={{width: "20rem"}, {marginTop: "40px"}}>
                  <br/>
                  <div className="form-check form-check-inline">
                  <label className="Form-label">Multi-task – Effectively manage a variety of tasks and projects simultaneously</label> <br /><br/>
                  <label className="Form-label"><input type="radio"  name="answer33" value="Multi-task" style={{transform: "scale(2)"}} onChange={this.answerSelected} required/>&nbsp; &nbsp; Yes &nbsp; &nbsp;	&nbsp;</label>
                  <label className="Form-label"><input type="radio"  name="answer33" value="No" style={{transform: "scale(2)"}} onChange={this.answerSelected} required/>&nbsp; &nbsp; No	</label> <br/>	<br/>                 
                </div>
              </div>

              <div className="card" style={{width: "20rem"}, {marginTop: "40px"}}>
                  <br/>
                  <div className="form-check form-check-inline">
                  <label className="Form-label">Negotiate – Bargain for rights or advantages</label> <br /><br/>
                  <label className="Form-label"><input type="radio"  name="answer34" value="Negotiate" style={{transform: "scale(2)"}} onChange={this.answerSelected} required/>&nbsp; &nbsp; Yes &nbsp; &nbsp;	&nbsp;</label>
                  <label className="Form-label"><input type="radio"  name="answer34" value="No" style={{transform: "scale(2)"}} onChange={this.answerSelected} required/>&nbsp; &nbsp; No	</label> <br/>	<br/>                 
                </div>
              </div>

              <div className="card" style={{width: "20rem"}, {marginTop: "40px"}}>
                  <br/>
                  <div className="form-check form-check-inline">
                  <label className="Form-label">Numbers (Work with) – Calculate, compute, understand, solve numerical/quantitative problems</label> <br /><br/>
                  <label className="Form-label"><input type="radio"  name="answer35" value="Numbers (Work with)" style={{transform: "scale(2)"}} onChange={this.answerSelected} required/>&nbsp; &nbsp; Yes &nbsp; &nbsp;	&nbsp;</label>
                  <label className="Form-label"><input type="radio"  name="answer35" value="No" style={{transform: "scale(2)"}} onChange={this.answerSelected} required/>&nbsp; &nbsp; No	</label> <br/>	<br/>                 
                </div>
              </div>

              <div className="card" style={{width: "20rem"}, {marginTop: "40px"}}>
                  <br/>
                  <div className="form-check form-check-inline">
                  <label className="Form-label">Observe – Study, scrutinize, examine data, people or things, scientifically.</label> <br /><br/>
                  <label className="Form-label"><input type="radio"  name="answer36" value="Observe" style={{transform: "scale(2)"}} onChange={this.answerSelected} required/>&nbsp; &nbsp; Yes &nbsp; &nbsp;	&nbsp;</label>
                  <label className="Form-label"><input type="radio"  name="answer36" value="No" style={{transform: "scale(2)"}} onChange={this.answerSelected} required/>&nbsp; &nbsp; No	</label> <br/>	<br/>                 
                </div>
              </div>

              <div className="card" style={{width: "20rem"}, {marginTop: "40px"}}>
                  <br/>
                  <div className="form-check form-check-inline">
                  <label className="Form-label">Perceive Intuitively – Sense, show insight, and foresight</label> <br /><br/>
                  <label className="Form-label"><input type="radio"  name="answer37" value="Perceive Intuitively" style={{transform: "scale(2)"}} onChange={this.answerSelected} required/>&nbsp; &nbsp; Yes &nbsp; &nbsp;	&nbsp;</label>
                  <label className="Form-label"><input type="radio"  name="answer37" value="No" style={{transform: "scale(2)"}} onChange={this.answerSelected} required/>&nbsp; &nbsp; No	</label> <br/>	<br/>                 
                </div>
              </div>

              <div className="card" style={{width: "20rem"}, {marginTop: "40px"}}>
                  <br/>
                  <div className="form-check form-check-inline">
                  <label className="Form-label">Plan/Organize – Define goals and objectives, schedule and develop projects or programs</label> <br /><br/>
                  <label className="Form-label"><input type="radio"  name="answer38" value="Plan/Organize" style={{transform: "scale(2)"}} onChange={this.answerSelected} required/>&nbsp; &nbsp; Yes &nbsp; &nbsp;	&nbsp;</label>
                  <label className="Form-label"><input type="radio"  name="answer38" value="No" style={{transform: "scale(2)"}} onChange={this.answerSelected} required/>&nbsp; &nbsp; No	</label> <br/>	<br/>                 
                </div> 
              </div>

              <div className="card" style={{width: "20rem"}, {marginTop: "40px"}}>
                  <br/>
                  <div className="form-check form-check-inline">
                  <label className="Form-label">Portray Images – Sketch, draw, illustrate, paint, photograph</label> <br /><br/>
                  <label className="Form-label"><input type="radio"  name="answer39" value="Portray Images" style={{transform: "scale(2)"}} onChange={this.answerSelected} required/>&nbsp; &nbsp; Yes &nbsp; &nbsp;	&nbsp;</label>
                  <label className="Form-label"><input type="radio"  name="answer39" value="No" style={{transform: "scale(2)"}} onChange={this.answerSelected} required/>&nbsp; &nbsp; No	</label> <br/>	<br/>                 
                </div>
              </div>

              <div className="card" style={{width: "20rem"}, {marginTop: "40px"}}>
                  <br/>
                  <div className="form-check form-check-inline">
                  <label className="Form-label">Proofread/Edit – Check writing for proper usage and stylistic flair, make improvements</label> <br /><br/>
                  <label className="Form-label"><input type="radio"  name="answer40" value="Proofread/Edit" style={{transform: "scale(2)"}} onChange={this.answerSelected} required/>&nbsp; &nbsp; Yes &nbsp; &nbsp;	&nbsp;</label>
                  <label className="Form-label"><input type="radio"  name="answer40" value="No" style={{transform: "scale(2)"}} onChange={this.answerSelected} required/>&nbsp; &nbsp; No	</label> <br/>	<br/>                 
                </div>
              </div>

              <div className="card" style={{width: "20rem"}, {marginTop: "40px"}}>
                  <br/>
                  <div className="form-check form-check-inline">
                  <label className="Form-label">Read for Information – Research written resources efficiently and exhaustively</label> <br /><br/>
                  <label className="Form-label"><input type="radio"  name="answer41" value="Read for Information" style={{transform: "scale(2)"}} onChange={this.answerSelected} required/>&nbsp; &nbsp; Yes &nbsp; &nbsp;	&nbsp;</label>
                  <label className="Form-label"><input type="radio"  name="answer41" value="No" style={{transform: "scale(2)"}} onChange={this.answerSelected} required/>&nbsp; &nbsp; No	</label> <br/>	<br/>                 
                </div>
              </div>

              <div className="card" style={{width: "20rem"}, {marginTop: "40px"}}>
                  <br/>
                  <div className="form-check form-check-inline">
                  <label className="Form-label">Research Online – Use search engines on the Internet to gather and organize information and data</label> <br /><br/>
                  <label className="Form-label"><input type="radio"  name="answer42" value="Research Online" style={{transform: "scale(2)"}} onChange={this.answerSelected} required/>&nbsp; &nbsp; Yes &nbsp; &nbsp;	&nbsp;</label>
                  <label className="Form-label"><input type="radio"  name="answer42" value="No" style={{transform: "scale(2)"}} onChange={this.answerSelected} required/>&nbsp; &nbsp; No	</label> <br/>	<br/>                 
                </div>
              </div>

              <div className="card" style={{width: "20rem"}, {marginTop: "40px"}}>
                  <br/>
                  <div className="form-check form-check-inline">
                  <label className="Form-label">Sell – Promote a person, company, goods or services, convince of merits, raise money</label> <br /><br/>
                  <label className="Form-label"><input type="radio"  name="answer43" value="Sell" style={{transform: "scale(2)"}} onChange={this.answerSelected} required/>&nbsp; &nbsp; Yes &nbsp; &nbsp;	&nbsp;</label>
                  <label className="Form-label"><input type="radio"  name="answer43" value="No" style={{transform: "scale(2)"}} onChange={this.answerSelected} required/>&nbsp; &nbsp; No	</label> <br/>	<br/>                 
                </div>
              </div>

              <div className="card" style={{width: "20rem"}, {marginTop: "40px"}}>
                  <br/>
                  <div className="form-check form-check-inline">
                  <label className="Form-label">Supervise – Oversee and direct the work of others</label> <br /><br/>
                  <label className="Form-label"><input type="radio"  name="answer44" value="Supervise" style={{transform: "scale(2)"}} onChange={this.answerSelected} required/>&nbsp; &nbsp; Yes &nbsp; &nbsp;	&nbsp;</label>
                  <label className="Form-label"><input type="radio"  name="answer44" value="No" style={{transform: "scale(2)"}} onChange={this.answerSelected} required/>&nbsp; &nbsp; No	</label> <br/>	<br/>                 
                </div>
              </div>

              <div className="card" style={{width: "20rem"}, {marginTop: "40px"}}>
                  <br/>
                  <div className="form-check form-check-inline">
                  <label className="Form-label">Synthesize – Integrate ideas and information, combine diverse elements into a coherent whole</label> <br /><br/>
                  <label className="Form-label"><input type="radio"  name="answer45" value="Synthesize" style={{transform: "scale(2)"}} onChange={this.answerSelected} required/>&nbsp; &nbsp; Yes &nbsp; &nbsp;	&nbsp;</label>
                  <label className="Form-label"><input type="radio"  name="answer45" value="No" style={{transform: "scale(2)"}} onChange={this.answerSelected} required/>&nbsp; &nbsp; No	</label> <br/>	<br/>                 
                </div>
              </div>

              <div className="card" style={{width: "20rem"}, {marginTop: "40px"}}>
                  <br/>
                  <div className="form-check form-check-inline">
                  <label className="Form-label">Teach/Train – Inform, explain, give instruction to students, employees, or customers</label> <br /><br/>
                  <label className="Form-label"><input type="radio"  name="answer46" value="Instruct/Train" style={{transform: "scale(2)"}} onChange={this.answerSelected} required/>&nbsp; &nbsp; Yes &nbsp; &nbsp;	&nbsp;</label>
                  <label className="Form-label"><input type="radio"  name="answer46" value="No" style={{transform: "scale(2)"}} onChange={this.answerSelected} required/>&nbsp; &nbsp; No	</label> <br/>	<br/>                 
                </div>
              </div>

              <div className="card" style={{width: "20rem"}, {marginTop: "40px"}}>
                  <br/>
                  <div className="form-check form-check-inline">
                  <label className="Form-label">Team Work – Easily and effectively work with others to obtain results</label> <br /><br/>
                  <label className="Form-label"><input type="radio"  name="answer47" value="Collaborate" style={{transform: "scale(2)"}} onChange={this.answerSelected} required/>&nbsp; &nbsp; Yes &nbsp; &nbsp;	&nbsp;</label>
                  <label className="Form-label"><input type="radio"  name="answer47" value="No" style={{transform: "scale(2)"}} onChange={this.answerSelected} required/>&nbsp; &nbsp; No	</label> <br/>	<br/>                 
                </div>
              </div>

              <div className="card" style={{width: "20rem"}, {marginTop: "40px"}}>
                  <br/>
                  <div className="form-check form-check-inline">
                  <label className="Form-label">Test – Measure proficiency, quality, or validity, check and double check</label> <br /><br/>
                  <label className="Form-label"><input type="radio"  name="answer48" value="Test" style={{transform: "scale(2)"}} onChange={this.answerSelected} required/>&nbsp; &nbsp; Yes &nbsp; &nbsp;	&nbsp;</label>
                  <label className="Form-label"><input type="radio"  name="answer48" value="No" style={{transform: "scale(2)"}} onChange={this.answerSelected} required/>&nbsp; &nbsp; No	</label> <br/>	<br/>                 
                </div>
              </div>

              <div className="card" style={{width: "20rem"}, {marginTop: "40px"}}>
                  <br/>
                  <div className="form-check form-check-inline">
                  <label className="Form-label">Use Mechanical Abilities – Assemble, tune, repair, or operate engines or other machinery</label> <br /><br/>
                  <label className="Form-label"><input type="radio"  name="answer49" value="Mechanical" style={{transform: "scale(2)"}} onChange={this.answerSelected} required/>&nbsp; &nbsp; Yes &nbsp; &nbsp;	&nbsp;</label>
                  <label className="Form-label"><input type="radio"  name="answer49" value="No" style={{transform: "scale(2)"}} onChange={this.answerSelected} required/>&nbsp; &nbsp; No	</label> <br/>	<br/>                 
                </div>
              </div>

              <div className="card" style={{width: "20rem"}, {marginTop: "40px"}}>
                  <br/>
                  <div className="form-check form-check-inline">
                  <label className="Form-label">Visualize – Imagine possibility, see in “mind’s eye”</label> <br /><br/>
                  <label className="Form-label"><input type="radio"  name="answer50" value="Visualize" style={{transform: "scale(2)"}} onChange={this.answerSelected} required/>&nbsp; &nbsp; Yes &nbsp; &nbsp;	&nbsp;</label>
                  <label className="Form-label"><input type="radio"  name="answer50" value="No" style={{transform: "scale(2)"}} onChange={this.answerSelected} required/>&nbsp; &nbsp; No	</label> <br/>	<br/>                 
                </div>
              </div>

              <div className="card" style={{width: "20rem"}, {marginTop: "40px"}}>
                  <br/>
                  <div className="form-check form-check-inline">
                  <label className="Form-label">Write – Compose reports, letters, articles, ads, stories, or educational materials</label> <br /><br/>
                  <label className="Form-label"><input type="radio"  name="answer51" value="Write" style={{transform: "scale(2)"}} onChange={this.answerSelected} required/>&nbsp; &nbsp; Yes &nbsp; &nbsp;	&nbsp;</label>
                  <label className="Form-label"><input type="radio"  name="answer51" value="No" style={{transform: "scale(2)"}} onChange={this.answerSelected} required/>&nbsp; &nbsp; No	</label> <br/>	<br/>                 
                </div>
              </div>
              <br/><br/>
             <input className="btn btn-primary btn-lg" type="submit" value="Complete" />
              <br/><br/> <br/>
            </form>
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

export default Skill;