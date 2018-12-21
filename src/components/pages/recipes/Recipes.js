import React from 'react';
import  {Component} from 'react';
import axios from 'axios';
import '../home/home.css';
import Header from "../../sections/Header";
import PageHeader from '../../sections/Page Header';
import Loading from '../../sections/Loading';
import "./recipes.css";






class Recipes extends Component {
  constructor(props) {
    super(props);
    this.state = { 
        recipes:[],
        pageTitle:"",
        isLoading:true

    }

this.getRecipesByCategory = () =>{  
  let param = this.props.match.params.category;
    axios.get(`http://localhost:5000/api/searchByCategory/${param}`).then(res => {
console.log(res.data)
        this.setState({
            recipes: res.data,
            pageTitle:param +" Recipes",
            isLoading:false
        })
      }).catch(err => console.log(err));
  };
}

componentDidMount(){
  this.getRecipesByCategory()
}


  render() {
    let category = this.props.match.params.category;
      return ( 
        <div>
            <Header {...this.props} state={this.state}/>
            <PageHeader {...this.props} state={this.state}/>
            <div className="container items-container">
                      <div className="row">
                      {this.state.isLoading?<Loading/>:""}
                        {this.state.recipes.map(item => 
                          <div className="card col-md-4 my-2 border-0 shadow-sm recipe-div" key={item.idMeal}>
                            <img className="card-img-top rounded-circle mt-3"  
                                data-type="name"
                                src={item.strMealThumb} alt={this.props.name} 
                                onClick={()=>this.props.history.push(`/categories/${category}/${item.idMeal}`)}/>
                            <div className="card-body recipe-title">
                              <h5 className="card-title text-center">{item.strMeal}</h5>
                            </div>
                          </div>
                        )}
                      </div>
              </div>
          </div>
               )
          }
    }
 
export default Recipes;