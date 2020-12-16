
import axios from 'axios'
import url from './URL'
import {navigate,link} from 'svelte-routing'
import assets from '../stores/defaultAssets'

let app = 'https://asset-tracker.netlify.app/'


export async function generate(number, option){

	//variables for object
	let urls = []
	const options = { 
	day: '2-digit',
	month: '2-digit',
 	year: 'numeric', 
	}
	let dateIntroduced = new Date().toLocaleDateString('en-GB', options)
	let numberOfRepairs = 0
	let working = 'Yes'
	let assetId = ''
	let dateOfDeath = ''
	let make = 'HTC'
	let details = ''
	let dateofRepair = ''

	
		const response = await axios.get(`${url}/asset-data?_limit=-1`
			).catch(error => console.log(error))
		let data = response.data
		let filteredData = data.filter(item => item.assetId.slice(0,3) === option)
		const maxId = Math.max(...filteredData.map(user => user.id))
		let maxIdObj = filteredData.find(item => item.id === maxId)
		for (var x = 1; x <= number; x++){
		let plusOne = (Number(maxIdObj.assetId.slice(-4)) + x)
		assetId = option + '-' + ("000" + plusOne).slice(-4)

		let item = {
		dateIntroduced,
		numberOfRepairs,
		working,
		assetId,
		dateOfDeath,
		make,
		details,
		dateofRepair}

		axios.post(`${url}/asset-data/`,item).catch(error => console.log(error))

		urls.push(`${app}${assetId}`)
	}
	return urls
}





	