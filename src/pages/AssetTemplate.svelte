<script>
	export let id
	// global store
	import assets from '../stores/defaultAssets'
	import {link,navigate} from 'svelte-routing'
	import {findId} from '../stores/asset'
	import {onMount, afterUpdate, onDestroy} from 'svelte'
	import user from '../stores/user'
	import {fly, fade, slide} from 'svelte/transition'

	let details = ''
	$: isEmpty = !details

	$: noClicked = false

	$: asset = $assets.find(item => item.assetId === id)

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

	// let status = ''
	// switch (asset.working){
	// 	case 'Yes':
	// 		status = 'Working'
	// 		break;
	// 	case 'No':
	// 	status = 'Not Working'
	// 	break;
	// 	case 'Dead':
	// 	status = 'Dead'
	// 	break;
	// 	default: 
	// 	status = ''
	// }

</script>
{#if asset}
	<h1>Current status is..</h1>
	<p>{asset.working}</p>
	{#if asset.working === 'No'}
	<p>{asset.details}</p>
	{/if}
	<h2>Change to</h2>
	<div class="btn-group">
		<button on:click={()=>findId(id,'Yes')}>Working</button>
		<button on:click={()=>formToggle()}>Not Working</button>
	</div>
			{#if noClicked}
			<section class="form-details" transition:fly={{y:-200}} >
				<h2 class="section-title">what's the issue?</h2>
			<form class="login-form" on:submit|preventDefault={findId(id,'No', details) && formToggle()}>
		<div class="form-control">
			<label for="details">Details</label>
			<input type="text" id="details" bind:value={details}>
		<button type="submit" disabled={isEmpty}>Submit </button>
		</form>
	</section>
		{/if}
			<div class="btn-group">
		<button on:click={()=>findId(id,'Dead')}>Dead</button>
	</div>
{/if}
