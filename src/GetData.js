export async function GetData(subreddit){
	let response = await fetch(`https://www.reddit.com/r/${subreddit}.json`);
	let values = await response.json();
	return values.data.children;
}
