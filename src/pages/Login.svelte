
<script>
	import {navigate,link} from 'svelte-routing'
	import loginUser from '../strapi/loginUser'
	import globalStore from '../stores/globalStore'

	let username = 'haggerston'
	let password = ''

	$: isEmpty = !username || !password



	async function handleSubmit(){
		globalStore.toggleItem('alert',true,'loading data... please wait')
		let user
		user = await loginUser({username,password})
		if (user){
			let url = localStorage.getItem('url')
			navigate(`${url}`)
			localStorage.setItem('url','')
			globalStore.toggleItem('alert',true,"login successful")
			return
		} else {
			globalStore.toggleItem('alert',true,"incorrect password",true)
		}
	}
</script>



<section class="form">
	<h2 class="section-title">Login</h2>
	<form class="login-form" on:submit|preventDefault={handleSubmit}>
		<div class="form-control">
			<label for="username">Username</label>
			<input type="text" id="username" bind:value={username}>
		</div>
		<div class="form-control">
			<label for="password">Password</label>
			<input type="password" id="password" bind:value={password}>
		</div>
		<button type="submit" class="btn-group" disabled={isEmpty}>Submit </button>
	</form>
</section>