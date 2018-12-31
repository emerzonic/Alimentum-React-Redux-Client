import React from 'react';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import "./detail.css"


const Ingredients = (props) => (
    <div className="col-md-4">
        <h5 className="card-title"><i className="fas fa-carrot"></i> Ingredients</h5>
          <div className="card w-100 mr-2">
              <ul className="list-group list-group-flush border-0">
                {props.strIngredients?
                    props.strIngredients.map((ing, i)=>{
                  return <li className="list-group-item ingredient py-1" key={i}>
                            {props.strMeasurements[i]} {ing}
                        </li>
                }):""}
              </ul>
          </div>
    </div> 
);


Ingredients.propTypes = {
    strIngredients:PropTypes.array,
    strMeasurements:PropTypes.array,
}

const mapStateToProps = state =>({
    strIngredients:state.recipe.recipe.strIngredients,
    strMeasurements:state.recipe.recipe.strMeasurements,
})
 
export default connect(mapStateToProps, null)(Ingredients);