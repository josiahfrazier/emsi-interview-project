import { useContext } from 'react'
import { DataContext } from '../App.js'
import _ from 'lodash'
import DataTable from 'react-data-table-component'

const RegionalTrendsTable = () => {
	const data = useContext(DataContext)
	const years = _.range(data.trend_comparison.start_year,data.trend_comparison.end_year+1)
	const jobsChange = (start,end) => {
		return Math.round(end - start)
	}
	const jobsPercentChange = (start,end) => {
		return Math.round((((end - start)/start)*100)*10)/10
	}
	const columns = [
		{
			name: 'Region',
			selector: row => row.title
		},
		{
			name: `${data.trend_comparison.start_year} Jobs`,
			selector: row => row.start_year
		},
		{
			name: `${data.trend_comparison.end_year} Jobs`,
			selector: row => row.end_year
		},
		{
			name: 'Change',
			selector: row => row.change
		},
		{
			name: '% Change',
			selector: row => row.percent_change
		}
	]

	const tableData = [
		{
			id: 1,
			title: 'Region',
			start_year: `${data.trend_comparison.regional[0]}`,
			end_year: `${data.trend_comparison.regional[years.length - 1]}`,
			change: `${jobsChange(data.trend_comparison.regional[0],data.trend_comparison.regional[years.length - 1])}`,
			percent_change: `${jobsPercentChange(data.trend_comparison.regional[0],data.trend_comparison.regional[years.length - 1])}%`
		},
		{
			id: 2,
			title: 'State',
			start_year: `${data.trend_comparison.state[0]}`,
			end_year: `${data.trend_comparison.state[years.length - 1]}`,
			change: `${jobsChange(data.trend_comparison.state[0],data.trend_comparison.state[years.length - 1])}`,
			percent_change: `${jobsPercentChange(data.trend_comparison.state[0],data.trend_comparison.state[years.length - 1])}%`
		},
		{
			id: 3,
			title: 'Nation',
			start_year: `${data.trend_comparison.nation[0]}`,
			end_year: `${data.trend_comparison.nation[data.trend_comparison.nation.length - 1]}`,
			change: `${jobsChange(data.trend_comparison.nation[0],data.trend_comparison.nation[data.trend_comparison.nation.length - 1])}`,
			percent_change: `${jobsPercentChange(data.trend_comparison.nation[0],data.trend_comparison.nation[data.trend_comparison.nation.length - 1])}%`
		}
	]

	return (
		<DataTable columns={columns} data={tableData} />
	)
}

export default RegionalTrendsTable