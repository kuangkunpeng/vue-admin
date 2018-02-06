<template>
  <div>
    <Row>
      <Col span="18">
        <Form ref="formInline" :model="formInline" inline>
          <FormItem prop="user">
            <Input type="text" placeholder="关键字">
            </Input>
          </FormItem>
          <FormItem>
            <Button type="primary" @click="" icon="ios-search">搜索</Button>
          </FormItem>
        </Form>
      </Col>
      <Col span="6">
      <Row type="flex" justify="end" class="code-row-bg">
        <Col span="6"><Button type="primary">添加</Button></Col>
        <Col span="6"><Button type="primary">删除</Button></Col>
      </Row>
      </Col>
    </Row>

    <Table border :columns="columns" :data="data"></Table>
  </div>

</template>
<script>
  import {mapGetters} from 'Vuex';

  export default {
    data() {
      return {
        columns: [
          {
            type: 'selection',
            width: 60,
            align: 'center'
          },
          {
            title: '名称',
            key: 'name',

          },
          {
            title: '图片',
            key: 'pic'
          },
          {
            title: '描述',
            key: 'desc'
          },
          {
            title: '操作',
            key: '_id',
            width: 150,
            align: 'center',
            render: (h, params) => {
              return h('div', [
                h('Button', {
                  props: {
                    type: 'primary',
                    size: 'small'
                  },
                  style: {
                    marginRight: '5px'
                  },
                  on: {
                    click: () => {
                      this.show(params.row._id)
                    }
                  }
                }, '查看'),
                h('Button', {
                  props: {
                    type: 'error',
                    size: 'small'
                  },
                  on: {
                    click: () => {
                      this.remove(params.row._id)
                    }
                  }
                }, '删除')
              ]);
            }
          }
        ],
        data: []
      }
    },
    methods: {
      show(id) {
        // this.$Modal.info({
        //     title: 'User Info',
        //     content: `Name：${this.data6[index].name}<br>Age：${this.data6[index].age}<br>Address：${this.data6[index].address}`
        // })
        this.$router.push({path: 'info', query: {prdouctId: id}})

      },
      remove(index) {
        this.data.splice(index, 1);
      }
    },
    mounted() {
      let _this = this;
      _this.getData('/data/product', {}, function (data) {
        _this.data = data.data;
      });
    }
  }
</script>
