<template>
<div class="row">
  <div class="col-xs-2 col-md-2"></div>
  <div class="col-xs-8 col-md-8">
    <div class="list-block bar-form">
        <form class="form-horizontal" role="form">
            <!-- 姓名部分 -->
            <div class="form-group">
                <label for="inputEmail3" class="col-sm-2 control-label">姓名</label>
                <div class="col-sm-10">
                    <input v-model="userInf.name" type="text" class="form-control" id="inputText" placeholder="姓名">
                    <div class="sure-inf">请确保与证件上的姓名完全一致</div>
                </div>
            </div>
            <!-- 证件类型部分 -->
            <div class="form-group">
                <label for="inputEmail3" class="col-sm-2 control-label">证件类型</label>
                <div class="col-sm-10">
                    <select class="form-control" v-model="userInf.idType">
                        <option v-for="cateList in  certificates" :value="$key">{{cateList}}</option>
                    </select>
                </div>
            </div>
            <!-- 证件号码部分 -->
            <div class="form-group">
                <label for="inputEmail3" class="col-sm-2 control-label">证件号码</label>
                <div class="col-sm-10">
                    <input v-model="userInf.carNumber" lazy type="text" class="form-control" id="inputText" placeholder="证件号码">
                    <div class="errors" v-show="carValidated">请输入正确的证件号码</div>
                </div>
            </div>
            <!-- 出生日期部分 -->
            <div class="form-group" v-show="idRecord.indexOf(userInf.idType) === -1">
                <label  for="inputEmail3" class="col-sm-2 control-label">出生日期</label>
                <div class="col-sm-10">
                    <input v-model="userInf.birthday" type="text" class="form-control" id="inputText" placeholder="出生日期">
                </div>
            </div>
            <!-- 提交按钮部分 -->
            <div class="form-group">
                <div class="infs-footer">
                    <button :disabled="!confirmSubmit" @click.prevent type="button" class="btn btn-primary">确定</button>
                    <button v-on:click="clearContent()" type="button" class="btn btn-danger">取消</button>
                </div>
            </div>
        </form>
    </div>
  </div>
  <div class="col-xs-2 col-md-2"></div>
</div>

</template>
<style scoped> /*只作用域当前文档*/
.list-block{
	margin: 0;
}
</style>
<script>

    import idCardValidate from '../js/idCardValidate.js';

	export default {
		data() {
			return {
                userInf:{
                    name:'',
                    idType:'ID_Type_01',
                    carNumber:'',
                    birthday:'',
                },
                certificates:{
                    'ID_Type_01': '身份证',
                    'ID_Type_02': '护照',
                    'ID_Type_03': '军人证',
                    'ID_Type_04': '回乡证',
                    'ID_Type_05': '台胞证',
                    'ID_Type_06': '港澳通行证',
                    'ID_Type_07': '户口簿',
                    'ID_Type_08': '出生证明',
                    'ID_Type_09': '其它'
                },
                idRecord:[
                    'ID_Type_01',
                    'ID_Type_07'
                ]
			}
		},
		watch:{
		    handler:function(val){
		        this.$nextTick(function(){
		            val.carNumber = val.carNumber.toUpperCase();
		        });
		    },
		    deep:true
		},
		computed:{
		    // 利用计算属性判断用户输入的证件号码以及显示隐藏提示语
            carValidated:function(){
                if(this.idRecord.indexOf(this.userInf.idType)>-1){
                    if(this.userInf.carNumber && idCardValidate(this.userInf.carNumber)){
                        return false;
                    } else {
                        return true;
                    };
                } else {
                    return false;
                };
            },
            // 利用计算属性结合绑定数据来判断确定按钮是否disabled
            confirmSubmit:function(){
                return this.userInf.name && this.userInf.carNumber  && (this.idRecord.indexOf(this.userInf.idType)>-1) && idCardValidate(this.userInf.carNumber) || this.userInf.birthday && this.userInf.name && this.userInf.carNumber;
            }
		},
		methods:{
		    //点击取消按钮，把所有的表单清空
		    clearContent:function(){
		        this.userInf.name='';
		        this.userInf.carNumber='';
		        this.userInf.idType='ID_Type_01';
		        this.userInf.birthday='';
		    }
		}

	}
</script>