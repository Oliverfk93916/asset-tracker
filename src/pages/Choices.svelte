<script>
	export let id

	import {link,navigate} from 'svelte-routing'
	import assets from '../stores/defaultAssets'
	import {onMount, afterUpdate, onDestroy} from 'svelte'
	import user from '../stores/user'
	import Navbar from '../components/Navbar.svelte'

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
<Navbar id="{id}" />
{#if !asset}
	<h1>Loading...</h1>
	<h2>Please wait</h2>
{:else}
{#if asset.working === 'Stripped'}
<h1>This asset doesn't exist</h1>
<h2>Are you trying to resurrect?</h2>
<div class="d-grid gap-4 col-8 mx-auto" style="padding-top: 10%">
	<button class="btn btn-outline-secondary" on:click={()=>navigate(`/asset/${id}`)}>Change Status</button>
</div>
{:else}
<h1>What would you like to do?</h1>
<h2>{`Current Status: ${asset.working}`}</h2>
<div class="d-grid gap-4 col-8 mx-auto" style="padding-top: 10%">
	<button class="btn btn-outline-secondary
	" on:click={()=>navigate(`/asset/${id}`)}>Change Status</button>
		<button class="btn btn-outline-secondary" on:click={()=>navigate(`/parts/${id}`)}>Strip for Parts</button>
	</div>
{/if}
{/if}