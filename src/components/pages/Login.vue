<template>
	<div>
		<Row type='flex' align='middle' justify='center' style='height:100vh;'>
			<Col :span='8'>
				<Form ref="formInline" :model="formInline" :rules="ruleInline" >
					<FormItem prop="user">
						<Input type="text" v-model="formInline.user" placeholder="Username">
							<Icon type="ios-person-outline" slot="prepend"></Icon>
						</Input>
					</FormItem>
					<FormItem prop="password">
						<Input type="password" v-model="formInline.password" placeholder="Password">
							<Icon type="ios-locked-outline" slot="prepend"></Icon>
						</Input>
					</FormItem>
					<FormItem>
						<Button type="primary" @click="handleSubmit('formInline')">登陆</Button>
					</FormItem>
				</Form>
			</Col>
		</Row>
		
	</div>

</template>
<script>
	import Cookies from 'js-cookie';
	import {mapActions,mapGetters} from 'Vuex'
	export default {
		data () {
			return {
				formInline: {
					user: '',
					password: ''
				},
				ruleInline: {
					user: [
					{ required: true, message: '请输入用户名', trigger: 'blur' }
					],
					password: [
					{ required: true, message: '请输入密码', trigger: 'blur' },
					{ type: 'string', min: 6, message: '密码不少于6位', trigger: 'blur' }
					]
				},
			}
		},
		computed: {
			...mapGetters([
				'getLogin'
				])
		},
		methods: {
			handleSubmit(name) {
				let _this=this;
				_this.getData('/login',{params: _this.formInline},function(data){
					_this.$refs[name].validate((valid) => {
						if (valid && data.data.status =='ok') {
						Cookies.set('user',_this.formInline.user);
						_this.$router.push({ path: '/' });
						_this.$Message.success('登录成功!');
					} else {
						console.log(data.data.status)
						_this.$Message.error('登录失败!');
					}
				});	
				},
				function(err){
					console.log(err)
					_this.$Message.error('登录失败!');
				}
				);				
			},
			...mapActions({
				login:'loginSuccess'
			}

			)
		},
		mounted:function(){
			if(Cookies.get('user')){
				this.$router.push({path:'/'});
			}
		}
		
	}
</script>
