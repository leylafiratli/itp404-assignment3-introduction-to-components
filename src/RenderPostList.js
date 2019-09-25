import React from 'react';
import RenderPost from './RenderPost.js'

export default function RenderPostList(props){
  let values = props.values;

  return(
	<div>
		{
			values.map((value) => {
			return <RenderPost clicked={props.clicked} value={value} key={value.id} />
			})
		}
	</div>
	);
}
