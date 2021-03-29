<template>
	<div class="boxwrapper">
		<div class="list-item" v-for="(item,index) in list" :key="index">
      <div class="item-name">{{item.name}}</div>
      <div v-if="item.children" class="children-item" :style="styleObj">
        <list :list="item.children"></list>
      </div>
		</div>
	</div>
</template>
 
<script>
export default {
    name:"List",
    props:{
    	list:Array
    },
    data() {
        return {
            styleObj:{'margin-left':'20px', 'font-size':"16px"}
        }
    }
}
</script>
<style lang="less" scoped>
	.boxwrapper {
		border:1px dotted #ccc;
		.list-item {
			background: #fff;
			height: 100%;
    }
  }
</style>