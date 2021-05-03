import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const buttonStyle = {
  color: "#1e2434",
  backgroundColor: "white",
  fontWeight: "bold",
  padding: "15px",
  border: "none",
  borderRadius: "5px"
}
const containerStyle = {
  color: "white",
  width: "100vw",
  backgroundColor: "#1e2434",
  padding: "50px"
}

const imgCStyle = {
  display: "flex"
}

const imgBoxStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center"
}

const element = (
  <>
    <div style={containerStyle}>
      <img src="/images/ironhack-logo.svg"/>
      <h1>Say hello to <br /> ReactJS </h1>
      <p>You will learn how to use <br />
      the most popular frontend library, <br />
      and become a super ninja developer.</p>
      <button style={buttonStyle}>Awesome!</button>
    </div>
    <div style={imgCStyle}>
      <div style={imgBoxStyle}>
        <img src="/images/icon1.png" />
        <h3>Declarative</h3>
        <p>React makes it <br/>painless to create <br/>interactive UIs.</p>
      </div>      
      <div style={imgBoxStyle}>
        <img src="/images/icon2.png" />
        <h3>Declarative</h3>
        <p>React makes it <br/>painless to create <br/>interactive UIs.</p>
      </div>      
      <div style={imgBoxStyle}>
        <img src="/images/icon3.png" />
        <h3>Declarative</h3>
        <p>React makes it <br/>painless to create <br/>interactive UIs.</p>
      </div>      
      <div style={imgBoxStyle}>
        <img src="/images/icon4.png" />
        <h3>Declarative</h3>
        <p>React makes it <br/>painless to create <br/>interactive UIs.</p>
      </div>      
    </div>   
  </>
)

ReactDOM.render(
  element,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
