<template>
	<div class="card" style="background: #EEEEEE">

		<div class="container">
			<div class="row">
				<div class="col-md-12">
					<form>
						<div class="pt-5 pb-4 pr-3 pl-3">
							<b-tabs content-class="mt-3" justified>
								<b-tab title="Main Info" active><MainInfo/></b-tab>
								<b-tab title="Files"><Files/></b-tab>
							</b-tabs>
						<button type="submit" class="btn btn-primary w-100">Submit</button>
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
	components: {MainInfo, Files}
};
</script>

