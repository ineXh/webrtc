import React from 'react';
import {render} from 'react-dom';
import AwesomeComponent from './AwesomeComponent.jsx';

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
renderApp();
//render(<AwesomeComponent />, document.getElementById('app2'));
