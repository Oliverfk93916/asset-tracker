<script>
	export let id
	import {link,navigate} from 'svelte-routing'
	import assets from '../stores/defaultAssets'
	import {onMount} from 'svelte'
</script>

<nav class="navbar">
	<div class="nav-center">
<button class="btn-home" on:click={() => navigate(`/`)}>
	<i class="fas fa-home"></i>
	</button>
	{#if {id}}
	<h1>{id}</h1>
	{/if}
	<button class="btn-home" on:click={() => navigate(`/stocktake`)}>
		<i class="fas fa-archive"></i>
	</button>

</div>
</nav>