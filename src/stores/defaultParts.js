
import {writable,derived} from 'svelte/store'
import url from '../strapi/URL'
import getParts from '../strapi/getParts'

const stock = writable([], () => {
	setData()
	return () => {}
})

async function setData(){
	let parts = await getParts()
	if (parts){
		stock.set(parts)
	}
}
export default stock