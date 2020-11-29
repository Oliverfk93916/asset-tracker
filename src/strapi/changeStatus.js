
import axios from 'axios'
import url from './URL'

export async function changeStatus(item, itemId, value){

const options = { 
	day: '2-digit',
	month: '2-digit',
 	year: 'numeric', 
};

//variables
let numberOfRepairs = item.numberOfRepairs
let dateOfDeath = item.dateOfDeath
let dateofRepair = item.dateofRepair
let details = item.details
let now = new Date().toLocaleDateString('en-GB', options)


switch (value){
	case 'Yes':
    	if (item.working != 'Yes'){
        	numberOfRepairs += 1
       		dateofRepair = now
        	dateOfDeath =''
        	item = {...item,numberOfRepairs,dateofRepair,dateOfDeath}
        }
    break;   
    case 'No':
    	dateOfDeath = ''
    	item = {...item,dateOfDeath}
    break;    
    case 'Dead':
    	dateOfDeath = now
    	item = {...item,dateOfDeath}
    break;    
    default:
    	console.log('Dunno m9');
    break;
  }
  	item = {...item,working:value}

 //make request
	const response = await axios.put(`${url}/asset-data/${itemId}`,item)
	.catch(error => console.log(error))
}



