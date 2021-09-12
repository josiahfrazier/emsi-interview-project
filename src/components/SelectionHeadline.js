import {useContext} from 'react'
import { DataContext } from '../App.js'

const SelectionHeadline = () => {
	const data = useContext(DataContext)
	
	return (
		<div>
			{data.occupation.title} in {data.region.title}
		</div>
	)
}

export default SelectionHeadline