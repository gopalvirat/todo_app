import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

const TodoStore = new  Vuex.Store({
	state:{
		todos:[]
	},
	mutations:{
		Add(state,data){
			state.todos.push(data);
		},
		Remove(state){
			state.todos.pop(data);
		},
		Update(state,data){
			state.todos[data.id].name=data.name;
		}
	},
	getters: {
		getTodoById: (state) => (id) => {
			return state.todos[id];
		}
	}
})
export default TodoStore;