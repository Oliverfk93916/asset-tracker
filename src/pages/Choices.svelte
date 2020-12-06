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
<h1>What would you like to do?</h1>
<div class="btn-group" style="padding-top: 5%">
	<button on:click={()=>navigate(`/asset/${id}`)}>Change Status</button>
		<button on:click={()=>navigate(`/parts/${id}`)}>Strip for Parts</button>
	</div>
{/if}