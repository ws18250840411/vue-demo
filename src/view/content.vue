<template>
	<div class="list-block">
		<ul>
			<template v-for="item in items">
				<li class="item-content" v-on:click = "showIndex($index)">
					<div class="item-inner">
						<div class="item-title">{{item.name}}</div>
					</div>
				</li>
			</template>
		</ul>
	</div>
</template>
<style scoped> /*只作用域当前文档*/
.list-block{
	margin: 0;
}
</style>
<script>
	export default {
		data() {
			return {
				items:[
					{name:'福州'},
					{name:'大雨'},
					{name:'www.niygui.com'}
				]
			}
			
		},
		methods:{
			showIndex:function(index) {
				$.alert(this.items[index].name);
			}
		}
		
	}
</script>