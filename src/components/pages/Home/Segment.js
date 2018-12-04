import React from 'react';
import  {Component} from 'react';
import './home.css';


class Segment extends Component {
  render() {
    let Segments = this.props.list.map((item, i) => {
      return <div className="card col-md-4 my-2 border-0 shadow-sm" key={i}>
                <img className="card-img-top" src={item.img} alt={this.props.name}/>
                <div className="card-body">
                  <h5 className="card-title">{item.cat}</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="google" className="btn btn-primary col-sm-12">Go somewhere</a>
                </div>
              </div>
        });
    return (
      Segments
    );
  }
}
 
export default Segment;