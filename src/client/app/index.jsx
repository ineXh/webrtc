import React from 'react';
import {render} from 'react-dom';
import AwesomeComponent from './AwesomeComponent.jsx';
import Main from './Main.js'

console.log('Hello World!');

class App extends React.Component {
  render () {
    return( <div>
    	<p> Hello React! Hey!</p>;
    </div>
  );}
}

class Empty extends React.Component {
  render () { return false; }
}

window.renderEmpty = function(element) {
  render(<Empty/>, document.getElementById('app'));
}
window.renderApp = function(element) {
  render(<App/>, document.getElementById('app'));
}
window.renderAwesome = function(element) {
  render(<AwesomeComponent/>, document.getElementById('app2'));
}
renderApp();
renderAwesome();
//render(<AwesomeComponent />, document.getElementById('app2'));
