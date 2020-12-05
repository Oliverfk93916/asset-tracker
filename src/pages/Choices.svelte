<script>
	import {link,navigate} from 'svelte-routing'
	export let id
</script>

<h1>What would you like to do?</h1>
<div class="btn-group" style="padding-top: 5%">
	<button on:click={()=>navigate(`/asset/${id}`)}>Change Status</button>
		<button on:click={()=>navigate(`/parts/${id}`)}>Strip for Parts</button>
	</div>