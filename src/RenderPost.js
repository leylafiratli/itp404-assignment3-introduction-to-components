import React from 'react';


function clicked(){
	console.log('User has clicked');
}

export default function RenderPost(props){
	let values = props.values;
	return(
		<div className='reddit_post'>
			<a href={values.data.url} target='_blank' onClick ={props.clicked}>
			{values.data.title}
			</a>
			<h3>Author: {values.data.author}</h3>
			<h4>Ups: {values.data.ups.toLocaleString()}</h4>
			<h4>Comments: {values.data.num_comments? values.data.num_comments.toLocaleString(): 'No comments to show'}</h4>
		</div>

	);
}
