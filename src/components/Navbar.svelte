<script>
	export let id
	import {link,navigate} from 'svelte-routing'
	import assets from '../stores/defaultAssets'
	import {onMount} from 'svelte'
</script>

<nav class="navbar navbar-dark align-middle" style="border-bottom: 1px solid rgb(231,95,133); background-color:rgb(26, 26, 26); box-shadow: 2px 5px 3px 0px rgba(0, 0, 0, 0.5)">
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
	<button class="fs-4" style="background: transparent; border:none; color:rgb(231,95,133);" on:click={() => navigate(`/${id}`)}>
	{id}</button>
	{/if}
</div>
</nav>