<template>
	<div class="d-flex justify-content-center align-items-center" style="min-height: 100vh; width: 100%;">
		<!-- <DefaultHeader/> -->
		<router-view></router-view>
		<!-- <DefaultFooter/> -->
	</div>
</template>

<script>
import DefaultFooter from '@/views/partials/Footer';
import DefaultHeader from '@/views/partials/Header';

export default {
	components: {
		// DefaultHeader,
		// DefaultFooter
	}
};
</script>