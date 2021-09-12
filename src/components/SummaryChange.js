import {useContext} from 'react'
import { DataContext } from '../App.js'

const SummaryChange = () => {
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
	const changeComparisonColor = comparisonColor(data.summary.jobs_growth.regional)
	const changeNationalComparisonColor = comparisonColor(data.summary.jobs_growth.national_avg)
	const changeComparisonSign = (comparison) => {
		if (comparison > 0) {
			return '+'
		}
		else {
			return ''
		}
	}

	return (
		<div>
			<h3><span className={changeComparisonColor}>{changeComparisonSign(data.summary.jobs_growth.regional)}{data.summary.jobs_growth.regional}%</span></h3>
			<p>% Change ({data.summary.jobs_growth.start_year}-{data.summary.jobs_growth.end_year})</p>
			<p>
				<span>Nation:</span>
				<span className={changeNationalComparisonColor}>{changeComparisonSign(data.summary.jobs_growth.national_avg)}{data.summary.jobs_growth.national_avg}%</span>
			</p>
		</div>
	)
}

export default SummaryChange