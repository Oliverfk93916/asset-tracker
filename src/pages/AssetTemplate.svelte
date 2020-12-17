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
	<div class="d-grid gap-4 col-6 mx-auto dropdown">
		<button class="btn btn-outline-secondary dropdown-toggle" type="button" id="dropdownMenuYes" data-bs-toggle="dropdown" aria-expanded="false"
	 style="margin-top: 20px;">Working</button>
		<ul class="dropdown-menu dropdown-menu-dark col-12" aria-labelledby="dropdownMenuYes">
			<li>
				<h3 class="dropdown-header" style="text-align: center">Any parts replaced?</h3>
			</li>
			<li>
				<hr class="dropdown-divider">
			</li>
			<li>
				<button class="dropdown-item" style="padding-bottom: 15px" type="button" on:click={navigate(`/yes/${id}`)}>Yes</button>
			</li>
			<li>
				<button class="dropdown-item" style="padding-bottom: 10px" type="button" on:click={()=>findId(id,'Yes')}>No</button>
			</li>
		</ul>
	</div>

	<!-- NO BUTTON -->
	<div class="d-grid gap-4 col-6 mx-auto dropdown">
		<button class="btn btn-outline-secondary dropdown-toggle" type="button" id="dropdownMenuNo" data-bs-toggle="dropdown" aria-expanded="false" style="margin-top: 25px;">Not Working</button>
		<ul class="dropdown-menu dropdown-menu-dark col-12" aria-labelledby="dropdownMenuNo">
			<li>
				<h3 class="dropdown-header" style="text-align: center">What's the issue?</h3>
			</li>
			<li>
				<hr class="dropdown-divider">
			</li>
			<li>
				<input class="dropdown-item form-control" style="border:1px solid #fff; background: rgb(65,69,74)" type="text" id="details" placeholder="Details" bind:value={details} required>
			</li>
			<li>
				<hr class="dropdown-divider">
			</li>
			<li>
				<button class="dropdown-item" style="text-align: center;" type="button" disabled={isEmpty} on:click|preventDefault={findId(id,'No',details)}>Submit</button>
			</li>
		</ul>
	</div>

	<!-- DEAD BUTTON -->
	<div class="d-grid gap-4 col-6 mx-auto">
		<button class="btn btn-outline-secondary
	" style="margin-top: 25px;" on:click={()=>findId(id,'Dead')}>Dead</button>
	</div>
{/if}
