<template>
	<div>
		<div class="card" style="width: 18rem;">
			<div class="card-body">
				<h5 class="card-title">{{todoName}}</h5>
				<router-link :to="{ name: 'todoEdit', params: { id: this.$route.params.id }}">Edit</router-link>
			</div>
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
		name: 'ViewTodo',
		methods:{
			back(){
				this.route.push({ path: 'home' })
			}
		},
		created: function () {
				this.todoName =TodoStore.getters.getTodoById(this.$route.params.id).name;
			},
		}
	</script>