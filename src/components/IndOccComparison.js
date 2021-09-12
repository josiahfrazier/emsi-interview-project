import { useContext } from 'react'
import { DataContext } from '../App.js'
import DataTable from 'react-data-table-component'

const IndOccComparison = () => {
	const data = useContext(DataContext)

	const columns = [
		{
			name: 'Industry',
			selector: row => row.title
		},
		{
			name: `Occupation Jobs in Industry (${data.employing_industries.year})`,
			selector: row => row.in_occupation_jobs
		},
		{
			name: `% of Occupation in Industry (${data.employing_industries.year})`,
			selector: row => row.percent_occ_ind
		},
		{
			name: `% of Total Jobs in Industry (${data.employing_industries.year})`,
			selector: row => row.percent_total_occ_ind
		}
	]

	const rowOccIndBuild = (indData, occ_jobs) => {
		let rows = []
		for(let i=0;i<indData.length;i++){
			let jobs = indData[i].in_occupation_jobs;
			let percent_occ_ind = (Math.round(((indData[i].in_occupation_jobs/occ_jobs) * 100) * 10) / 10)+'%'
			let percent_total_occ_ind = (Math.round(((indData[i].in_occupation_jobs/indData[i].jobs) * 100) * 10) / 10)+'%'
			rows[i] = {
				id: i,
				title: indData[i].title,
				in_occupation_jobs: jobs,
				percent_occ_ind: percent_occ_ind,
				percent_total_occ_ind: percent_total_occ_ind
			}
		}
		console.log(rows)
		return rows
	}

	const tableData = rowOccIndBuild(data.employing_industries.industries, data.employing_industries.jobs)
console.log(tableData)
	return (
		<>
			<h4>
				Industries Employing {data.occupation.title}
			</h4>
			<div>
				<DataTable columns={columns} data={tableData} />
			</div>
		</>
	)
}

export default IndOccComparison