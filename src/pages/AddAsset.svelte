<script>
	import assets from '../stores/defaultAssets'
	import Navbar from '../components/Navbar.svelte'
	import {generate} from '../strapi/generateAssets'
	import {onMount} from 'svelte'
	import user from '../stores/user'
	import {link,navigate} from 'svelte-routing'
	import Toast from 'svelte-toast'

	let number
	let option
	let name = generate(number,option)

	$: active = 0

	$: asset = $assets.find(item => item.assetId.slice(0,3) === option)
  	
  	onMount(()=>{
		let url = location.href
		localStorage.setItem("url",url)
		if(!$user.jwt){
			navigate('/login')
			return
		}
	})

	// copied and pasted
	function formSubmit() {
	name = generate(number,option)
	number = ''
}

	function copy(text) {
		var textArea = document.createElement("textarea");
		textArea.value = text;
 		document.body.appendChild(textArea);
 		textArea.focus();
 		textArea.select();
 		document.execCommand('copy');
		document.body.removeChild(textArea);
	}

	function handleSubmit(item) {
		active = 1
		setTimeout(()=> active = 0, 1500)
		if(item){
			copy(item)
		}
	}
	function closeToast(){
		active = 0
	}


</script>

<Navbar id="" />

<h1>Generate new tags!</h1>
<!-- Generate assets form -->
	<form class="d-grid gap-4 col-8 mx-auto" on:submit|preventDefault={() => formSubmit()}>
		<input class="form-control" type="number" name="number" id="number" placeholder="How Many?" style="margin-top: 45px; background: rgb(39,44,49); color: #fff"bind:value={number} required>
		<select class="form-select" style="background: rgb(39,44,49); color: rgb(90,97,106);"name="which" id="which" bind:value={option}>
			<option value='cnt' selected>HTC Vive Pro Controller</option>
			<option value='hds'> HTC Vive Pro Headset</option>
		</select>
		<input class="btn btn-outline-secondary" type="submit" value="Generate!">
	</form>

	<!-- Cick copy text -->
	{#await name then value}
		<div class="d-grid gap-2 col-12 mx-auto" style="margin-top: 20px;">
			<ul class="list-group list-group-flush">
				{#each value as item, i}
					<li class="list-group-item" style="background: transparent;text-align: center">
						<button class="assetText" style="background:none; border:none" on:click={handleSubmit(item)}>{item}</button>
					</li>
				{/each}
			</ul>
		</div>
	{/await}
	<div class="d-grid gap-4 col-6 mx-auto">
		<div aria-live="polite" aria-atomic="true" class="position-relative">
			<div class="toast-container position-absolute p-3">
				<div class="toast d-flex align-items-center text-white border-0" role="alert" aria-live="assertive" aria-atomic="true" style="opacity:{active}; background: rgb(231,95,133);">
					<div class="toast-body">Copied to clipboard</div>
		  			<button type="button" class="btn-close btn-close-white ms-auto me-2" data-bs-dismiss="toast" aria-label="Close" on:click={closeToast}></button>
				</div>
			</div>
		</div>
	</div>








