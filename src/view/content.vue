<template>
<div class="row">
  <div class="col-xs-2 col-md-2"></div>
  <div class="col-xs-8 col-md-8">
    <div class="list-block bar-form">
        <form class="form-horizontal" role="form">
            <div class="form-group">
                <label for="inputEmail3" class="col-sm-2 control-label">姓名</label>
                <div class="col-sm-10">
                    <input v-model="userName" type="text" class="form-control" id="inputText" placeholder="姓名">
                    <div class="sure-inf">请确保与证件上的姓名完全一致</div>
                </div>
            </div>
            <div class="form-group">
                <label for="inputEmail3" class="col-sm-2 control-label">证件类型</label>
                <div class="col-sm-10">
                    <select class="form-control" v-model="selected">
                        <option v-for="option in options" v-bind:value="option.value">
                           {{ option.text }}
                        </option>
                    </select>
                </div>
            </div>
            <div class="form-group">
                <label for="inputEmail3" class="col-sm-2 control-label">证件号码</label>
                <div class="col-sm-10">
                    <input v-model="inputText" lazy type="text" class="form-control" id="inputText" placeholder="证件号码">
                    <div class="errors" v-show="error">请输入正确的证件号码</div>
                </div>
            </div>
            <div class="form-group" v-show="shows">
                <label  for="inputEmail3" class="col-sm-2 control-label">出生日期</label>
                <div class="col-sm-10">
                    <input v-model="userDate" type="text" class="form-control" id="inputText" placeholder="出生日期">
                </div>
            </div>
            <div class="form-group">
                <div class="infs-footer">
                    <button v-bind:disabled="disObject" type="button" class="btn btn-primary">确定</button>
                    <button v-on:click="clearContent" type="button" class="btn btn-danger">取消</button>
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
			    shows:true,
			    error:false,
			    username:false,
			    usertext:false,
			    userdate:false,
			    disObject:true,
				selected: 'ID_Type_02',
				inputText:'',
				userName:'',
				userDate:'',
				a:1,
                options: [
                  { text: '身份证', value: 'ID_Type_01' },
                  { text: '护照', value: 'ID_Type_02' },
                  { text: '军人证', value: 'ID_Type_03' },
                  { text: '回乡证', value: 'ID_Type_04' },
                  { text: '台胞证', value: 'ID_Type_05' },
                  { text: '港澳通行证', value: 'ID_Type_06' },
                  { text: '户口簿', value: 'ID_Type_07' },
                  { text: '出生证明', value: 'ID_Type_08' },
                  { text: '其他', value: 'ID_Type_09' }
                ]
			}
			
		},
		watch:{
		    userName:function(val){
		        if(val){
		             this.username = true;
		        }else {
                     this.username = false;
                };
                this.disAble();
		    },
		    selected: function(val) {
                this.shows = ((val == "ID_Type_01")||(val == "ID_Type_07")) ? false : true;

            },
            inputText:function(text){
                this.idCardValidate(text);
            },
            userDate:function(val){
                if(val){
                     this.userdate = true;
                }else {
                     this.userdate = false;
                };
                this.disAble();
            }

		},
		methods:{
			idCardValidate:function(text) {
				if(!idCardValidate(text)){
                    this.error = true;
                    this.usertext = false;
                } else {
                    this.error = false;
                    this.usertext = true;
                };
                this.disAble();
			},
			disAble:function(){
			    var a = this.username;
			    var b = this.usertext;
			    var c = this.userDate;
                if(a&&b&&c){
                    this.disObject=false;
                } else {
                    this.disObject=true;
                }
			},
			clearContent:function(){
			    this.userName='';
			    this.inputText='';
			    this.userDate='';
			}
		}
		
	}
</script>