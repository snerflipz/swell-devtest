import Alert from '@mui/material/Alert';
import TaskIcon from '@mui/icons-material/Task';
import React, { useState, useEffect } from 'react';

/* eslint-disable-next-line */
export interface ReviewsListProps {}

export function ReviewsList(props: ReviewsListProps) {
	/*return (
		<Alert severity="error" icon={<TaskIcon />}>
			TODO: Implement ReviewsList
		</Alert>
	);*/

	const [data, setData] = useState([]);

	fetch('/api/reviews')
		.then((res) => res.json())
		.then((result) => {
			console.log(result);
			//setData(result);
		});

	//console.log(result);
	return <div>hi</div>; /*
{{data.map((dataObj, index) => { return (
<div style="clear:both; float:left;">
{dataObj.id}
</div>)
}
)}}*/
}

export default ReviewsList;
