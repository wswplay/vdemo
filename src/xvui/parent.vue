<template>
    <div class="recursiveComponent">
		  <list :list="list"></list>
    </div>
</template>
 
<script>
import List from './list'

export default {
    name:"recursiveComponent",
    components:{ List },
    data() {
        return {
            list: [
            {
                name: "一级",
                children: [
                {
                    name: "二级",
                    children: [
                    {
                        name: "2——1——1"
                    }, {
                        name: "2——1——2"     
                    }]
                }, 
                {
                    name: "二级",
                    children: [
                    {
                        name: "2——1——3"
                    }, {
                        name: "2——1——4"     
                    }]
 
                }]
            },
            {
                name: "一级",
                children: [
                {
                    name: "二级",
                    children: [
                    {
                        name: "2——1——5"
                    }, 
                    {
                        name: "三级",
                        children: [{
                           name: "3——1——1"
                        }, {
                           name: "3——1——1"     
                        }]  
                    }]
                }, 
                {
                    name: "二级",
                    children: [
                    {
                        name: "2——1——7"
                    }, {
                        name: "2——1——8"     
                    }]
 
                }]
            },
 
            ]
        }
    }
}
</script>
<style lang="less" scoped>
  .recursiveComponent {
    color: #000;
  }
</style>