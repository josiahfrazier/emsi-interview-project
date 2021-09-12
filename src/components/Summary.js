import {useContext} from 'react'
import { DataContext } from '../App.js'
import SummaryJobs from './SummaryJobs.js'
import SummaryChange from './SummaryChange.js'
import SummaryEarnings from './SummaryEarnings.js'

const Summary = () => {
	const data = useContext(DataContext)

	return (
		<>
			<h4>
				Occupation Summary for {data.occupation.title}
			</h4>
			<div className='summary'>
				<SummaryJobs />
				
			</div>
			<div className='summary'>
				<SummaryChange />
			</div>
			<div className='summary'>
				<SummaryEarnings />
			</div>
		</>
	)
}

export default Summary