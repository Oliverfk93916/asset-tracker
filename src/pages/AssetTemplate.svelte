<script>
	export let id
	// global store
	import assets from '../stores/defaultAssets'
	import {link,navigate} from 'svelte-routing'
	import {findId} from '../stores/asset'
	import {onMount} from 'svelte'
	import user from '../stores/user'

	$: asset = $assets.find(item => item.assetId === id)

	onMount(()=>{
		let url = location.href
		localStorage.setItem("url",url)
		if(!$user.jwt){
			navigate('/login')
			return
		}
	})
</script>

{#if !asset}
	<h1>Loading</h1>
	<h2>Perhaps this asset doesn't exist...</h2>
{:else}
	<h1>This assets status is</h1>
	<p>{asset.working}</p>
	<h2>would you like to change it?</h2>
	<div class="btn-group" style="padding-top: 5%">
		<button on:click={()=>findId(id,'Yes')}>Yes</button>
		<button on:click={()=>findId(id,'No')}>No </button>
		<button on:click={()=>findId(id,'Dead')}>Dead</button>
	</div>
{/if}
