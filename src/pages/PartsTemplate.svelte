<script>
	export let id
	import {link,navigate} from 'svelte-routing'
	import parts from '../stores/defaultParts'
	import {takeParts} from '../strapi/takeParts'

	$: part = takeParts(id.slice(0,3))
</script>

<h1>Please take</h1>
<h2></h2>
<!-- {#each $parts as part}
{#if part.number < 28}
<p>{part.part}</p>
{/if}
{/each} -->