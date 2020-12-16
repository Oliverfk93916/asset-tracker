<script>
	export let id
	import {link,navigate} from 'svelte-routing'
	import parts from '../stores/defaultParts'
	import {takeParts} from '../strapi/takeParts'
	import {addToStock} from '../strapi/addToStock'
	import {findId} from '../stores/asset'
	import assets from '../stores/defaultAssets'
	import {onMount} from 'svelte'
	import user from '../stores/user'
	import Navbar from '../components/Navbar.svelte'
	
	onMount(()=>{
		let url = location.href
		localStorage.setItem("url",url)
		if(!$user.jwt){
			navigate('/login')
			return
		}
	})

	$: asset = $assets.find(item => item.assetId === id)

	$: part = $parts.filter(item => item.type === takeParts(id.slice(0,3)) && item.number < 28)

	let replace = []

	function join(replace) {
		if (replace.length === 1) return replace[0];
		return `${replace.slice(0, -1).join(', ')}, ${replace[replace.length - 1]}`;
	}

</script>
<Navbar id="{id}" />
{#if asset}
	{#if asset.working === 'Stripped'}
		<h1>Thank you for stripping this item</h1>
		<h2>Jesus loves you</h2>
	{:else}
		<h1>Please take</h1>
	{#each part as item, i}
		<label >
	   	 <input id={`chk${i}`} type="checkbox" bind:group={replace	} value={item.part}> {item.part}
		</label>
	{/each}
		<div class="form-control">
			<p>Clicking submit means this asset no longer exists</p>
			<div class="btn-group">
				<button type="submit" on:click|preventDefault={addToStock(replace) && findId(id,'Stripped')}>Submit</button>
			</div>
		</div>
	{/if}
{/if}