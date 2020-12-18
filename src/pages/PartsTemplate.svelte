<script>
	export let id
	import {link,navigate} from 'svelte-routing'
	import parts from '../stores/defaultParts'
	import {takeParts} from '../strapi/takeParts'
	import {addToStock} from '../strapi/addToStock'
	import {findId} from '../stores/asset'
	import assets from '../stores/defaultAssets'
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

	$: asset = $assets.find(item => item.assetId === id)

	$: part = $parts.filter(item => item.type === takeParts(id.slice(0,3)) && item.number < 28)

	let replace = []

	function join(replace) {
		if (replace.length === 1) return replace[0];
		return `${replace.slice(0, -1).join(', ')}, ${replace[replace.length - 1]}`;
	}

</script>
<Navbar id="{id}" />
{#if asset}
	{#if asset.working === 'Stripped'}
		<h1>Thank you for stripping this item</h1>
		<h2>Jesus loves you</h2>
	{:else}
		{#if part.length > 0}
			<h1>Please take</h1>
			<div class="d-grid gap-4 col-6 mx-auto" style="margin-bottom: 15px;">
				<div class="list-group">
					{#each part as item, i}
						<label class="list-group-item list-group-item-dark" style="background: transparent; color: rgb(150,155,161); border: 1px solid rgb(37.5,39,46.5);border-radius: 5px; margin-bottom:2px;">
			   			<input id={`chk${i}`} class="form-check-input me-1"  type="checkbox" bind:group={replace} value={item.part}> {item.part}
						</label>
					{/each}
				</div>
			</div>
		{:else}
			<h1 style="margin-bottom: 10px;">Inventory full</h1>
		{/if}

		<div class="d-grid gap-4 col-6 mx-auto">
			<!-- BUTTON -->
			<button class="btn btn-outline-secondary" type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Scrap!</button>
			<!-- MODAL -->
			<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  				<div class="modal-dialog modal-dialog-centered">
    				<div class="modal-content">
      					<div class="modal-header">
        					<h5 class="modal-title" id="staticBackdropLabel">Hey</h5>
        				<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
     					</div>
     					<div class="modal-body">By clicking Hell Yeah you understand that:<br>- All parts selected are functional<br>- This asset will no longer exist
     					</div>
     					<div class="modal-footer">
       					<button type="button" class="btn btn-secondary"data-bs-dismiss="modal">Ah, nah</button>
       					<button type="button" class="btn btn-primary" data-bs-dismiss="modal" aria-label="Close" on:click|preventDefault={addToStock(replace,id) && console.log(replace)}>Hell Yeah!</button>
     					</div>
   					</div>
 				</div>
			</div>
		</div>
		<!-- END OF MODAL -->
	{/if}
{/if}

