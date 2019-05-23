import React from 'react';
import styled from 'styled-components';

const Post_date = styled.div`
	color: #56707F;
	font-size: 11px;
	letter-spacing: 2px;
	margin: 5px 0 0 0;
	line-height: 14px;
` 

const Title = styled.div`
	color: white;
	font-size: 24px;
	line-height: 29px;
`

const Update_col = styled.div`
	width: 47%;
	display: inline-block;
`

const Update_container = styled.div`
	height: 195px;
	overflow: hidden;
`

const Img_style = styled.img`
	max-width: 100%;
`

const Comments = styled.div`
	float: right;
	color: #56707F;
	font-size: 11px;
	line-height: 18px;
`

const Read_more = styled.div`
	color: #67c1f5;
	font-size: 11px;
	display: inline-block;
`

const Spacer = styled.div`
	height: 1px;
	margin-top: 5px;
	margin-bottom: 5px;
	background-color: #2f4459;
`

const Update = (props) => (

	
	<Update_col>
		<Update_container>
			<Post_date>
				<span>{props.story.post_date}</span>
			</Post_date>
			<Title>
				<span>{props.story.title}</span>
			</Title>
			<Img_style src={props.story.img} />
		</Update_container>
		<Spacer />
		<Read_more>
			<a onClick={()=>console.log('do something')}>READ MORE</a>
		</Read_more>
		<Comments>
			<span onClick={()=>console.log('do something')}>{props.story.comment_count} comments</span>
		</Comments>
	</Update_col>
	

)

export default Update;