<template>

    <router-view/>
    <!--<el-button type="primary" @click="handleLogin">测试登录</el-button>

    <el-button type="danger" @click="handleUserList">测试获取用户请求</el-button>-->
</template>
<script setup>
import store from '@/store'
import { ref ,watch} from 'vue'
import { useRoute,useRouter } from 'vue-router'
const route=useRoute();
const router=useRouter();
const whitePath=['/login','/index','/']


watch(route,(to,from)=>{
  console.log("to"+to.name)
  console.log(to.path)

  if (whitePath.indexOf(to.path)===-1) {
    console.log("to.path="+to.path)
    let obj = {
      name: to.name,
      path: to.path
    }

    store.commit("ADD_TABS", obj)
  }

},{deep:true,immediate:true})



/*import requestUtil from '@/util/request'
import store from '@/store'

const handleLogin=async ()=>{
  let result=await requestUtil.get("test/login");
  let data=result.data;
  if(data.code=200){
    const token=data.token;
    console.log("登录成功：token="+token);
    store.commit('SET_TOKEN',token);
  }else{
    console.log("登录出错！");
  }
}

const handleUserList=async ()=>{
  let result=await requestUtil.get("test/user/list");
  let data=result.data;
  if(data.code=200){
    const userList=data.userList;
    console.log("用户列表信息：userList="+userList);
  }
}*/


</script>
<style>
html,body,#app{
  height: 100%;
}

.app-container{
  padding:20px
}
</style>
