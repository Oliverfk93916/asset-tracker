
<script>
	export let id
	import parts from '../stores/defaultParts'
	// import assets from '../stores/defaultAssets'
	import {takeParts} from '../strapi/takeParts'
	import {findId} from '../stores/asset'
	import {takeFromStock} from '../strapi/takeFromStock'
	import {navigate,link} from 'svelte-routing'
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

	$: part = $parts.filter(item => item.type === takeParts(id.slice(0,3)))

	let replace = []

</script>
<Navbar id="{id}" />
<h1>What did you replace?</h1>
<h2 style="margin-bottom: 20px;">Select all that apply</h2>
<div class="d-grid gap-4 col-6 mx-auto" style="margin-bottom: 15px;">
	<div class="list-group">
		{#each part as item, i}
			<label class="list-group-item list-group-item-dark partsContainer">
   			<input id={`chk${i}`} type="checkbox" bind:group={replace} value={item.part}> {item.part}
			</label>
		{/each}
	</div>
</div>
<div class="d-grid gap-4 col-6 mx-auto">
	<button class="btn btn-outline-secondary" type="button" on:click|preventDefault={takeFromStock(replace,id)}>Submit</button>
</div>
