import React, { Component } from 'react';

class TopFive extends Component {

  render() {
    return (
      <div className="container">
        <div className="first">
          <div id="div1" onclick="">
            <img src ={this.props.imgUrl}/>
          </div>
          <div id="div1">
            <img src="http://simpleicon.com/wp-content/uploads/smile.png"/>
          </div>
          <div id="div1">
            <img src="http://www.thebenjaminswedding.com/img/drinks.png"/>
          </div>

        </div>
      <div className="second">
          <div id="div1">
            <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQnEqDHtCpNwGBp3wDD9tkNdW3b8LjFFTDAQPpNWL2kWwxzlZLV"/>
            </div>
            <div id="div1">
              <img src="http://simpleicon.com/wp-content/uploads/smile.png"/>
            </div>
            <div id="div1">
              <img src="http://www.thebenjaminswedding.com/img/drinks.png"/>
            </div>

          </div>
      </div>
    )
  }
}

export default TopFive;
