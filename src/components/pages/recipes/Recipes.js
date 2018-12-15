import React from 'react';
import  {Component} from 'react';
import axios from 'axios';
import '../home/home.css';


class Recipes extends Component {
  constructor(props) {
    super(props);
    this.state = { 
        recipes:[],
        pageTitle:"",

    }

this.getRecipesByCategory = () =>{  
  let param = this.props.match.params.category;
    axios.get(`http://localhost:5000/searchByCategory/${param}`).then(res => 
        this.setState({
            recipes: res.data,
            pageTitle:param,
        })
    ).catch(err => console.log(err));
  };
}

componentDidMount(){
  this.getRecipesByCategory()
}


  render() {
      return  <div className="container">
                  <div className="row">
                    {this.state.recipes.map(item => 
                      <div className="card col-md-4 my-2 border-0 shadow-sm recipe-div" key={item.idMeal}>
                        <img className="card-img-top rounded-circle mt-3"  
                            data-type="name"
                            src={item.strMealThumb} alt={this.props.name} 
                            onClick={()=>this.props.history.push(`/categories/${this.state.pageTitle}/${item.idMeal}`)}/>
                        <div className="card-body recipe-title">
                          <h5 className="card-title text-center">{item.strMeal}</h5>
                        </div>
                      </div>
                    )}
                  </div>
               </div>
              }
    }
 
export default Recipes;