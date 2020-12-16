<script>
	export let id
	import {link,navigate} from 'svelte-routing'
	import assets from '../stores/defaultAssets'
	import {onMount} from 'svelte'
</script>

<nav class="navbar navbar-dark bg-dark align-middle">
	<div class="container">
		<button class="btn-home">
		<i class="fas fa-plus" on:click={() => navigate(`/add`)}></i>
		</button>	
<button class="btn-home" on:click={() => navigate(`/`)}>
	<i class="fas fa-home"></i>
	</button>
	
	<button class="btn-home" on:click={() => navigate(`/stocktake`)}>
		<i class="fas fa-archive"></i>
	</button>
		{#if {id}}
	<p class="fs-4" style="color:rgb(231,95,133);margin-bottom: -1px; margin-right: 5px;">{id}</p>
	{/if}
</div>
</nav>