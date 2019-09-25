import React from 'react';
import {GetData} from './GetData'

export default function SearchHistory(props){
  let searches = props.searches;


  return(

    <div>
			{searches.map((searchterm) => {
               return (
                 <button
                  type="button"
                  onClick={props.search.bind(searchterm)}
                >
                   {searchterm}
                  </button>
              );
             })}
		</div>
		);

}
