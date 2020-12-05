
<script>
	// pages
	import Login from './pages/Login.svelte'
	import Home from './pages/Home.svelte'
	import AssetTemplate from './pages/AssetTemplate.svelte'
	import Asset from './pages/Asset.svelte'
	import Choices from './pages/Choices.svelte'
	import PartsTemplate from './pages/PartsTemplate.svelte'
	import Alert from './Alert.svelte'
	
	// router
	import { Router, Route, Link } from "svelte-routing"
	import globalStore from './stores/globalStore'

</script>

<Router>
  {#if $globalStore.alert}
  <Alert />
  {/if}
	<Route path="/" component={Home} />
	<Route path="/login" component={Login} />
	<Route path="/asset/:id" component={AssetTemplate} />
	<Route path="/asset" component={Asset} />
	<Route path=/:id component={Choices} />
	<Route path=/parts/:id component={PartsTemplate} />
</Router>
