<template>
	<div class="container">
		<div class="row">
			<div class="col s4">
				<div class="card">
					<div class="card-image">
						<img src="../assets/kuryer.jpg">
					</div>
					<div class="card-content">
						<h4 class="card-title">
							Курьер
						</h4>
						<p>I am a very simple card. I am good at containing small bits of information.
						I am convenient because I require little markup to use effectively.</p>
					</div>
					<div class="card-action">
						<a class="green-text text-darken-2" href="#">Add to Favorite</a>
						<i class="material-icons card-icon">favorite_border</i>
					</div>
				</div>
			</div>
			<div class="col s4">
				<div class="card">
					<div class="card-image">
						<img src="../assets/kuryer.jpg">
					</div>
					<div class="card-content">
						<h4 class="card-title">
							Курьер
						</h4>
						<p>I am a very simple card. I am good at containing small bits of information.
						I am convenient because I require little markup to use effectively.</p>
					</div>
					<div class="card-action">
						<a class="green-text text-darken-2" href="#">Add to Favorite</a>
						<i class="material-icons card-icon">favorite_border</i>
					</div>
				</div>
			</div>
			<div class="col s4">
				<div class="card">
					<div class="card-image">
						<img src="../assets/kuryer.jpg">
					</div>
					<div class="card-content">
						<h4 class="card-title">
							Курьер
						</h4>
						<p>I am a very simple card. I am good at containing small bits of information.
						I am convenient because I require little markup to use effectively.</p>
					</div>
					<div class="card-action">
						<a class="green-text text-darken-2" href="#">Add to Favorite</a>
						<i class="material-icons card-icon">favorite_border</i>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'MovieCard'
}
</script>

<style lang="scss" scoped>
	.card {
		&-title {
			margin: 0 0 15px 0;
			font-weight: bold;
			font-size: 1.5rem;
			position: relative;
		}
		&-action {
			display: flex;
			justify-content: space-between;
		}
	}
</style>