<template>
	<bar v-if="isIndex">
		<bar-item path="/content" label="首页" icon="home"></bar-item>
		<bar-item path="/me" label="我" icon="me"></bar-item>
		<bar-item path="/star" label="收藏" icon="star"></bar-item>
		<bar-item path="/settings" label="设置" icon="settings"></bar-item>
	</bar>
</template>
<script>
	import Bar from "./bar-tab.vue"
	import BarItem from "./bar-item.vue"
	
	export default {
		data() {
			return {
				isIndex:true
			}
		},
		components: {
			Bar,
			BarItem
		}
	}
</script>

<style>
.fade-transition {
  transition: opacity .3s ease;
}
.fade-enter, .fade-leave {
  opacity: 0;
}
</style>
<!--<template>
	 <nav class="bar bar-tab">
	 	<template v-for='item in items'>
		 	<a class="tab-item" v-on:click="changeClass($index,$event)"
		 		 v-bind:class="{'active':item.tag}" 
		 		 v-link="{path:'/'+item.router}">
		 		<span class="icon icon-settings"></span>
		 		<span class="tab-label">{{item.name}}</span>
		 	</a>
	 	</template>
	  </nav>
</template>
<script>
	export default {
		data() {
			return {
		      items:[
		      	
		      ]
		    }
		},
		ready(){
			this.$http.get('./src/assets/data/tab-list.json').then((ret)=>{
				 this.items = ret.data.list
			});
		},
		methods:{
			changeClass:function(index,event){
				this.items.filter(function(obj,i) {
					i!=index?obj.tag = false:obj.tag = true
				});
			}
		}
	}
</script>-->