<script>
	export let id
	// global store
	import assets from '../stores/defaultAssets'
	import {link,navigate} from 'svelte-routing'
	import {findId} from '../stores/asset'
	import {onMount} from 'svelte'
	import user from '../stores/user'

	let details = ''
	$: noClicked = false
	$: asset = $assets.find(item => item.assetId === id)
	$: isEmpty = !details

	onMount(()=>{
		let url = location.href
		localStorage.setItem("url",url)
		if(!$user.jwt){
			navigate('/login')
			return
		}
	})
	function formToggle() {
 		 noClicked = !noClicked
	}

</script>

{#if !asset}
	<h1>Loading</h1>
	<h2>Perhaps this asset doesn't exist...</h2>
{:else}
	<h1>This assets status is</h1>
	<p>{asset.working}</p>
	{#if asset.working === 'No'}
	<p>{asset.details}</p>
	{/if}
	<h2>would you like to change it?</h2>
	<div class="btn-group" style="padding-top: 5%">
		<button on:click={()=>findId(id,'Yes')}>Yes</button>
		<button on:click={()=>formToggle()}>No</button>
		{#if noClicked}
		<section class="form-details">
			<h2 class="section-title">what's the issue?</h2>
		<form class="login-form" on:submit|preventDefault={findId(id,'No', details) && formToggle()}>
		<div class="form-control">
			<label for="details">Details</label>
			<input type="text" id="details" bind:value={details}>
		</div>
		<button type="submit" class="btn-group button" disabled={isEmpty}>Submit </button>
		</form>
	</section>
		{/if}
		<button on:click={()=>findId(id,'Dead')}>Dead</button>
	</div>
{/if}
