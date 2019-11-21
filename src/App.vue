<template>
  <div id="app">
		<div style="line-height: 60px;overflow: hidden;border-bottom: 1px #ccc solid;">
			<div v-for="(i,$index) in nav_arr" style="float: left;" :key="$index">
				<a @click="index=$index" :href="i.path" :style="index==$index?{color:'pink'}:{color:'#000'}">{{i.text}}</a>
			</div>
		</div>
		<div style="min-height: 600px;background: #fff;">
			<router-view></router-view>
		</div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
		index:0,
		nav_arr:[
			{path:'/',text:'商城'},
			{path:'/shop',text:'🛒'}
		]
    }
  },
	created(){
		console.log(this.$route.path)
		if(this.$route.path=='/shop'){
			this.index=1
		}
	}
}
</script>

<style>
	*{
		padding:0;
		margin:0;
		user-select:none;
	}
	a{
		text-decoration: none;
		color:#000;
		font-size:20px;
		padding:0 20px;
	}
</style>
