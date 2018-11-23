<template>
	<nav class="navbar navbar-expand-lg navbar-light bg-light">
		<router-link to="/" class="navbar-brand" v-bind:title="msg">Todo app</router-link>
		<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
		</button>

		<div class="collapse navbar-collapse" id="navbarSupportedContent">
			<ul class="navbar-nav mr-auto">
				<li class="nav-item active">
					<a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>

				</li>
				<li class="nav-item">
					<a class="nav-link" href="#">Link</a>
				</li>
				<li class="nav-item dropdown">
					<a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
						Dropdown
					</a>
					<div class="dropdown-menu" aria-labelledby="navbarDropdown">
						<router-link to="/todo/add" class="dropdown-item" >Add new todo</router-link>
					</div>
				</li>
			</ul>
		</div>
	</nav>
</template>

<script>

	export default {
		name: 'NavBar',
		props: {
			msg: String
		},
	}
</script>