/*import React, { useContext, useMemo } from 'react'
import { DataContext } from '../App.js'
import { Chart } from 'react-charts'
import _ from 'lodash'
*/
const RegionalTrendsChart = () => {
//TODO: Map percent change to the years and get it working

/*	const data = useContext(DataContext)
	const years = _.range(data.trend_comparison.start_year,data.trend_comparison.end_year+1)
	const mapped_trends = (years, data) => {
		let mappedData = []
		for(let i=0;i<years.length;i++){
			mappedData.push([years[i],data[i]])
		}
		return mappedData
	}
	// console.log(mapped_trends(years,data.trend_comparison.regional))
	// function DataChart() {
		
		const region = mapped_trends(years,data.trend_comparison.regional)
		const state = mapped_trends(years,data.trend_comparison.state)
		const nation = mapped_trends(years,data.trend_comparison.nation)
		const chartData = React.useMemo(
			() => [
				{
					label: 'Region',
					data: {region}
				},
				{
					label: 'State',
					data: {state}
				},
				{
					label: 'Nation',
					data: {nation}
				}
			],
			[]
		)

		const series = React.useMemo(
			    () => ({
			    	showPoints: true
			    }),
			[]
		)

		const axes = React.useMemo(
			() => [
				{ primary: true, type: 'linear', position: 'bottom' },
				{ type: 'linear', position: 'left' }
			],
			[]
		)

*/
	// }
// console.log(chartData)
	return (
		<div>
			Chart Loading...
			{/*<Chart data={chartData} axes={axes} series={series} />*/}
		</div>
	)
}

export default RegionalTrendsChart
