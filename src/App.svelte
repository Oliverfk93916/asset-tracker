
<script>
	// pages
	import Navbar from './components/Navbar.svelte'
	import Login from './pages/Login.svelte'
	import Home from './pages/Home.svelte'
	import AssetTemplate from './pages/AssetTemplate.svelte'
	import Asset from './pages/Asset.svelte'
	import Choices from './pages/Choices.svelte'
	import PartsTemplate from './pages/PartsTemplate.svelte'
	import PartsReplaced from './pages/PartsReplaced.svelte'
	import Alert from './Alert.svelte'
	
	// router
	import { Router, Route, Link } from "svelte-routing"
	import globalStore from './stores/globalStore'

</script>

<Router>
	<Navbar />
  {#if $globalStore.alert}
  <Alert />
  {/if}
	<Route path="/" component={Home} />
	<Route path="/login" component={Login} />
	<Route path="/asset/:id" component={AssetTemplate} />
	<Route path="/asset" component={Asset} />
	<Route path=/:id component={Choices} />
	<Route path=/parts/:id component={PartsTemplate} />
	<Route path=/yes/:id component={PartsReplaced} />
</Router>
