import React, { useContext, useMemo } from 'react'
import { DataContext } from '../App.js'
import { Chart } from 'react-charts'
import _ from 'lodash'

const RegionalTrendsChart = () => {
	const data = useContext(DataContext)
	const years = _.range(data.trend_comparison.start_year,data.trend_comparison.end_year+1)
	const mapped_trends = (years, data) => {
		let mappedData = []
		for(let i=0;i<years.length-1;i++){
			let percentChange = i===0 ? 0 : ((data[i] - data[0]) / data[0]) * 100
			mappedData.push([`${years[i]}`, percentChange])
		}
		return mappedData
	}
		
	const region = mapped_trends(years,data.trend_comparison.regional)
	const state = mapped_trends(years,data.trend_comparison.state)
	const nation = mapped_trends(years,data.trend_comparison.nation)
	const chartData = useMemo(
		() => [
			{
				label: 'Region',
				data: region
			},
			{
				label: 'State',
				data: state
			},
			{
				label: 'Nation',
				data: nation
			}
		],
		[]
	)

	const series = useMemo(
		    () => ({
		    	showPoints: true
		    }),
		[]
	)

	const axes = useMemo(
		() => [
			{ primary: true, type: 'linear', position: 'bottom' },
			{ type: 'linear', position: 'left' }
		],
		[]
	)

	return (
		<div className='chart'>
			<Chart data={chartData} axes={axes} series={series} />
		</div>
	)
}

export default RegionalTrendsChart
