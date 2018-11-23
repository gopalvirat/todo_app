<template>
	<div>
		<div class="form-group">
			<label for="exampleInputEmail1">Todo name</label>
			<input type="text" class="form-control" aria-describedby="emailHelp" placeholder="Todo name" v-model="todoName">
		</div>
		<button type="submit" class="btn btn-primary" @click="save">Submit</button>
	</div>
</template>

<script>
	import TodoStore from '../../store/TodoStore.js'
	export default {
		data(){
			return{
				todoName:'',
				isDone:false
			}
		},
		name: 'Add',
		methods:{
			save(){
				TodoStore.commit('Add',{name:this.todoName,done:false})
				this.$router.push({ path:'/' }) // -> /user/123
			}
		}
	}
</script>