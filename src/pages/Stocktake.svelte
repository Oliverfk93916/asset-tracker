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

<h1>Hello</h1>
<h2>This page isn't ready yet, no stocktake for you :)</h2>