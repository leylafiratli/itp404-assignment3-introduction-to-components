import React from 'react';
import './App.css';
import {GetData} from './GetData';
import Search from './SearchBar';
import RenderPostList from './RenderPostList';
class App extends React.Component{

  constructor(){
    super();
    this.state = {
      values:[],
      loading:false,
      searches:[],
      clicks: 0,
    }
  }

  countClicks = () => {
  let number = this.state.clicks + 1;
  this.setState({clicks:number});
  }

  search = async (value) => {
    this.setState({loading:true, values: []});
    let values = await GetData(value);
    this.setState({values:values, loading:false});
  }

  searchingHistory = async (value) => {
    this.setState({values:[],loading:true});
    let values = await GetData(value);
    let historylist = this.state.searches.concat(value);
    this.setState({values:values, searches:historylist, loading:false});
  }

  render(){
   return(
     <div>
         <div>
           <Search onSearch={this.searchingHistory} />
           {this.state.loading ?
             <div class="container">
             <div class="item item-1"></div>
             <div class="item item-2"></div>
             <div class="item item-3"></div>
             <div class="item item-4"></div>
            </div> : ''
           }
           {<RenderPostList click={this.clickCount} values={this.state.values} />}
       </div>
         <div>
           <h3> Items Searched </h3>

           {this.state.searches.map((term) => {
              return (
                <button
                 type="button"
                 onClick={this.search.bind(this, term)}
               >
                  {term}
                 </button>
             );
            })}
         <div>
           <h5>  Clicked </h5>
           {this.state.clicks}
         </div>

       </div>
     </div>
   );
 }

}
export default App;
