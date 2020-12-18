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
<h2>WIP</h2>

<!-- CONTROLLER BUTTON -->
<p style="margin-top: 20px;" class="d-grid gap-4 col-8 mx-auto" >
	<a class="btn btn-outline-secondary" data-bs-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">HTC Vive Pro Controller</a>
</p>
<!-- CONTROLLER DROPDOWN -->
<div class="row">
	<div class="col-8 mx-auto">
    	<div class="collapse multi-collapse" id="multiCollapseExample1">
    	<!-- CONTENT -->
    		<div class="input-group mb-3" >
		 		<span class="input-group-text stocktakeSpan">Motherboard</span>
	  			<input type="number" class="form-control stocktakeInput"required>
	  		</div>
	  		<div class="input-group mb-3">
		 		<span class="input-group-text stocktakeSpan">On Button</span>
	  			<input type="number" class="form-control stocktakeInput"required>
	  		</div>
	  		<div class="input-group mb-3">
		 		<span class="input-group-text stocktakeSpan">Trigger</span>
	  			<input type="number" class="form-control stocktakeInput" required>
	  		</div>
	  		<div class="input-group mb-3">
		 		<span class="input-group-text stocktakeSpan">Bottom Cover</span>
	  			<input type="number" class="form-control stocktakeInput" required>
	  		</div>
	  		<div class="input-group mb-3">
		 		<span class="input-group-text stocktakeSpan">Battery</span>
	  			<input type="number" class="form-control stocktakeInput" required>
	  		</div>
	  		<div class="input-group mb-3">
		 		<span class="input-group-text stocktakeSpan">Trackpad</span>
	  			<input type="number" class="form-control stocktakeInput" required>
	  		</div>
	  		<div class="input-group mb-3">
		 		<span class="input-group-text stocktakeSpan">Top Button</span>
	  			<input type="number" class="form-control stocktakeInput" required>
	  		</div>
	  		<div class="input-group mb-3">
		 		<span class="input-group-text stocktakeSpan">Side Button</span>
	  			<input type="number" class="form-control stocktakeInput" required>
	  		</div>
	  		<div class="input-group mb-3">
		 		<span class="input-group-text stocktakeSpan">Top Cover</span>
	  			<input type="number" class="form-control stocktakeInput" required>
	  		</div>
	  	<!-- SUBMIT BUTTON -->
			<div class="d-grid gap-4 col-6 mx-auto">
    			<button data-bs-toggle="collapse" href="#multiCollapseExample1" aria-expanded="false" aria-controls="multiCollapseExample1" class="btn btn-dark stocktakeSubmit" type="submit">Submit form</button>
   			</div>
    	</div>
  	</div>
</div>
<!-- END OF CONTROLLER DROPDOWN -->
<p class="d-grid gap-4 col-8 mx-auto">
	<a class="btn btn-outline-secondary" data-bs-toggle="collapse" href="#multiCollapseExample2" role="button" aria-expanded="false" aria-controls="multiCollapseExample2">HTC Vive Pro Headset</a>
</p>