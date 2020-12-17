
import axios from 'axios'
import {writable, derived} from 'svelte/store'
import localData from '../localData'
import url from '../strapi/URL'
import {changeStatus} from '../strapi/changeStatus'

const asset = writable([...localData])


 export async function findId(id, value, details=''){
	const response = await axios.get(`${url}/asset-data?_limit=-1`
		).catch(error => console.log(error))
	let data = response.data
	let item = data.filter(asset => asset.assetId === id)
	let itemId = item[0].id
  	if(itemId){
		changeStatus(item[0],itemId,value,details)
	}
}


export default asset
