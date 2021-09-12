import {useContext} from 'react'
import { DataContext } from '../App.js'

const SummaryJobs = () => {
	const data = useContext(DataContext)
	
	const comparisonColor = (comparison) => {
		if (comparison > 0) {
			return 'green'
		}
		else if (comparison < 0) {
			return 'red'
		}
		else {
			return 'black'
		}
	}
	const jobsComparison = Math.round((((data.summary.jobs.regional + data.summary.jobs.national_avg) / data.summary.jobs.national_avg) * 100) - 100) 
	const jobsComparisonColor = comparisonColor(jobsComparison)
	const jobsComparisonText = (comparison) => {
		if (comparison > 0) {
			return 'above'
		}
		else if (comparison < 0) {
			return 'below'
		}
		else {
			return 'of'
		}
	}


	return (
		<>
			<h3>{data.summary.jobs.regional}</h3>
			<p><span>Jobs</span> ({data.summary.jobs.year})</p>
			<p>{jobsComparison}%<span className={jobsComparisonColor}>{jobsComparisonText(jobsComparison)}</span>National Average</p>
		</>
	)
}

export default SummaryJobs