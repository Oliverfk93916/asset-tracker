<script>

	import {link,navigate} from 'svelte-routing'
	import {onMount} from 'svelte'
	import user from '../stores/user'
	import Navbar from '../components/Navbar.svelte'
	import {postStocktake} from '../strapi/postStocktake'

	$: active = 0
	$: success = 0

	let obj = {
		'controller': {
			'motherboard': null,
			'onbutton': null,
			'trackpad': null,
			'trigger': null,
			'topbutton': null,
			'sidebutton': null,
			'battery': null,
			'topcover': null,
			'bottomcover': null
		},
		'headset': {
			'motherboard': null,
			'lenses': null,
			'leftface': null,
			'rightface': null,
			'backframe': null,
			'faceframe': null,
			'cameramodule': null,
			'topstrap': null
		}
	}

	onMount(()=>{
		let url = location.href
		localStorage.setItem("url",url)
		if(!$user.jwt){
			navigate('/login')
			return
		}
	})

	function handleSubmit(type){
		if (type === 'controller') {
			let length = Object.values(obj.controller).length
			let filteredLength = Object.values(obj.controller).filter(item => item != null).length
			
			if (length === filteredLength){
				postStocktake(type,obj.controller)
				success = 1
				setTimeout(()=> success = 0, 1500)
				// setTimeout(()=>location.reload(true),1500)
			} else {
				active = 1
				setTimeout(()=> active = 0, 1500)
			}
		} else if (type === 'headset'){
			let length = Object.values(obj.headset).length
			let filteredLength = Object.values(obj.headset).filter(item => item != null).length
			if(length === filteredLength){
				postStocktake(type,obj.headset)
				success = 1
				setTimeout(()=> success = 0, 1500)
				// setTimeout(()=>location.reload(true),1500)
			} else {
				active = 1
				setTimeout(()=> active = 0, 1500)
			}
		}
	}

	function closeToast(){
		active = 0
	}
</script>

<Navbar id=''/>
<!-- TOASTS -->
<!-- NOT FILLED OUT -->
<div class="d-grid gap-4 col-6 mx-auto" >
	<div aria-live="polite" aria-atomic="true" class="position-relative">
		<div class="toast-container position-absolute p-3">
			<div class="toast d-flex align-items-center text-white border-0" role="alert" aria-live="assertive" aria-atomic="true" style="opacity:{active}; background: rgb(231,95,133);">
				<div class="toast-body">Please fill out all fields!</div>
	  				<button type="button" class="btn-close btn-close-white ms-auto me-2" data-bs-dismiss="toast" aria-label="Close" on:click={closeToast}></button>
	  		</div>
		</div>
<!-- SUCCESS -->
	  	<div class="toast-container position-absolute p-3">
	  			<div class="toast d-flex align-items-center text-white border-0" role="alert" aria-live="assertive" aria-atomic="true" style="opacity:{success}; background: rgb(231,95,133);">
				<div class="toast-body">Success!</div>
	  			<button type="button" class="btn-close btn-close-white ms-auto me-2" data-bs-dismiss="toast" aria-label="Close" on:click={closeToast}></button>
	  		</div>

		</div>
	</div>
</div>

<!-- END OF TOAST -->
<h1>Welcome to Stocktake</h1>
<h2 style="margin-bottom: 30px;">Click a button and get counting</h2>

<!-- CONTROLLER HEADER BUTTON -->
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
	  			<input type="number" class="form-control stocktakeInput" bind:value={obj.controller.motherboard} required>
	  		</div>
	  		<div class="input-group mb-3">
		 		<span class="input-group-text stocktakeSpan">On Button</span>
	  			<input type="number" class="form-control stocktakeInput" bind:value={obj.controller.onbutton} required>
	  		</div>
	  		<div class="input-group mb-3">
		 		<span class="input-group-text stocktakeSpan">Trigger</span>
	  			<input type="number" class="form-control stocktakeInput" bind:value={obj.controller.trigger} required>
	  		</div>
	  		<div class="input-group mb-3">
		 		<span class="input-group-text stocktakeSpan">Bottom Cover</span>
	  			<input type="number" class="form-control stocktakeInput" bind:value={obj.controller.bottomcover} required>
	  		</div>
	  		<div class="input-group mb-3">
		 		<span class="input-group-text stocktakeSpan">Battery</span>
	  			<input type="number" class="form-control stocktakeInput" bind:value={obj.controller.battery} required>
	  		</div>
	  		<div class="input-group mb-3">
		 		<span class="input-group-text stocktakeSpan">Trackpad</span>
	  			<input type="number" class="form-control stocktakeInput" bind:value={obj.controller.trackpad} required>
	  		</div>
	  		<div class="input-group mb-3">
		 		<span class="input-group-text stocktakeSpan">Top Button</span>
	  			<input type="number" class="form-control stocktakeInput" bind:value={obj.controller.topbutton} required>
	  		</div>
	  		<div class="input-group mb-3">
		 		<span class="input-group-text stocktakeSpan">Side Button</span>
	  			<input type="number" class="form-control stocktakeInput" bind:value={obj.controller.sidebutton} required>
	  		</div>
	  		<div class="input-group mb-3">
		 		<span class="input-group-text stocktakeSpan">Top Cover</span>
	  			<input type="number" class="form-control stocktakeInput" bind:value={obj.controller.topcover} required>
	  		</div>
	  	<!-- SUBMIT BUTTON -->
			<div class="d-grid gap-4 col-6 mx-auto">
    			<button data-bs-toggle="collapse" href="#multiCollapseExample1" aria-expanded="false" aria-controls="multiCollapseExample1" class="btn btn-dark stocktakeSubmit" type="submit" on:click|preventDefault={()=>handleSubmit('controller')}>Submit form</button>
   			</div>
    	</div>
  	</div>
</div>
<!-- END OF CONTROLLER DROPDOWN -->

<!-- HEADSET HEADER BUTTON-->
<p class="d-grid gap-4 col-8 mx-auto">
	<a class="btn btn-outline-secondary" data-bs-toggle="collapse" href="#multiCollapseExample2" role="button" aria-expanded="false" aria-controls="multiCollapseExample2">HTC Vive Pro Headset</a>
</p>

<!-- CONTROLLER DROPDOWN -->
<div class="row">
	<div class="col-8 mx-auto">
    	<div class="collapse multi-collapse" id="multiCollapseExample2">
    	<!-- CONTENT -->
	    	<div class="input-group mb-3" >
			 	<span class="input-group-text stocktakeSpan">Motherboard</span>
		  		<input type="number" class="form-control stocktakeInput" bind:value={obj.headset.motherboard} required>
		  	</div>
		  	<div class="input-group mb-3" >
			 	<span class="input-group-text stocktakeSpan">Top Strap</span>
		  		<input type="number" class="form-control stocktakeInput" bind:value={obj.headset.topstrap} required>
		  	</div>
		  	<div class="input-group mb-3" >
			 	<span class="input-group-text stocktakeSpan">Lenses</span>
		  		<input type="number" class="form-control stocktakeInput" bind:value={obj.headset.lenses} required>
		  	</div>
		  	<div class="input-group mb-3" >
			 	<span class="input-group-text stocktakeSpan">Left Face Cover</span>
		  		<input type="number" class="form-control stocktakeInput" bind:value={obj.headset.leftface} required>
		  	</div>
		  	<div class="input-group mb-3" >
			 	<span class="input-group-text stocktakeSpan">Right Face Cover</span>
		  		<input type="number" class="form-control stocktakeInput" bind:value={obj.headset.rightface} required>
		  	</div>
		  	<div class="input-group mb-3" >
			 	<span class="input-group-text stocktakeSpan">Back Frame</span>
		  		<input type="number" class="form-control stocktakeInput" bind:value={obj.headset.backframe} required>
		  	</div>
		  	<div class="input-group mb-3" >
			 	<span class="input-group-text stocktakeSpan">Face Frame</span>
		  		<input type="number" class="form-control stocktakeInput" bind:value={obj.headset.faceframe} required>
		  	</div>
		  	<div class="input-group mb-3" >
			 	<span class="input-group-text stocktakeSpan">Camera Module</span>
		  		<input type="number" class="form-control stocktakeInput" bind:value={obj.headset.cameramodule} required>
		  	</div>
		<!-- SUBMIT BUTTON -->
			<div class="d-grid gap-4 col-6 mx-auto">
    			<button data-bs-toggle="collapse" href="#multiCollapseExample2" aria-expanded="false" aria-controls="multiCollapseExample2" class="btn btn-dark stocktakeSubmit" type="submit"on:click|preventDefault={()=>handleSubmit('headset')}>Submit form</button>
   			</div>
    	</div>
  	</div>
</div>




