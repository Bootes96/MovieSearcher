<template>
  <div>
		<Preloader v-if="loading"/>
		<div class="container" v-else>
				<div>
					<div class="movie">
						<h1 class="movie__title">{{movie.title}}</h1>
						<div class="movie__content">
							<div class="movie__left">
								<div class="movie__img-wrapper">
									<img class="movie__img" v-if="!movie.poster_path" src="../assets/no-image.jpg" alt="movie poster" />
									<img class="movie__img" v-else :src="`https://image.tmdb.org/t/p/w342/${movie.poster_path}`" alt="movie poster"/>
								</div>
								<span class="movie__average-vote green darken-2">{{movie.vote_average}}</span>
								<div class="movie__action">
									<a @click="$func.addToFavorite(movie, $event)" class="green-text text-darken-2" ref="favorite">ADD TO FAVORITES</a>
									<i class="material-icons card-icon">favorite</i>
								</div>
							</div>
							<div class="movie__info">
								<h4 class="section-title">Movie Title</h4>
								<p>{{movie.original_title}} ({{movie.original_language}})</p>
								<h4 class="section-title">Tagline</h4>
								<p>{{movie.tagline}}</p>
								<h4 class="section-title">Description</h4>
								<p>{{movie.overview}}</p>
								<h4 class="section-title">Release Date</h4>
								<p>{{movie.release_date}}</p>
								<h4 class="section-title">Genres</h4>
								<p v-if="movie">{{genres}}</p>
								<h4 class="section-title">Budget</h4>
								<p>${{movie.budget}}</p>
								<h4 class="section-title">Credits</h4>
								<h4 class="section-title">Crew</h4>
								<div class="credits">
									<div class="credits__person">
										<span class="credits__person-name">{{directorName}}</span>
										<span class="credits__person-character">Director</span>
									</div>	
								</div>
								<h4 class="section-title">Cast</h4>
								<div class="credits" v-for="actor in mainActors" :key="actor.id">
									<div class="credits__person">
										<span class="credits__person-name">{{actor.name}}</span>
										<span class="credits__person-character">{{actor.character}}</span>
									</div>
								</div>
								<div class="votes">
									<div class="votes__item">
										<h4 class="votes__title">Average Vote:</h4>
										<span>{{movie.vote_average}}</span>
									</div>
									<div class="votes__item">
										<h4 class="votes__title">Number of votes:</h4>
										<span>{{movie.vote_count}}</span>
									</div>
									<div class="votes__item">
										<h4 class="votes__title">Popularity:</h4>
										<span>{{movie.popularity}}</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<SimilarMovies :movieId='movieId'/>
		</div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import SimilarMovies from '../components/SimilarMovies'
import {mapGetters} from 'vuex'
import Preloader from '../components/Preloader.vue'
export default {
	name: 'Single',
	data: function() {
		return {
			loading: true,
			movie: [],
			movieCast: [],
			mainActors: [],
			genres: "",
			directorName: "",
			movieId: ''
		}
	},
	components: {
		SimilarMovies,
		Navbar,
		Preloader
	},
	async mounted() {
		const id = this.$route.params.id
		this.movieId = id
		this.movie = await this.$store.dispatch('fetchMovieById', id)
		this.movieCast = await this.$store.dispatch('fetchMovieCast', id)
		this.movieDetails()
	},
	methods: {
		movieDetails() {
			const director = _.filter(this.movieCast.crew, function(item) {
					return item.job === "Director"
				})
			if(director.length) {
				this.directorName = director[0].name
			} else {
				this.directorName = 'unknown'
			}
			this.genres = this.movie.genres.map((genre) => genre.name).join(", ")
			this.mainActors = this.movieCast.cast.slice(0, 8) 
			this.director = this.$store.getters.movieDirector
			this.loading = false
		}
	},
	watch: {
		async '$route'() {
			const id = this.$route.params.id
			this.movieId = id
			this.movie = await this.$store.dispatch('fetchMovieById', id)
			this.movieCast = await this.$store.dispatch('fetchMovieCast', id)
			this.movieDetails()
		}
	},
}
</script>

<style lang="scss" scoped>
	.movie {
		&__content {
			display: flex;
		}
		&__left {
			position: relative;
			margin-right: 20px;
		}
		&__action {
			margin-top: 10px;
			border: 1px solid #388e3c;
			display: flex;
			justify-content: space-around;
			align-items: center;
			a {
				font-size: 1.3rem;
			}
		}
		&__img {
			height: 100%;
			width: 100%;
			object-fit: cover;
			object-position: center;
			&-wrapper {
				width: 345px;
				height: 513px;
			}
		}
		&__average {
			&-vote{
				position: absolute;
				top: 10px;
				left: 20px;
				padding: 20px;
				color: #fff;
				border-radius: 5px;
			}
			&-button {
				width: 345px;
			}
		}
	}
	.section-title {
		font-size: 22px;
		font-weight: 600;
	}
	.credits {
		margin-bottom: 20px;
		&__person {
			display: flex;
			justify-content: space-between;
			margin-bottom: 5px;
		}
	}
	.votes {
		display: flex;
		justify-content: space-between;
		&__title {
			margin: 0;
			font-size: 16px;
			font-weight: 600;
			margin-right: 5px;
		}
		&__item {
			display: flex;
			align-items: center;
		}
	}

	@media (min-width: 762px) and (max-width: 1199px) {
			.votes {
			&__item {
				display: block;
			}
			&__title {
				font-size: 11px;
			}
		}
  }
  
	@media (max-width: 761px) {
		.movie {
			&__title {
				font-size: 1.5rem;
				text-align: center;
				margin: 0 0 1rem 0;
			}
			&__left {
				max-width: 320px;
			}
			&__img {
				&-wrapper {
					max-width: 320px;
				}
			}
			&__content {
				display: block;
			}
			&__action {
				width: 320px;
			}
		}
		.votes {
			&__item {
				display: block;
			}
			&__title {
				font-size: 11px;
			}
		}
	}
</style>