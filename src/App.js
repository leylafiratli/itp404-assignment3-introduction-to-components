import React from 'react';
import './App.css';
import {GetData} from './GetData.js'
import RenderPost from './RenderPost'

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      values:[],
      loading: true,
    };
  }

  async componentDidMount(){
    let values = await GetData('javascript');
    this.setState({values:values,loading:false});
  }
  render(){
    return(
       <div>
       {
         this.state.loading ? <div class="container">
         <div class="item item-1"></div>
         <div class="item item-2"></div>
         <div class="item item-3"></div>
         <div class="item item-4"></div>
         </div> :
         this.state.values.map((values) => {
               return <RenderPost values={values} key={values.id}/>
            })
       }
       </div>
      );
    }
  }


export default App;
