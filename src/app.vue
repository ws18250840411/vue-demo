<template>
	<div class="page-group">
		<div class="page page-current">
			<head-tab></head-tab>
			<index-center></index-center>
			<footer-tab></footer-tab>
		</div>
	</div>
</template>
<script>
	import headTab from './components/header.vue'
	
	import footerTab from './components/footer.vue' 
	
	import indexCenter from './view/index.vue'
	export default {
		replace: false,
		ready() {

		},
		components:{
			headTab,
			footerTab,
			indexCenter
		}
		
	}
</script>