import React, { Component } from 'react';
import {Link} from 'react-router-dom'

import '../../styles/Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class Test extends Component {

  render() {
    return (
      <div className="App">
        <div style={{backgroundColor: "#fff"}}>
          <div className="container">
          <br/><br/><br/><br/>
            <h1 className="Hero-text">Struggling in career? <br/>  I can help.</h1> <br/><br/>
            <p className="Hero-paragraph">Discover the simple 4 Steps that I Discovered to Hack Productivity. It works %100. Wanna transform your life?</p>
            <Link to="/"><button className="Hero-button">Learn more about me</button></Link>
            <br/><br/><br/><br/>
          </div>
        </div>

        <div style={{backgroundColor: "#FDC332"}}>
          <div className="container">
          <br/><br/><br/><br/>
            <h1 className="Hero-text">Find your Strengths</h1> <br/><br/>
            <p className="Hero-paragraph">Discover the simple 4 Steps that I Discovered to Hack Productivity. It works %100. Wanna transform your life?</p>
            <Link to="/strength"><button className="Hero-button">Take a short test</button></Link>
            <br/><br/><br/><br/>
          </div>
        </div>

        <div style={{backgroundColor: "#0085FF"}}>
          <div className="container">
          <br/><br/><br/><br/>
            <h1 className="Hero-text">Find your Values</h1> <br/><br/>
            <p className="Hero-paragraph">Discover the simple 4 Steps that I Discovered to Hack Productivity. It works %100. Wanna transform your life?</p>
            <Link to="/value"><button className="Hero-button">Select your values</button></Link>
            <br/><br/><br/><br/>
          </div>
        </div>

        <div style={{backgroundColor: "#FD6A65"}}>
          <div className="container">
          <br/><br/><br/><br/>
            <h1 className="Hero-text">Find your Skills</h1> <br/><br/>
            <p className="Hero-paragraph">Discover the simple 4 Steps that I Discovered to Hack Productivity. It works %100. Wanna transform your life?</p>
            <Link to="/skill"><button className="Hero-button">Answer a short survey</button></Link>
            <br/><br/><br/><br/>
          </div>
        </div>

        <div style={{backgroundColor: "#04D5C9"}}>
          <div className="container">
          <br/><br/><br/><br/>
            <h1 className="Hero-text">Find your Interests</h1> <br/><br/>
            <p className="Hero-paragraph">Discover the simple 4 Steps that I Discovered to Hack Productivity. It works %100. Wanna transform your life?</p>
            <Link to="/interest"><button className="Hero-button">Take a short test</button></Link>
            <br/><br/><br/><br/>
          </div>
        </div>
        

        {/* <p className="App-intro">
          <code><b>Database</b></code>
        </p>
        <div className="AppBody">
          <form className="App-form" onSubmit={this.handleSubmit}>
            <input className="text" name="name" placeholder="New data" type="text" onChange={this.handleChange} />
            <input className="button" type="submit" value="Push" />
          </form>
          <pre className="AppBody-fb-db">{JSON.stringify(this.state.guides, null, 2)}</pre>
        </div>

        <p className="App-intro">
          <code><b>Cloud Storage</b></code>
        </p>
        <div className="AppBody">
          <FileInput
            className="file"
            accept=".png,.gif,.jpg"
            placeholder="Select an image"
            onChange={this.handleFileSubmit}
          />

          <div className="App-images">
            {this.displayUserImages()}
          </div> */}
  
      </div>
        
    );
  }
}

export default Test;