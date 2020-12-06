
import {writable} from 'svelte/store'


const globalStore = writable({
	alert: false,
	alertText:'default alert',
	alertDanger: false
})

const store = {
	subscribe: globalStore.subscribe,
	toggleItem: (item, value, alertText="default",alertDanger=false) => {
		globalStore.update(storeValues => {
				return {...storeValues, [item]:value, alertText, alertDanger}
			})
	}
}

export default store