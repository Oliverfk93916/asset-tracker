<script>
	import Navbar from '../components/Navbar.svelte'
</script>

<Navbar id="" />

<h1 style="font-weight: 100">Generate new tags!</h1>

<section class=section-addAsset>
	<form method="post" action="" class="addForm">
		<div class=form-element>
			<div class="col span-1-of-2">
				<label for="number">How many?</label>
			</div>
			<div class="col span-1-of-2">
				<input type="number" name="number" id="number" required>
			</div>
		</div>
		<div class="form-element">
			<div class="col span-1-of-2">
				<label for="which">Which asset?</label>
			</div>
			<div class="col span-1-of-2">
				<select name="which" id="which">
					<option value="htcController" selected>HTC Vive Pro Controller</option>
					<option value="htcHeadset">HTC Vive Pro Headset</option>
				</select>
			</div>
			<div class="col span-2-of-3">
				<input type="submit" value="Generate!">
			</div>
		</div>
	</form>
</section>
