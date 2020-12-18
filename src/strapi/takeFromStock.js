
import axios from 'axios'
import url from './URL'
import {navigate,link} from 'svelte-routing'
import {findId} from '../stores/asset'
import {takeParts} from './takeParts'

function getStorageUser(){
	return localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : {usernmae :null, jwt: null}
}

export async function takeFromStock(items,asset){
	const token = getStorageUser().jwt
	if(token){
	const response = await axios.get(`${url}/parts?_limit=-1`,{headers: {Authorization: `Bearer ${token}`,}}
		).catch(error => console.log(error))

	let data = response.data

	let type = takeParts(asset.slice(0,3))

	let filteredData = data.filter(item => item.type === type)

	let change = []
	for (let item in items){
		change.push(filteredData.filter(part => part.part == items[item]))
	}
	change = change.flat()
	if(change){
		for (var x = 0; x < change.length; x++){
			change[x].number -= 1
			const response = await axios.put(`${url}/parts/${change[x].id}`,change[x],{headers: {Authorization: `Bearer ${token}`,}})
		.catch(error => console.log(error))
		}
		findId(asset,'Yes')
		} 
	  navigate(`/${asset}`)
	}
}

