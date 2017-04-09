console.log('Hello World!');

import React from 'react';
import {render} from 'react-dom';
import AwesomeComponent from './AwesomeComponent.jsx';

class App extends React.Component {
  render () {
    return <div>
    	<p> Hello React! Hey!</p>;
    	<AwesomeComponent />
    </div>
  }
}

render(<App/>, document.getElementById('app'));