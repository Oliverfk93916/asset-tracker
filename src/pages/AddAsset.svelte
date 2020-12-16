<script>
	import assets from '../stores/defaultAssets'
	import Navbar from '../components/Navbar.svelte'
	import {generate} from '../strapi/generateAssets'

	let number
	let option
	let name = generate(number,option)

	$: asset = $assets.find(item => item.assetId.slice(0,3) === option)
  	

	// copied and pasted
	function formSubmit() {
	name = generate(number,option)
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

</script>

<Navbar id="" />

<h1>Generate new tags!</h1>

<section class=sectionaddAsset>
	<form class="addForm" on:submit|preventDefault={() => formSubmit()}>
		<div class=form-element>
			<div class="col span-1-of-2">
				<label for="number">How many?</label>
			</div>
			<div class="col span-1-of-2">
				<input type="number" name="number" id="number" bind:value={number} required>
			</div>
		</div>
		<div class="form-element">
			<div class="col span-1-of-2">
				<label for="which">Which asset?</label>
			</div>
			<div class="col span-1-of-2">
				<select name="which" id="which" bind:value={option}>
					<option value='cnt' selected>HTC Vive Pro Controller</option>
					<option value='hds'> HTC Vive Pro Headset</option>
				</select>
			</div>
			<div class="col span-2-of-3">
				<input type="submit" value="Generate!">
			</div>
		</div>
	</form>
	{#await name then value}
	<div>
	{#each value as item, i}
		<button style="background:none; border:none" on:click={copy(item)}>{item}</button>
	{/each}
	</div>
	{/await}

</section>
