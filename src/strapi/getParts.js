
import url from './URL'

export default async() => {
	const response = await fetch(`${url}/parts`).catch(error => console.error(error))
	const parts = await response.json()
	if(parts.error){
		return null
	}
	return parts
}