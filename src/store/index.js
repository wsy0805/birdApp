import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list_arr: [],
    listname: ''
  },
  getters: {
    t_g_arr(state) {
      var arr = [];
      for (var i = 0; i < state.list_arr.length; i++) {
        if (arr.indexOf(state.list_arr[i].type) == -1) {
          arr.push(state.list_arr[i].type)
        }
      }
      return arr
    },
	prize(state){
		var num=0
		for(var i=0;i<state.list_arr.length;i++){
			num+=state.list_arr[i].price*state.list_arr[i].n
		}
		return num
	}
  },
  mutations: {
    number(state,data){
      console.log(data.name)
      console.log(state.list_arr)
      state.listname=data.name
      var type=true;
      for(var i=0;i<state.list_arr.length;i++){
        if(state.list_arr[i].name==data.name){
          type=false;
          state.list_arr[i].n++
        }
      }	
      if(type){
        data.n=1
        state.list_arr.push(data)
      }
    },
	addNum(state,data){
		console.log(data)
		for(var i=0;i<state.list_arr.length;i++){
			if(state.list_arr[i].name==data.name){
				state.list_arr[i].n++
			}
		}
	},
	sptNum(state,data){
		for(var i=0;i<state.list_arr.length;i++){
			if(state.list_arr[i].name==data.name){
				state.list_arr[i].n--;
				if(state.list_arr[i].n<=0){
					state.list_arr[i].n=1
				}
			}
		}
	},
	delNum(state,data){
		for(var i=0;i<state.list_arr.length;i++){
			if(state.list_arr[i].name==data.name){
				state.list_arr.splice(i,1)
			}
		}
	}
  },
  // actions: {
  //   a_str({ commit }, num) {
  //     console.log(num)
  //     commit('number', num)
  //   }
  // },
})
