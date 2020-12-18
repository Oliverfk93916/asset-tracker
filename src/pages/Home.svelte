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
<h2 style="margin-bottom: 40px;">Scan an Asset to get started</h2>

<table class="table table-dark caption-top homeTable">
	<caption style="margin-left: 10px;">Working Status:</caption>
  <thead>
    <tr>
      <th scope="col">Assets</th>
      <th scope="col">Working</th>
      <th scope="col">Not Working</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Headsets</th>
      <td>{headset.length}</td>
      <td>{noHeadset.length}</td>
    </tr>
    <tr>
      <th scope="row">Controllers</th>
      <td>{controller.length}</td>
      <td>{noController.length}</td>
    </tr>
 </tbody>
</table>







