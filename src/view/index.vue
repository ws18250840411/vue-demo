<template>
	<div class="content">
		<div class="content-inner">
			<router-view transition="fade" transition-mode="out-in" keep-alive></router-view>
		</div>
	</div>
</template>
<style scoped>
.list-block{
	margin: 0;
}
.fade-transition {
  transition: opacity .8s ease;
}
.fade-enter, .fade-leave {
  opacity: 0;
}
</style>