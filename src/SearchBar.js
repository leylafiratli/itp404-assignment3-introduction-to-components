import React from 'react';
import {GetData} from './GetData';
import RenderPost from './RenderPost';

export default class Search extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      searchval : '',
  };
}

userSearched = (event) => {
  event.preventDefault();
  this.props.onSearch(this.state.searchval);
}

inputchange = (event) => {
    this.setState({
      searchval : event.target.value
    });
}

render(){
  return(

    <form onSubmit={this.userSearched}>
      <input
        type="text"
        value={this.searchVal}
        onChange={this.inputchange}
      />
      <button type="submit"> Search </button>
    </form>
  );
}

}
