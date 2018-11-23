<template>
	<div>
		<div class="card" style="width: 18rem;">
			<div class="card-body">
				<input type="text" class="form-control" aria-describedby="emailHelp" placeholder="Todo name" v-model="todoName">
			</div>
			<button type="submit" class="btn btn-primary" @click="update">Update</button>
		</div>
	</div>
</template>

<script>
	import TodoStore from '../../store/TodoStore.js'
	export default {
		data(){
			return{
				todoName:'',
				todoDescription:''
			}
		},
		name: 'EditTodo',
		methods:{
			update(){
				TodoStore.commit('Update',{id:this.$route.params.id,name:this.todoName})
				this.$router.push({ path:'/' }) // -> /user/123
			}
		},
		created: function () {
				this.todoName = TodoStore.getters.getTodoById(this.$route.params.id).name;
			},
		}
	</script>