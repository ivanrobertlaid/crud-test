<template>
	<div style=" min-height: 200px;">
		<div class="form-group mb-4">
			<label>Name</label>
			<input type="email" class="form-control" v-model="form.name" placeholder="">
		</div>
		<div class="form-group mb-4">
			<label>Email address</label>
			<input type="email" class="form-control" v-model="form.email" placeholder="">
		</div>
		<div class="form-group mb-4">
			<label>Address</label>
			<textarea cols="30" class="form-control"  v-model="form.address" rows="3"></textarea>	
		</div>
		<div class="form-group mb-5">
			<label>Zip Code</label>
			<input type="email" class="form-control" v-model="form.zip" placeholder="">
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			form: {
				name: '',
				email: '',
				address: '',
				zip: ''
			}
		}
	}
};
</script>