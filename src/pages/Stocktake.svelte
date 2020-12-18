<script>

	import {link,navigate} from 'svelte-routing'
	import {onMount} from 'svelte'
	import user from '../stores/user'
	import Navbar from '../components/Navbar.svelte'





	onMount(()=>{
		let url = location.href
		localStorage.setItem("url",url)
		if(!$user.jwt){
			navigate('/login')
			return
		}
	})
</script>

<Navbar id=''/>
<h1>Hello</h1>
<h2>This page isn't ready yet, no stocktake for you :)</h2>

<p style="margin-top: 20px;" class="d-grid gap-4 col-8 mx-auto" >
	<a class="btn btn-outline-secondary" data-bs-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">HTC Vive Pro Controller</a>
</p>
<div class="row">
	<div class="col-8 mx-auto">
    	<div class="collapse multi-collapse" id="multiCollapseExample1">
    		<div class="input-group mb-3">
		 		<span class="input-group-text" style="width: 65%; background: rgb(26,26,26); color: rgb(200,200,200);">Motherboard</span>
	  			<input type="number" class="form-control" style="background: rgb(200,200,200);"  required>
	  		</div>
	  		<div class="input-group mb-3">
		 		<span class="input-group-text" style="width: 65%; background: rgb(26,26,26); color: rgb(200,200,200);">On Button</span>
	  			<input type="number" class="form-control" style="background: rgb(200,200,200)" required>
	  		</div>
	  		<div class="input-group mb-3">
		 		<span class="input-group-text" style="width: 65%; background: rgb(26,26,26); color: rgb(200,200,200);">Trigger</span>
	  			<input type="number" class="form-control" style="background: rgb(200,200,200)" required>
	  		</div>
			<div class="d-grid gap-4 col-6 mx-auto">
    			<button data-bs-toggle="collapse" href="#multiCollapseExample1" aria-expanded="false" aria-controls="multiCollapseExample1"style="margin-bottom: 20px;"class="btn btn-dark" type="submit">Submit form</button>
   			</div>
    	</div>
  	</div>
</div>

<p class="d-grid gap-4 col-8 mx-auto">
	<a class="btn btn-outline-secondary" data-bs-toggle="collapse" href="#multiCollapseExample2" role="button" aria-expanded="false" aria-controls="multiCollapseExample2">HTC Vive Pro Headset</a>
</p>