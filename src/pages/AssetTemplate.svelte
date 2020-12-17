<script>
	export let id
	// global store
	import Navbar from '../components/Navbar.svelte'
	import assets from '../stores/defaultAssets'
	import {link,navigate} from 'svelte-routing'
	import {findId} from '../stores/asset'
	import {onMount, afterUpdate, onDestroy} from 'svelte'
	import user from '../stores/user'
	import {fly, fade, slide} from 'svelte/transition'

	let details = ''
	$: isEmpty = !details

	$: noClicked = false
	$: yesClicked = false

	$: asset = $assets.find(item => item.assetId === id)

	onMount(()=>{
		let url = location.href
		localStorage.setItem("url",url)
		if(!$user.jwt){
			navigate('/login')
			return
		}
	})

	function formToggle(button) {
		if(button === 'no'){
 		 noClicked = !noClicked
 		 yesClicked = false
		} else if (button === 'yes'){
			noClicked = false
			yesClicked = !yesClicked
			}
		}

</script>
<Navbar id="{id}" />
{#if asset}
	<h1>Current Status: {asset.working}</h1>
	{#if asset.working === 'No'}
	<p style="margin-bottom: 30px;">Issue: {asset.details}</p>
	{/if}
	<h2>Change to</h2>

	<!-- YES BUTTON -->
	<div class="d-grid gap-4 col-6 mx-auto dropdown container-fluid" >
		<button class="btn btn-outline-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown"
	 style="margin-top: 20px;" on:click={()=>formToggle('yes')}>Working</button>
		<ul class="dropdown-menu dropdown-menu-dark" id="dropdownMenu2">
			<li><h3 class="dropdown-header">Anything replaced?</h3></li>
			 <li><hr class="dropdown-divider"></li>
			<li><button class="dropdown-item" type="button" on:click={navigate(`/yes/${id}`)}>Yes</button></li>
			<li><button class="dropdown-item" type="button" on:click={()=>findId(id,'Yes')}>No</button></li>
		</ul>
	</div>
	<!-- {#if yesClicked}
			<section class="form-details" transition:fly={{y:-200}} >
				<h2 class="section-title">Did you replace anything?</h2>
			</section>
			<div class="btn" transition:fly={{y:-200}}>
			<button type="button" class="btn2" on:click={navigate(`/yes/${id}`)}>Yes </button>
			<button type="button" class="btn2" on:click={()=>findId(id,'Yes')}>No </button>
			</div>
		{/if} -->

	<!-- NO BUTTON -->
	<div class="d-grid gap-4 col-6 mx-auto dropdown container-fluid">
		<button class="btn btn-outline-secondary dropdown-toggle
	" style="margin-top: 25px;" on:click={()=>formToggle('no')}>Not Working</button>
	</div>
			{#if noClicked}
			<section class="form-details" transition:fly={{y:-200}} >
				<h2 class="section-title">what's the issue?</h2>
			<form class="login-form" on:submit|preventDefault={findId(id,'No', details) && formToggle('no')}>
		<div class="form-control">
			<label for="details">Details</label>
			<input type="text" id="details" bind:value={details}>
		<button type="submit" disabled={isEmpty}>Submit </button>
		</form>
	</section>
		{/if}

	<!-- DEAD BUTTON -->
	<div class="d-grid gap-4 col-6 mx-auto container-fluid">
		<button class="btn btn-outline-secondary
	" style="margin-top: 25px;" on:click={()=>findId(id,'Dead')}>Dead</button>
	</div>
{/if}
