import React from 'react';
import  {Component} from 'react';
import '../home/home.css';
import Header from "../../sections/Header";
import PageHeader from '../../sections/Page Header';



class Results extends Component {
  constructor(props) {
    super(props);
    this.state = { 
        recipes:[],
        pageTitle:''
    }

this.getRecipesByCategory = () =>{  
        this.setState({
            recipes: this.props.location.state.recipes,
            pageTitle:`Showing results for ${this.props.location.state.pageTitle}.`
        })
    }
}

componentDidMount(){
  this.getRecipesByCategory()
}

  render() {
      return <div>
                <Header {...this.props} state={this.state}/>
                <PageHeader {...this.props} state={this.state}/>
                <div className="container">   
                    <div className="row">
                        {this.state.recipes.map(item => 
                          <div className="card col-md-4 my-2 border-0 shadow-sm recipe-div" key={item.idMeal}>
                            <img className="card-img-top rounded-circle mt-3"  
                                data-type="name"
                                src={item.strMealThumb} alt={this.props.name} 
                                onClick={()=>this.props.history.push(`/categories/${item.strCategory}/${item.idMeal}`)}/>
                            <div className="card-body recipe-title">
                              <h5 className="card-title text-center">{item.strMeal}</h5>
                            </div>
                          </div>
                        )}
                    </div>
                  </div>
              </div>
              }
    }
 
export default Results;