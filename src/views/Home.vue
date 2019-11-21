<template>
  <div id="index">
    <div class="tea_nav">
      <div class="teaname">茶叶</div>
      <ul>
        <li
          v-for="i in tea_name"
          @click="tea_index=i"
          :style=" {color:tea_index==i?'green':''}" :key="i"
        >{{i}}</li>
      </ul>
    </div>
    <div class="tea_cont">
      <div v-if="tea_index=='全部'">
        <div v-for="(i,$index) in tea_arr" class="tBox" :key="$index">
          <div class="tea_img">
            <img :src="i.img" />
          </div>
          <p class="tn_box">{{i.name}}</p>
          <div class="tea_price">
            <span>￥</span>
            {{i.price}}
          </div>
          <div class="joinshop">
            <span @click="a_str(i)">加入购物车</span>
          </div>
        </div>
      </div>
      <div v-else>
        <div v-for="(i,$index) in tea_arr" :key="$index" class="tBox" v-show="tea_index == i.type">
          <div class="tea_img">
            <img :src="i.img" />
          </div>
          <p class="tn_box">{{i.name}}</p>
          <div class="tea_price">
            <span>￥</span>
            {{i.price}}
          </div>
          <div class="joinshop">
            <span @click="a_str(i)">加入购物车</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name:'home',
  methods: {
    // ...mapActions(["a_str"])
	a_str(i){
		this.$store.commit('number',i)
		this.$router.push('/shop')
	}
  },
  data() {
    return {
      tea_index: "全部",
      tea_name: [
        "全部",
        "绿茶",
        "黄茶",
        "乌龙茶",
        "红茶",
        "黑茶",
        "白茶",
        "花茶"
      ],
      tea_arr: [
        {
          name: "茉莉花茶",
          price: "223.0",
          type: "花茶",
          n: 0,
          img:
            "https://ccdn.goodq.top/caches/9b69daffc17579b848483c854813cad2/aHR0cHM6Ly81Y2RkM2FhNWM0NmVhLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTkvMDQvODMxNGZmNmYyYjkyNzcxZmY2N2U5NjdlZjQyNjAzZWItMzAweDMwMC5qcGc_p_p100_p_3D.jpg"
        },
        {
          name: "白牡丹",
          price: "1235.0",
          type: "白茶",
          n: 0,
          img:
            "https://ccdn.goodq.top/caches/9b69daffc17579b848483c854813cad2/aHR0cHM6Ly81Y2RkM2FhNWM0NmVhLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTkvMDQvMGFkMzdiZDQwOGNjYWMwYzI0Y2JmNzdiMDZiNDg4ODAtMzAweDMwMC5qcGc_p_p100_p_3D.jpg"
        },
        {
          name: "白毫银针",
          price: "258.0",
          type: "白茶",
          n: 0,
          img:
            "https://ccdn.goodq.top/caches/9b69daffc17579b848483c854813cad2/aHR0cHM6Ly81Y2RkM2FhNWM0NmVhLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTkvMDQvOTc4NTUwMDZjYzA1MDQ1OGVkMDFmZjE2N2I4YjNkOTctMzAweDMwMC5qcGc_p_p100_p_3D.jpg"
        },
        {
          name: "云南普洱茶",
          price: "500.0",
          type: "黑茶",
          n: 0,
          img:
            "https://ccdn.goodq.top/caches/9b69daffc17579b848483c854813cad2/aHR0cHM6Ly81Y2RkM2FhNWM0NmVhLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTkvMDQvMDMzMjg2Zjc0ZWU4M2ZiM2U5MTllZTgwMDc4MjRjNTAtMzAweDMwMC5qcGc_p_p100_p_3D.jpg"
        },
        {
          name: "湖北老青茶",
          price: "400.0",
          type: "黑茶",
          n: 0,
          img:
            "https://ccdn.goodq.top/caches/9b69daffc17579b848483c854813cad2/aHR0cHM6Ly81Y2RkM2FhNWM0NmVhLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTkvMDQvMjY1ZjU4NWU5ZmNmYjkxMDBlMzc1YmFkMDQyNTkwMzEtMzAweDMwMC5qcGc_p_p100_p_3D.jpg"
        },
        {
          name: "霍山黄芽蒙洱银针",
          price: "711.0",
          type: "黄茶",
          n: 0,
          img:
            "https://ccdn.goodq.top/caches/9b69daffc17579b848483c854813cad2/aHR0cHM6Ly81Y2RkM2FhNWM0NmVhLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTkvMDQvMjhlYTFmMDQ0Y2NhOWI4NWEzYWZkMzExYzczZTY3MjQtMzAweDMwMC5qcGc_p_p100_p_3D.jpg"
        },
        {
          name: "蒙顶黄芽",
          price: "450.0",
          type: "黄茶",
          n: 0,
          img:
            "https://ccdn.goodq.top/caches/9b69daffc17579b848483c854813cad2/aHR0cHM6Ly81Y2RkM2FhNWM0NmVhLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTkvMDQvNWM4NmNiNjkzOTdjOTM4NWQ4MzI0MDdlZDhhY2EwMmUtMzAweDMwMC5qcGc_p_p100_p_3D.jpg"
        },
        {
          name: "冻顶乌龙茶",
          price: "620.0",
          type: "乌龙茶",
          n: 0,
          img:
            "https://ccdn.goodq.top/caches/9b69daffc17579b848483c854813cad2/aHR0cHM6Ly81Y2RkM2FhNWM0NmVhLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTkvMDQvNWNjYjNmZjU3YWU2YjBmMmRiYWZmOTk2MzljY2E4N2MtMzAweDMwMC5qcGc_p_p100_p_3D.jpg"
        },
        {
          name: "大红袍",
          price: "3480.0",
          type: "乌龙茶",
          n: 0,
          img:
            "https://ccdn.goodq.top/caches/9b69daffc17579b848483c854813cad2/aHR0cHM6Ly81Y2RkM2FhNWM0NmVhLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTkvMDQvNDM1OTBkNjFjM2ViOGU2YzUyYWU3ZmM2N2I3YjQwZGMtMzAweDMwMC5qcGc_p_p100_p_3D.jpg"
        },
        {
          name: "祁门红茶",
          price: "568.0",
          type: "红茶",
          n: 0,
          img:
            "https://ccdn.goodq.top/caches/9b69daffc17579b848483c854813cad2/aHR0cHM6Ly81Y2RkM2FhNWM0NmVhLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTkvMDQvYzNjYmVkZWE4N2JmNzZjOTUyODdjZWUyYWQ4MjgyM2MtMzAweDMwMC5qcGc_p_p100_p_3D.jpg"
        },
        {
          name: "正山小种",
          price: "952.0",
          type: "红茶",
          n: 0,
          img:
            "https://ccdn.goodq.top/caches/9b69daffc17579b848483c854813cad2/aHR0cHM6Ly81Y2RkM2FhNWM0NmVhLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTkvMDQvMjc0Y2E2YTE1Nzc3Mjk4MTFhMDJiOTg0Y2ZlMzliY2MtMzAweDMwMC5qcGc_p_p100_p_3D.jpg"
        },
        {
          name: "西湖龙井特级",
          price: "888.0",
          type: "绿茶",
          n: 0,
          img:
            "https://ccdn.goodq.top/caches/9b69daffc17579b848483c854813cad2/aHR0cHM6Ly81Y2RkM2FhNWM0NmVhLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTkvMDQvYTY5N2NjZmUxNzIwNTg1YjcwM2E2OTk2ZWY3N2U4NmEtMzAweDMwMC5qcGc_p_p100_p_3D.jpg"
        },
        {
          name: "洞庭碧螺春",
          price: "880.0",
          type: "绿茶",
          n: 0,
          img:
            "https://ccdn.goodq.top/caches/9b69daffc17579b848483c854813cad2/aHR0cHM6Ly81Y2RkM2FhNWM0NmVhLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTkvMDQvYWNkYWZkYWVmNGVlM2NiNmJlYTFjNWI5MWE2MzQwOGMtMzAweDMwMC5qcGc_p_p100_p_3D.jpg"
        }
      ]
    };
  }
};
</script>

<style>
.tea_nav {
  background-color: rgba(244, 244, 244, 0.5);
  height: 30px;
  overflow: hidden;
  padding: 0 20px;
  padding: 20px 0;
}

.tea_nav ul {
  float: right;
  padding-right: 30px;
  line-height: 32px;
}

.tea_nav li {
  float: left;
  padding: 0 20px;
  cursor: pointer;
  color: #878787;
  font-size: 15px;
  list-style: none;
}

.teaname {
  float: left;
  padding-left: 30px;
  color: #333333;
  font-family: 微软雅黑;
  font-size: 24px;
}

.tea_cont {
  overflow: hidden;
  background: #fff;
  padding: 40px 30px;
  margin: 0 auto;
}

.tBox {
  max-width: 18%;
  border-bottom: 1px solid transparent;
  padding: 10px;
  float: left;
  cursor: pointer;
}
.tea_img {
  width: 100%;
  height: 80%;
}
.tea_img img {
  width: 100%;
  height: 100%;
}

.tn_box {
  padding-bottom: 15px;
  font-weight: normal;
  color: #8e8e8e;
  line-height: 24px;
  padding-top: 10px;
  text-align: left;
  width: 100%;
  margin-bottom: 5px;
  border-bottom: 1px solid #ededed;
}
.tn_box:hover {
  color: #85bf41;
}
.tea_price {
  color: #8e8e8e;
  font-size: 16px;
  font-family: sans-serif;
  overflow: hidden;
}

.teaboxs {
  padding: 15px;
}
.joinshop {
  margin: 6px 0;
  background-image: none;
}
.joinshop > span {
  font-size: 12px;
  font-weight: normal;
  color: rgb(142, 142, 142);
  font-family: 微软雅黑;
  background-color: transparent;
  padding-top: 6px;
  padding-bottom: 6px;
  padding-left: 8px;
  padding-right: 8px;
  border-color: rgb(142, 142, 142);
  line-height: 1em;
  border: 1px #ccc solid;
}
.joinshop > span:hover {
  color: #85bf41;
  border-color: #85bf41;
  cursor: pointer;
}
</style>
