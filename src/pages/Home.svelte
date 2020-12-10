<script>

	import {link,navigate} from 'svelte-routing'
	import {onMount} from 'svelte'
	import user from '../stores/user'
	import Navbar from '../components/Navbar.svelte'
	import assets from '../stores/defaultAssets'

	$: controller = $assets.filter(item => item.working === 'Yes' && item.assetId.slice(0,3) === 'cnt')
	$: headset = $assets.filter(item => item.working === 'Yes' && item.assetId.slice(0,3) === 'hds')
	$: noController = $assets.filter(item => item.working === 'No' && item.assetId.slice(0,3) === 'cnt')
	$: noHeadset = $assets.filter(item => item.working === 'No' && item.assetId.slice(0,3) === 'hds')

	

	onMount(()=>{
		let url = location.href
		localStorage.setItem("url",url)
		if(!$user.jwt){
			navigate('/login')
			return
		}
	})
</script>

<Navbar id='' />
<h1>Welcome to Asset Tracker</h1>
<h2>Scan an Asset to get started</h2>
<p>There are {controller.length} working controllers</p>
<p>There are {noController.length} controllers which can be fixed</p>
<p>There are {headset.length} working headsets</p>
<p>There are {noHeadset.length} headsets which can be fixed</p>




