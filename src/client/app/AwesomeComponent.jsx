import React from 'react';


class AwesomeComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {likesCount : 0};
    this.onLike = this.onLike.bind(this);
  }

  onLike () {
    let newLikesCount = this.state.likesCount + 1;
    this.setState({likesCount: newLikesCount});
  }
  onX () {
    console.log('onX')
    
  }

  render() {
    return (
      <div>
        Likes : <span>{this.state.likesCount}</span>
        <div><button onClick={this.onLike}>Like Me</button></div>
        <div><button onClick={this.onX}>Content X</button></div>
        <div><button onClick={this.onY}>Content Y</button></div>
      </div>
    );
  }

}

export default AwesomeComponent;