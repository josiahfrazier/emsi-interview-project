import RegionalTrendsChart from './RegionalTrendsChart.js'
import RegionalTrendsTable from './RegionalTrendsTable.js'

const RegionalTrends = () => {

	return (
		<>
			<h4>
				Regional Trends
			</h4>
			<div /*className='chart'*/>
				<RegionalTrendsChart />
			</div>
			<div>
				<RegionalTrendsTable />
			</div>
		</>
	)
}

export default RegionalTrends