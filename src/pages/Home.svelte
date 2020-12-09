<script>

	import {link,navigate} from 'svelte-routing'
	import {onMount} from 'svelte'
	import user from '../stores/user'

	onMount(()=>{
		let url = location.href
		localStorage.setItem("url",url)
		if(!$user.jwt){
			navigate('/login')
			return
		}
	})
</script>


<h1>Welcome to Asset Tracker</h1>
<h2>Scan an Asset to get started</h2>