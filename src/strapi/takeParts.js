import axios from 'axios'
import url from './URL'
import getParts from './getParts'

export function takeParts(id){
	switch(id){
		case 'cnt':
	 return 'controller'
	 break;
	 case 'hds':
	 return 'headset'
	 break;
	 default:
	 return ''
	}
}