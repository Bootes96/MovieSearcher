<template>
	<div class="container">
		<div class="cards">
			<div class="card-wrapper" v-for="movie in movies" :key="movie.id">
				<div class="card">
					<div class="card-action">
						<a @click="addToFavorite(movie, $event)" class="green-text text-darken-2" ref="favorite">ADD TO FAVORITES</a>
						<i class="material-icons card-icon">favorite</i>
					</div>
					<div class="card-image" @click="$router.push(`/single/${movie.id}`)">
						<img v-if="!movie.poster_path" src="../assets/no-image.jpg"/>
						<img v-else :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`" />
					</div>
				</div>
				<a @click="$router.push(`/single/${movie.id}`)" class="card-title black-text">
					{{movie.title}} <span>({{movieRelease(movie.release_date)}})</span>
				</a>
			</div>
		</div>
	</div>
</template>

<script>

export default {
	name: 'MovieCard',
	props:['movies'],
	methods: {
		movieRelease(date) {
			if(date) {
				return date.split('-')[0]
			} else {
				return 'unknown'
			}
		},
		addToFavorite(movie, event) {
			const {id, title, poster_path} = movie
				const movieInfo = {}
				movieInfo.id = id
				movieInfo.title = title
				movieInfo.poster_path = poster_path

				const storageMovies = localStorage.getItem('movies') ? JSON.parse(localStorage.getItem('movies')) : []
				let count = 0

				for(let i = 0; i < storageMovies.length; i++) {
					if(storageMovies[i].id === id && 'REMOVE FROM FAVORITES') {
						event.target.innerText = 'ADD TO FAVORITES'
						event.target.nextElementSibling.classList.remove('red-text')
						storageMovies.splice(i, 1)
						count = count + 1
						localStorage.setItem('movies', JSON.stringify(storageMovies))
					}
				}

				if(count == 0 && event.target.innerText === "ADD TO FAVORITES") {
					event.target.nextElementSibling.classList.add('red-text')
					event.target.innerText = "REMOVE FROM FAVORITES"
					storageMovies.push(movieInfo) 
					localStorage.setItem('movies', JSON.stringify(storageMovies))
				}				
		}
	},
}
</script>

<style lang="scss" scoped>
.card-image {
	img {
		min-height: 389px;
		object-fit: cover;
	}
	min-height: 435px;
}
</style>