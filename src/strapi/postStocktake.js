
import axios from 'axios'
import url from './URL'
import {navigate,link} from 'svelte-routing'
import {findId} from '../stores/asset'
import {takeParts} from './takeParts'

function getStorageUser(){
	return localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : {usernmae :null, jwt: null}
}

export async function postStocktake(type, obj) {
	const token = getStorageUser().jwt
	if(token){
		const response = await axios.get(`${url}/parts?_limit=-1`,{headers: {Authorization: `Bearer ${token}`,}}).catch(error => console.log(error))
		let data = response.data
		let filteredData = data.filter(item => item.type === type)
		let newArray = []
		for (let i = 0; i < filteredData.length; i++) {
			for (let x = 0; x < Object.keys(obj).length; x++) {
				if (Object.keys(obj)[x] === filteredData[i].part) {
					filteredData[i].number = Object.values(obj)[x]
				}
			}
		}
		for (let x = 0; x < filteredData.length; x++) {
			axios.put(`${url}/parts/${filteredData[x].id}`,filteredData[x],{headers: {Authorization: `Bearer ${token}`,}}).catch(error => console.log(error)) 
		}
	}
}
