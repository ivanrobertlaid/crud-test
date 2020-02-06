<template>
	<div class="card" style="background: #EEEEEE">

		<div class="container">
			<div class="row">
				<div class="col-md-12">
					<form>
						<div class="pt-5 pb-4 pr-3 pl-3">
							<b-tabs content-class="mt-3" justified v-model="tabIndex">
								<b-tab title="Main Info" active><MainInfo/></b-tab>
								<b-tab title="Files"><Files/></b-tab>
							</b-tabs>
							<button type="button" class="btn btn-primary w-100" @click="checkSubmit">{{ buttonText }}</button>
						</div>

					</form>
				</div>
			</div>
		</div>

	</div>
</template>

<script>
import MainInfo from '@/components/MainInfo';
import Files from '@/components/Files';

export default {
	components: {MainInfo, Files},
	data() {
		return {
			tabIndex: 0
		}
	},

	methods: {
		checkSubmit() {
			if(this.tabIndex == 0) {
				return this.tabIndex = 1;
			}
			return this.submitData();
		},

		submitData() {

		}
	},

	computed: {
		buttonText() {
			if(this.tabIndex === 0) {
				return 'NEXT';
			}
			return 'SUBMIT';
		}
	}
};
</script>

