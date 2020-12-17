
<script>
	import {navigate,link} from 'svelte-routing'
	import loginUser from '../strapi/loginUser'
	import globalStore from '../stores/globalStore'

	let username = 'haggerston'
	let password = ''
	let active = 0

	$: isEmpty = !username || !password

// globalStore.toggleItem('alert',true,'loading data... please wait')
// globalStore.toggleItem('alert',true,"login successful")
// globalStore.toggleItem('alert',true,"incorrect password",true)

	async function handleSubmit(){
		
		let user
		user = await loginUser({username,password})
		if (user){
			let url = localStorage.getItem('url')
			navigate(`${url}`)
			localStorage.setItem('url','')
			return
		} else {
			active = 1
			setTimeout(()=> active = 0, 1500)
		}
	}

	function closeToast(){
		active = 0
	}
</script>

<h2 class="section-title" style="margin-top: 75px;">Login</h2>
<form class="px-4 py-3" style="border: 1px solid;margin-top: 25px;">
    <div class="mb-3">
    	<label for="username" class="form-label" style="color: rgb(255,255,255); ">Username</label>
		<input type="text" id="username" class="form-control" bind:value={username}>
    </div>
    <div class="mb-3">
      	<label for="password" class="form-label" style="color: rgb(255,255,255);">Password</label>
		<input type="password" id="password" class="form-control" bind:value={password}>
    </div>
    <div class="d-grid gap-4 col-6 mx-auto">
    <button type="button" class="btn btn-dark" disabled={isEmpty} on:click|preventDefault={handleSubmit}>Submit</button>
	</div>
  </form>

  <div class="d-grid gap-4 col-6 mx-auto">
		<div aria-live="polite" aria-atomic="true" class="position-relative">
			<div class="toast-container position-absolute p-3">
				<div class="toast d-flex align-items-center text-white bg-dark border-0" role="alert" aria-live="assertive" aria-atomic="true" style="opacity:{active}">
					<div class="toast-body">Login Incorrect</div>
		  			<button type="button" class="btn-close btn-close-white ms-auto me-2" data-bs-dismiss="toast" aria-label="Close" on:click={closeToast}></button>
				</div>
			</div>
		</div>
	</div>




