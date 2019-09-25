import React from 'react';

export default function RenderPost(props){
	let value = props.value;
	return(
		<div className='reddit_post'>
			<a href={value.data.url} target='_blank' onClick ={props.clicked}>
			{value.data.title}
			</a>
			<h3>Author: {value.data.author}</h3>
			<h4>Ups: {value.data.ups.toLocaleString()}</h4>
			<h4>Comments: {value.data.num_comments? value.data.num_comments.toLocaleString(): 'No comments to show'}</h4>
		</div>

	);
}
