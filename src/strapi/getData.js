
import url from './URL'

function getStorageUser(){
	return localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : {usernmae :null, jwt: null}
}

export default async() => {
	const token = getStorageUser().jwt
	if(token){
	const response = await fetch(`${url}/asset-data?_limit=-1`,{headers: {
		Authorization: `Bearer ${token}`,}}).catch(error => console.error(error))
	const assets = await response.json()
	if(assets.error){
		return null
	}
	return assets
}
}