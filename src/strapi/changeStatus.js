
import axios from 'axios'
import url from './URL'
import {navigate,link} from 'svelte-routing'

function getStorageUser(){
    return localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : {usernmae :null, jwt: null}
}

export async function changeStatus(item, itemId, value,details){

const token = getStorageUser().jwt
    if(token){
const options = { 
	day: '2-digit',
	month: '2-digit',
 	year: 'numeric', 
}

//variables
let reload = true
let numberOfRepairs = item.numberOfRepairs
let dateOfDeath = item.dateOfDeath
let dateofRepair = item.dateofRepair
let now = new Date().toLocaleDateString('en-GB', options)

switch (value){
	case 'Yes':
        reload = false
    	if (item.working != 'Yes'){
        	numberOfRepairs += 1
       		dateofRepair = now
        	dateOfDeath =''
        	item = {...item,numberOfRepairs,dateofRepair,dateOfDeath}
            
        }
    break;   
    case 'No':
    	dateOfDeath = ''
        item.details = details
    	item = {...item,dateOfDeath,details}
    break;    
    case 'Dead':
    	dateOfDeath = now
    	item = {...item,dateOfDeath}
    break;
    case 'Stripped':
        if(dateOfDeath === ''){
        dateOfDeath = now
        item = {...item,dateOfDeath}
    break
    }
    default:
    	console.log('Dunno m9');
    break;
  }
  	item = {...item,working:value}

 //make request
	const response = await axios.put(`${url}/asset-data/${itemId}`,item,{headers: {Authorization: `Bearer ${token}`,}})
	.catch(error => console.log(error))
    location.reload(reload)
}
}




