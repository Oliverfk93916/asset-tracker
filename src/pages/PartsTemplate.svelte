<script>
	export let id
	import {link,navigate} from 'svelte-routing'
	import parts from '../stores/defaultParts'
	import {takeParts} from '../strapi/takeParts'

	$: part = $parts.filter(item => item.type === takeParts(id.slice(0,3)) && item.number < 28)
	let replace = []
	function join(replace) {
		if (replace.length === 1) return replace[0];
		return `${replace.slice(0, -1).join(', ')} and ${replace[replace.length - 1]}`;
	}

</script>
<h2>{`You are stripping ${id}`}</h2>
<h1>Please take</h1>
{#each part as item, i}
<label >
    <input id={`chk${i}`} type="checkbox" bind:group={replace} value={item.part}> {item.part}
</label>
{/each}
{#if replace.length > 0}
{console.log(join(replace))}
{/if}
<div class="form-control">
<p>clicking submit means this controller no longer exists</p>
<button type="submit" >submit</button>
</div>