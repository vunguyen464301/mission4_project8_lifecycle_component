import React from 'react';
import './App.css';
import Header from './components/Header';
import Product from './components/Product';
import Form from './components/Form';
import ItemProduct from './components/ItemProduct';
class App extends React.Component {
  constructor(props){
      super(props);
      this.state={
        second1:0,
        second2:0
      }
    // this.btn_setstate=this.btn_setstate.bind(this)
  }
  // componentWillMount
  // componentDidMount
  // componentWillReceiveProps
  // shouldComponentUpdate
  // componentWillUpdate
  // componentDidUpdate
  // componentWillUnmount
  
  counterTime1(){
    this.setState((preState,props)=>({
      second1:preState.second1+1
    }))
  }counterTime2(){
    this.setState((preState,props)=>({
      second2:preState.second2+1
    }))
  }
  componentDidMount(){
    this.timeID=setInterval(()=>
     this.counterTime1(),1000
    )
  }
  componentWillMount(){
    this.timeID=setInterval(()=>
    this.counterTime2(),1000
   )
  }
  componentWillUnmount(){
    // if(this.state.second===5){
    //   clearInterval(this.timeID)
    // }
   
  }
  

   render(){
  

  return (
    <div >
      <Header/>
        <div className="container">
          second1 : {this.state.second1}<br/>
          second2 : {this.state.second2}<br/>
        </div>
    </div>
  );
   }
}

export default App;
