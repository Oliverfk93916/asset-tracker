
<script>
	export let id
	import parts from '../stores/defaultParts'
	// import assets from '../stores/defaultAssets'
	import {takeParts} from '../strapi/takeParts'
	import {findId} from '../stores/asset'
	import {takeFromStock} from '../strapi/takeFromStock'
	import {navigate,link} from 'svelte-routing'

	$: part = $parts.filter(item => item.type === takeParts(id.slice(0,3)))
	let replace = []
</script>

<h1>What did you replace?</h1>
<h2>Select all that apply</h2>
{#each part as item, i}
<label >
    <input id={`chk${i}`} type="checkbox" bind:group={replace} value={item.part}> {item.part}
</label>
{/each}
<div class="btn-group">
<button type="submit" on:click={findId(id,'Yes') &&takeFromStock(replace,id) && navigate(`/${id}`)}>Submit</button>
</div>
