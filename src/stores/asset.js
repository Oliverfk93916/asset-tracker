
import axios from 'axios'
import {writable, derived} from 'svelte/store'
import localData from '../localData'
import url from '../strapi/URL'
import {changeStatus} from '../strapi/changeStatus'

const asset = writable([...localData])

function getStorageUser(){
	return localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : {usernmae :null, jwt: null}
}

 export async function findId(id, value, details=''){
 	const token = getStorageUser().jwt
	if(token){
	const response = await axios.get(`${url}/asset-data?_limit=-1`
		,{headers: {Authorization: `Bearer ${token}`,}}).catch(error => console.log(error))
	let data = response.data
	let item = data.filter(asset => asset.assetId === id)
	let itemId = item[0].id
  	if(itemId){
		changeStatus(item[0],itemId,value,details)
	}
}
}


export default asset
