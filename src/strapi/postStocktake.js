
import axios from 'axios'
import url from './URL'
import {navigate,link} from 'svelte-routing'
import {findId} from '../stores/asset'
import {takeParts} from './takeParts'

function getStorageUser(){
	return localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : {usernmae :null, jwt: null}
}

export async function postStocktake(type, data) {
	const token = getStorageUser().jwt
	if(token){

	console.log(type)
	console.log(data)
	}
}