<template>
	<div style="min-width: 300px; min-height: 200px;">
		<b-form-file multiple :file-name-formatter="formatNames"></b-form-file>
	</div>
</template>

<script>
  export default {
    methods: {
      formatNames(files) {
        if (files.length === 1) {
          return files[0].name
        } else {
          return `${files.length} files selected`
        }
      }
    }
  };
</script>