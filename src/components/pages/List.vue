<template>
  <div>
    <Row>
      <Col span="18">
      <Form ref="formInline" inline>
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
        <Col span="6">
        <router-link to="/add">
          <Button type="primary">
            添加
          </Button>
        </router-link>
        </Col>
        <Col span="6">
        <Button type="primary">删除</Button>
        </Col>
      </Row>
      </Col>
    </Row>

    <Table border :columns="columns" :data="data" :loading="getLoading"></Table>
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
            key: 'pic',
            render: (h, params) => {

              return h('div', {
                  style: {
                    display: 'flex',
                    alignItems: 'center',
                  },
                },
                [
                  h('img',{
                    attrs: {
                      src: params.row.pic
                    },
                    style: {
                      height: '60px',
                      width: '60px',
                      margin:'2px 0'
                    },
                  })
                ]
              )
            }
          },
          {
            title: '日期',
            key: 'date',

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
    computed: {
      ...mapGetters([
        'getLoading',
      ])
    },
    methods: {
      init(){
        let _this = this;
        _this.getData('/data/product', {}, function (data) {
          _this.data = data.data;
          _this.data.forEach(function (v, i) {
            v.pic = v.pics[0];


          })
        });
      },
      show(id) {
        this.$router.push({path: 'info', query: {prdouctId: id}})

      },
      remove(id) {
        let _this=this;
        this.$ajax.post('/data/delproduct',{params:{id: id}},).then(function (data) {
          _this.init();
        }).catch(function (err) {

        });
      }
    },
    mounted() {
      this.init();
    }
  }
</script>
