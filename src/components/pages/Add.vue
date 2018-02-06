<template>
  <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
    <FormItem label="标题" prop="name">
      <Input v-model="formValidate.name" placeholder=""></Input>
    </FormItem>
    <FormItem label="图片" prop="mail">
      <Upload
        ref="upload"
        :show-upload-list="false"
        :default-file-list="defaultList"
        :on-success="handleSuccess"
        :format="['jpg','jpeg','png']"
        :max-size="2048"
        :on-format-error="handleFormatError"
        :on-exceeded-size="handleMaxSize"
        :before-upload="handleBeforeUpload"
        multiple
        type="drag"
        action="//jsonplaceholder.typicode.com/posts/"
        style="display: inline-block;width:58px;">
        <div style="width: 58px;height:58px;line-height: 58px;">
          <Icon type="camera" size="20"></Icon>
        </div>
      </Upload>
      <Modal title="View Image" v-model="visible">
        <img :src="'https://o5wwk8baw.qnssl.com/' + imgName + '/large'" v-if="visible" style="width: 100%">
      </Modal>
    </FormItem>
    <FormItem label="Date">
      <Row>
        <Col span="11">
        <FormItem prop="date">
          <DatePicker type="date" placeholder="" v-model="formValidate.date"></DatePicker>
        </FormItem>
        </Col>
        <Col span="2" style="text-align: center">-</Col>
        <Col span="11">
        <FormItem prop="time">
          <TimePicker type="time" placeholder="" v-model="formValidate.name"></TimePicker>
        </FormItem>
        </Col>
      </Row>
    </FormItem>
    <FormItem label="描述" prop="mail">
      <Input v-model="formValidate.mail" placeholder=""></Input>
    </FormItem>
    <FormItem>
      <Button type="primary" @click="handleSubmit('formValidate')">Submit</Button>
      <Button type="ghost" @click="handleReset('formValidate')" style="margin-left: 8px">Reset</Button>
    </FormItem>
  </Form>
</template>
<script>
  export default {
    data () {
      return {
        formValidate: {
          name: '',
          mail: '',
          city: '',
          gender: '',
          interest: [],
          date: '',
          time: '',
          desc: ''
        },
        ruleValidate: {
          name: [
            { required: true, message: '不为空', trigger: 'blur' }
          ],
          mail: [
            { required: true, message: '不为空', trigger: 'blur' },
          ],
          desc: [
            { required: true, message: '不为空', trigger: 'blur' },
          ]
        }
      }
    },
    methods: {
      handleSubmit (name) {
        this.$refs[name].validate((valid) => {
          if (valid) {
            this.$Message.success('Success!');
          } else {
            this.$Message.error('Fail!');
          }
        })
      },
      handleReset (name) {
        this.$refs[name].resetFields();
      }
    }
  }
</script>
