import React from 'react';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import "./detail.css"

const Instructions = (props) => (
    <div className="col-md-8 pl-0">
        <h5 className="card-title">Instructions</h5>
        <ul className="card-text bg-light">
            {props.strInstructions?
                props.strInstructions.map((instr, i) => {
                return(<div className="bg-light px-md-3 py-md-2 instruction-div" key={i}>
                            <li className="instruction">
                                {instr}
                            </li>
                            <hr/>
                        </div> 
                        )
            }):""}
        </ul>
    </div>
);

Instructions.propTypes = {
    strInstructions:PropTypes.array,
}

const mapStateToProps = state =>({
    strInstructions:state.recipe.recipe.strInstructions,
})
 
export default connect(mapStateToProps, null)(Instructions);