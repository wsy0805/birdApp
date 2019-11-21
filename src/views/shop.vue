<template>
  <div id="shop">
    <div v-if="t_g_arr.length">
      <div class="already">
        <strong>√</strong>
        “{{$store.state.listname}}” 成功添加进您的购物车.
		<router-link to="/">继续购物</router-link>
      </div>
      <div class="goodscont">
        <div class="goods_left">
          <ul class="ullist">
            <li>商品</li>
            <li>价格</li>
            <li>数量</li>
            <li>合计</li>
          </ul>
          <div>
            <div v-if="t_g_arr.length" v-for="(i,$index) in t_g_arr" :key="$index" style="width: 97%;">
              <h4>{{i}}</h4>
			  <!-- {{$store.state.list_arr}} -->
              <ul class="goodlist" v-for="(a,$index) in $store.state.list_arr" :key="$index" v-if="i==a.type">
                <li>
                  <button @click="remove(a)">×</button>
                </li>
                <li>
                  <img :src="a.img" alt />
                </li>
                <li style="color: #519f10;">{{a.name}}</li>
                <li>￥{{a.price}}</li>
                <li>
                  <span class="btn" @click="spt(a)">-</span>
                  <span>{{a.n}}</span>
                  <span class="btn" @click="add(a)">+</span>
                </li>
                <li>{{a.price*a.n}}</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="goods_right">
          <h2>购物车总计</h2>
          <div class="right_sum">
            <div>
              <span>购物车小计</span>
              <i>{{prize}}</i>
            </div>
            <div>
              <span>运费</span>
              <i>免费送货</i>
            </div>
            <div>
              <span>订单总计</span>
              <i>{{prize}}</i>
            </div>
          </div>
          <div class="goup">
            <button>前往收银台</button>
          </div>
          <h2>优惠券：</h2>
          <div class="usema">
            <input type="text" placeholder="优惠卷代码" />
          </div>
          <div class="goup">
            <button style="background: #90af6b;">使用优惠卷</button>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="emptyshop">
      <p>您的购物车目前是空的。</p>
      <!-- <a href="/" class="returnbtn">←返回商店</a> -->
	  <router-link class="returnbtn" to="/">返回商店</router-link>
    </div>
   <!-- {{t_g_arr}}
		<br>
    {{$store.state.list_arr}} -->
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name:'shop',
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["t_g_arr","prize"])
  },
  methods: {
    // ...mapActions(["add", "spt", "remove"])
	add(i){
		this.$store.commit('addNum',i)
	},
	spt(i){
		this.$store.commit('sptNum',i)
	},
	remove(i){
		this.$store.commit('delNum',i)
	}
  }
};
</script>

<style>
#shop {
  width: 90%;
  padding: 50px 0;
  background: #fff;
  margin: 0 auto;
}
.already {
  border: 1px solid #88dfae;
  font-size: 16px;
  font-weight: normal;
  color: #2f9a4c;
  padding: 15px 8px 15px 20px;
  position: relative;
  background: #ffffff;
  margin-bottom: 20px;
}
.already a {
  color: #ffffff;
  border-color: transparent;
  background-image: none;
  background-color: #10ac62;
  font-size: 14px;
  font-weight: normal;
  padding: 10px 20px;
  position: absolute;
  right: 5px;
  top: 5.5px;
}
.emptyshop {
  font-size: 16px;
  font-weight: normal;
  color: #777777;
  text-align: center;
}
.returnbtn {
  display: block;
  width: 83px;
  height: 44px;
  line-height: 44px;
  text-align: center;
  margin: 0 auto;
  font-size: 16px;
  font-weight: normal;
  color: #ffffff;
  border-color: #519f10;
  background-color: #519f10;
  margin-top: 20px;
}
.goodscont {
  display: flex;
  margin-top: 10px;
  min-height: 200px;
}
.goods_left {
  flex: 8;
  /* background: yellowgreen;*/
  border-right: 1px #ccc solid;
  padding: 0 20px;
  box-sizing: border-box;
}
.goods_right {
  flex: 4;
  /* background:palegreen; */
  box-sizing: border-box;
  padding: 0 20px;
}
.ullist {
  list-style: none;
  overflow: hidden;
  border-bottom: 1px #ddd solid;
  display: flex;
}
.ullist > li {
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  color: #555555;
  text-align: left;
  padding: 4px 12px;
  box-sizing: border-box;
}
.ullist > li:nth-of-type(1) {
  text-align: center;
  flex: 6;
}
.ullist > li:nth-of-type(2) {
  flex: 1;
  text-align: center;
}
.ullist > li:nth-of-type(3) {
  flex: 4;
  text-align: center;
}
.ullist > li:nth-of-type(4) {
  flex: 1;
  text-align: left;
}
.goodlist {
  list-style: none;
  overflow: hidden;
  border-bottom: 1px #ddd solid;
  display: flex;
  line-height: 90px;
  height: 90px;
  padding-bottom: 20px;
}
.goodlist li {
  float: left;
  padding: 8px;
  box-sizing: border-box;
}
.goodlist li button {
  width: 18px;
  height: 18px;
  border: 2px #ddd solid;
  border-radius: 50%;
  outline: none;
  font-size: 12px;
  line-height: 14px;
  text-align: center;
  background: #fff;
  color: #ddd;
  font-weight: 800;
}
.goodlist li img {
  width: 90px;
  height: 90px;
}

.goodlist > li:nth-of-type(1) {
  text-align: center;
  flex: 1;
}
.goodlist > li:nth-of-type(2) {
  flex: 2;
}
.goodlist > li:nth-of-type(3) {
  flex: 3;
  text-align: left;
}
.goodlist > li:nth-of-type(4) {
  flex: 2;
  text-align: left;
}
.goodlist > li:nth-of-type(5) {
  flex: 2;
  text-align: center;
  padding-left: 42px;
}
.goodlist > li:nth-of-type(5) > span {
  float: left;
  width: 26px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  border: 1px #ccc solid;
  margin-top: 20px;
  cursor: pointer;
}
.goodlist > li:nth-of-type(6) {
  flex: 2;
  text-align: right;
}
.goods_right h2 {
  font-size: 16px;
  font-weight: bold;
  color: #555555;
  padding-top: 6px;
  padding-bottom: 6px;
  border-bottom: 2px #ddd solid;
}
.right_sum > div {
  line-height: 34px;
  font-size: 14px;
  color: #777;
  overflow: hidden;
}
.right_sum > div:nth-of-type(2) {
  border-bottom: 1px #ccc solid;
}
.right_sum > div:nth-of-type(3) {
  border-bottom: 2px #ccc solid;
}
.right_sum > div span {
  float: left;
  font-weight: bold;
}
.right_sum > div i {
  font-style: normal;
  float: right;
}
.goup {
  width: 100%;
  margin: 10px 0;
}
.goup button {
  font-size: 16px;
  font-weight: normal;
  color: #ffffff;
  background-color: #519f10;
  padding-top: 12px;
  padding-bottom: 12px;
  width: 100%;
  outline: none;
  border: none;
  cursor: pointer;
}
.usema {
  margin: 15px 0;
}
.usema input {
  display: block;
  width: 100%;
  font-size: 16px;
  font-weight: normal;
  box-sizing: border-box;
  outline: none;
  border: 1px solid;
  color: #919191;
  border-color: #999999;
  background-color: #ffffff;
  padding-top: 7px;
  padding-bottom: 7px;
  padding-left: 7px;
}
</style>
