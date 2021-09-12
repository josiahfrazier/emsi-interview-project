import {useContext} from 'react'
import { DataContext } from '../App.js'

const SummaryEarnings = () => {
	const data = useContext(DataContext)
	
	return (
		<div>
			<h3>${data.summary.earnings.regional}/hr</h3>
			<p>Median Hourly Earnings</p>
			<p>Nation: ${data.summary.earnings.national_avg}/hr</p>
		</div>
	)
}

export default SummaryEarnings