import React from 'react';
import { Component } from 'react';
import Nav from "./Nav";
import Segment from "./Segment";
import Footer from "./Footer";
import './home.css';
import Img from '../../../assets';
import category from '../../../category';
class  Home extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            data:[],
        }

         this.dataList = [];
         this.images = [];
         this.category = [];
        
         this.sumList = ()=>{
         for(let i = 0; i<this.images.length && i<this.category.length; i++){
             const newObj = {
                 img: this.images[i],
                 cat:this.category[i]
             }
             console.log(newObj)
             this.dataList.push(newObj)
         }
         }
         


         //This method  takes the "Img" object above extra and 
         //push all the values to the images property array 
         this.getData = (obj, arr) => {
           for (const key of Object.keys(obj)) {
             arr.push(obj[key]);
           }
         }


    //Get the images once
     this.getData(Img, this.images);
     this.getData(category, this.category);
     this.sumList();
     this.state.data=this.dataList;
    }
    
    render() { 
        console.log(this.state);
        return (
            <div>
                <Nav/>
                    <div className="container">
                        <div className="row">
                        <Segment list={this.state.data}/>
                        </div>
                    </div>
                <Footer/>
            </div>
         );
    }
}
 
export default Home;
