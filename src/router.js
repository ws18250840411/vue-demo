//module.exports = function(router) {
//	router.map({
//		'/content':{
//			component(resolve) {//异步加载组件
//				require(['./components/center/content.vue'],resolve)
//			}
//		},
//		'/me':{
//			component(resolve) {
//				require(['./components/center/me.vue'],resolve)
//			}
//		},
//		'/settings':{
//			component(resolve) {
//				require(['./components/center/settings.vue'],resolve)
//			}
//		},
//		'/star':{
//			component(resolve) {
//				require(['./components/center/star.vue'],resolve)
//			}
//		}
//	});  
//	router.redirect({
//	'*': '/content'
//	})
//}

//export default (router) =>{
//	router.map({
//		'/content':{
//			component(resolve) {//异步加载组件
//				require(['./components/center/content.vue'],resolve)
//			}
//		},
//		'/me':{
//			component(resolve) {
//				require(['./components/center/me.vue'],resolve)
//			}
//		},
//		'/settings':{
//			component(resolve) {
//				require(['./components/center/settings.vue'],resolve)
//			}
//		},
//		'/star':{
//			component(resolve) {
//				require(['./components/center/star.vue'],resolve)
//			}
//		}
//	});  
//	router.redirect({
//	'*': '/content'
//	})
//}

export default (router) =>{
	router.map({
		'/content':{
			component:require('./view/content.vue')
		},
		'/me':{
			component:require('./view/me.vue')
		},
		'/settings':{
			component:require('./view/settings.vue')
		},
		'/star':{
			component:require('./view/star.vue')
		}
	});  
	router.redirect({
	'*': '/content'
	})
}
 