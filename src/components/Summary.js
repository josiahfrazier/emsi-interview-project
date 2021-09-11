import {useContext} from 'react'
import { DataContext } from '../App.js'

const Summary = (title,summary) => {

	const data = useContext(DataContext)
	
	if(summary !== {}){
		console.log({data})
	}

	return (
		<>
			<p>
				Occupation Summary for {data.occupation.title}
			</p>
			<div>
				numbers {data.summary.jobs.year}
			</div>
		</>
	)
}

export default Summary