<template>
	<div>
		<h4>{{data.name}}</h4>
		<div>{{data.desc}}</div>
	</div>
</template>
<style scope lang='less'>

</style>
<script>
	export default {
	  data(){
	    return {
	      data:[],
      }
    },
    watch:{
	    "$route":'fetchData',
    },
    methods:{
      fetchData(){
        let _this = this;
        console.log(_this.$route.query.prdouctId);
        this.getData('/data/product',{params:{_id:_this.$route.query.prdouctId}},function(data){
          _this.data =data.data[0];
        });

      }
    },
    created (){
      this.fetchData()
    }
  }
</script>
