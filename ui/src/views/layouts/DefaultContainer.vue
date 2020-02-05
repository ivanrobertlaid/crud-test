<template>
	<div>
		<DefaultHeader/>
		<router-view></router-view>
		<DefaultFooter/>
	</div>
</template>

<script>
import DefaultFooter from '@/views/partials/Footer';
import DefaultHeader from '@/views/partials/Header';

export default {
	componets: {
		DefaultHeader,
		DefaultFooter
	}
};
</script>