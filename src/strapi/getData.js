
import url from './URL'

export default async() => {
	const response = await fetch(`${url}/asset-data?_limit=-1`).catch(error => console.error(error))
	const assets = await response.json()
	if(assets.error){
		return null
	}
	return assets
}