	<template>
		<div>
			<div v-show="todoLists.length<1" class="alert alert-secondary" role="alert">
				You have no Todo added, please add new todo
			</div>

			<div class="card" style="width: 100%;margin-top: 10px" v-for="(todo,key,index) in todoLists">
				<div class="card-body">
					<h5 class="card-title"><router-link :to="{ name: 'todo', params: { id: key }}">{{todo.name}}</router-link></h5>
				</div>
			</div>
			
		</div>
	</template>
	<script>
		import TodoStore from '../store/TodoStore.js'
		export default {
			name :'Home',
			data(){
				return{
					todoName:'',
					isDone:false
				}

			},
			computed:{
				todoLists(){
					return TodoStore.state.todos
				}
			}
		}
	</script>