<template>
    <Table border  :loading="" :columns="columns" :data="data"></Table>
</template>
<script>
  import {mapGetters} from 'Vuex';
    export default {
        data () {
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
                        key: 'id',
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
                                            this.show(params.index)
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
                                            this.remove(params.index)
                                        }
                                    }
                                }, '删除')
                            ]);
                        }
                    }
                ],
                data: [

                ]
            }
        },
        methods: {
            show (index) {
                // this.$Modal.info({
                //     title: 'User Info',
                //     content: `Name：${this.data6[index].name}<br>Age：${this.data6[index].age}<br>Address：${this.data6[index].address}`
                // })
            },
            remove (index) {
                this.data.splice(index, 1);
            }
        }
        ,
        mounted(){
            let _this = this;
            _this.getData('/data/product',{},function(data){
                _this.data =data.data;
            });
            console.log()
        }
    }
</script>
