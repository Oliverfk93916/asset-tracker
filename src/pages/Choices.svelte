<script>
	export let id

	import {link,navigate} from 'svelte-routing'
	import assets from '../stores/defaultAssets'
	import {onMount, afterUpdate, onDestroy} from 'svelte'
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
	<h1>Loading...</h1>
	<h2>Please wait</h2>
{:else}
{#if asset.working === 'Stripped'}
<h1>This asset has been stripped and doesn't exist</h1>
<h2>Are you trying to resurrect?</h2>
<div class="btn-group" style="padding-top: 5%">
	<button on:click={()=>navigate(`/asset/${id}`)}>Change Status</button>
</div>
{:else}
<h1>What would you like to do?</h1>
<h2>{`Staus is: ${asset.working}`}</h2>
<div class="btn-group" style="padding-top: 5%">
	<button on:click={()=>navigate(`/asset/${id}`)}>Change Status</button>
		<button on:click={()=>navigate(`/parts/${id}`)}>Strip for Parts</button>
	</div>
{/if}
{/if}