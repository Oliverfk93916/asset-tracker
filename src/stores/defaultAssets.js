
import {writable,derived} from 'svelte/store'
import url from '../strapi/URL'
import getData from '../strapi/getData'

const store = writable([], () => {
	setData()
	return () => {}
})

async function setData(){
	let assets = await getData()
	if (assets){
		store.set(assets)
	}
}
export default store