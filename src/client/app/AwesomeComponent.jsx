import React from 'react';
//var Main = require('./main.js');
var imgLink = 'https://upload.wikimedia.org/wikipedia/commons/9/95/The_Gunk.png'
class AwesomeComponent extends React.Component {

  constructor(props) {
    super(props);
    //console.log(props)
    this.state = {
      likesCount : 0,
      //photos: [imgLink, imgLink],
      photos: [],
    };
    this.onLike = this.onLike.bind(this);

    this.onXMinus = props.input.onXMinus.bind(this);
    this.onXPlus = props.input.onXPlus.bind(this);
    this.onCenter = props.input.onCenter.bind(this);
    this.exportCanvas = props.input.exportCanvas.bind(this);
  }
  addPicture(){
    console.log('add Picture')
    //console.log(this)
    var dataURL = this.exportCanvas();
    //console.log(dataURL)
    this.state.photos.push(dataURL)
    this.setState({likesCount: this.state.likesCount});
  }
  onLike () {
    let newLikesCount = this.state.likesCount + 1;
    this.setState({likesCount: newLikesCount});
  }
  onX () {
    console.log('onX')
  }
  onY () {
    console.log('onY')
  }

  render() {
    return (
      <div>
        Likes : <span>{this.state.likesCount}</span>
        <div><button onClick={this.onLike}>Like Me</button></div>
        <div><button onClick={this.onXMinus}>X -</button></div>
        <div><button onClick={this.onXPlus}>X +</button></div>
        <div><button onClick={this.onCenter}>Center</button></div>
        <div><button onClick={this.onY}>Content Y</button></div>
        <div><button onClick={this.addPicture.bind(this)}>Add Picture</button></div>
        <p>boohoo image</p>
        <img src={imgLink} alt="boohoo" className="img-responsive"/>
        <div style={style1}>
          {
            this.state.photos.map((p, index) => {
              return(
                  <img key={index} src={p}/>
                )
            })
          }
        </div>
      </div>
    );
  }

}

export default AwesomeComponent;

var style1 = {
  backgroundColor: '#de6d77',
  //flexWrap: 'wrap',
  //flexDirection: 'row',
  //justifyContent: 'center'

}