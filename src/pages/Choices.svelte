<script>
	import {link,navigate} from 'svelte-routing'
	export let id
	import assets from '../stores/defaultAssets'

	$: asset = $assets.find(item => item.assetId === id)

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
<div class="btn-group" style="padding-top: 5%">
	<button on:click={()=>navigate(`/asset/${id}`)}>Change Status</button>
		<button on:click={()=>navigate(`/parts/${id}`)}>Strip for Parts</button>
	</div>
{/if}
{/if}