import React from 'react';
import {Component} from 'react';
import Img from '../../assets';
import axios from 'axios';
import '../pages/home/home.css';
import './section.css';

let img = {
    backgroundImage: 'url(' + Img.headerImg.header + ')',
    backgroundRepeat:"no-repeat",
  };

class  Header extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name:""
        }

    this.onChange = (e) => {
        this.setState({name:e.target.value})
    };

    this.onSubmit = (e) => {
        e.preventDefault();
        let name = this.state.name;
        axios.get(`http://localhost:5000/searchByName/${name}`).then(res => {
            if(res.data){
            this.props.history.push({
                pathname: '/search/results',
                state: { 
                    recipes: res.data,
                    pageTitle: name
                }
              })
            }else{
                this.props.history.push({
                    pathname: '/search/results',
                    state: { 
                        recipes: "",
                        pageTitle: name
                    }
                  })

            }
    }).catch(err => console.log(err));
    };
}
    render() { 
        return (
            <div className="jumbotron jumbotron-fluid shadow header mb-1" style={img}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 pl-md-0">
                            <form className="form-inline mt-3 w-100" onSubmit={this.onSubmit}>
                                <div className="input-group col-md-6 mb-3 pl-md-0">
                                    <input type="text" className="form-control" placeholder="Search Recipes..." aria-label="Recipient's username" aria-describedby="button-addon2"  
                                        onChange={this.onChange} value={this.state.name}/>
                                    <div className="input-group-append">
                                         <button className="btn btn-outline-success" type="submit" id="button-addon2"><i className="fas fa-search"></i> Search</button>
                                    </div>  
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Header;