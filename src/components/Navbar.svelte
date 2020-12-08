<script>
	import {link, navigate} from 'svelte-routing'
</script>



<nav class="navbar">
	<div class="nav-center">
<button class="btn-sidebar-toggle" on:click={() => navigate(`/`)}>
	<i class="fas fa-home"></i>
</button>
</div>
</nav>