<template>
  <Form ref="formData" :model="formData" :rules="ruleValidate" :label-width="80">
    <FormItem label="标题" prop="name">
      <Input v-model="formData.name" placeholder=""></Input>
    </FormItem>
    <FormItem label="图片" prop="mail">
      <UploadImg @uploadData="getImgData"></UploadImg>
    </FormItem>
    <FormItem label="日期">
      <Row>
        <Col span="11">
        <FormItem prop="date">
          <DatePicker v-model="formData.date" type="date" placeholder=""></DatePicker>
        </FormItem>
        </Col>
        </Col>
      </Row>
    </FormItem>
    <FormItem label="描述" prop="mail">
      <editor :content="formData.desc" @change="updateData"   :height="200" :z-index="1000" :auto-height="true"></editor>
    </FormItem>
    <FormItem>
      <Button type="primary" @click.prevent="handleSubmit('formData')">提交</Button>
      <Button type="ghost" @click="handleReset('formData')" style="margin-left: 8px">重置</Button>
    </FormItem>
  </Form>
</template>
<script>
  import UploadImg from '../components/UploadImg.vue'//上传组件
  import editor from '@/plugins/editor'//富文本组件

  export default {
    data () {
      return {
        ruleValidate: {
          name: [
            { required: true, message: '不为空', trigger: 'blur' }
          ],
        },
        formData:{
          name:'',
          pics:[],
          date:'',
          desc:'2222'
        }
      }
    },
    components:{
      UploadImg,
      editor
    },
    methods: {
      handleSubmit (name) {
        var _this=this;
        this.$refs[name].validate((valid) => {
          if (valid) {
            this.$ajax.post('/data/addproduct',{params:_this.formData}).then(function () {
            }).catch(function (err) {

            });
            this.$Message.success('Success!');
          } else {
            this.$Message.error('Fail!');
          }
        })
      },
//      获取富文本内容
      updateData(str){
        this.formData.desc = str;
      },
      handleReset (name) {
        this.$refs[name].resetFields();
      },
//      获取到上传图片的路径
      getImgData(data){
        console.log(data)
        let _this = this;
        data.forEach(function (v,i) {

          _this.formData.pics.push(v.url);
        })
      }
    },
    mounted(){

    }
  }
</script>
