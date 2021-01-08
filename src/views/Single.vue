<template>
  <div>
	<Navbar />
	<div class="container">
			<div>
				<div>
					<h1 class="movie__title">Курьер</h1>
					<div class="movie__content row">
						<div class="movie__left">
							<div class="movie__img-wrapper">
								<img class="movie__img" src="../assets/kuryer.jpg" alt="movie">
							</div>
							<span class="movie__average-vote green darken-2">7.3</span>
							<button class="btn movie__average-button green darken-2">Add to Faves</button>
						</div>
						<div class="movie__info">
							<h4 class="section-title">Movie Title</h4>
							<p>Курьер (кг)</p>
							<h4 class="section-title">Tagline</h4>
							<p>No available</p>
							<h4 class="section-title">Description</h4>
							<p>Ivan Mirosnikov, a cheeky young man in the Gorbachev era, is trying to figure out what to do with his life (he's not in college, and the 2-year mandatory military service is looming large ahead of him). 
								Meanwhile, he lives with his divorced mother, and works as a courier at a Russian newspaper. 
								Through his job, he meets patronizing Professor Kuznetzov and his rebellious daughter Katya. 
								To annoy the professor, Ivan claims to have an affair with Katya. 
								To his surprise, Katya backs his story up.
							</p>
							<h4 class="section-title">Release Date</h4>
							<p>1986-06-06</p>
							<h4 class="section-title">Genres</h4>
							<p>Drama Romance Comedy</p>
							<h4 class="section-title">Budget</h4>
							<p>$0</p>
							<h4 class="section-title">Credits</h4>
							<h4 class="section-title">Crew</h4>
							<div class="credits">
								<div class="credits__person">
									<span class="credits__person-name">Karen Shakhnazarov</span>
									<span class="credits__person-character">Director</span>
								</div>	
							</div>
							<h4 class="section-title">Crew</h4>
							<div class="credits">
								<div class="credits__person">
									<span class="credits__person-name">Fyodor Dunayevsky</span>
									<span class="credits__person-character">Ivan</span>
								</div>
								<div class="credits__person">
									<span class="credits__person-name">Anastasiya Nemolyaeva</span>
									<span class="credits__person-character">Katya</span>
								</div>
								<div class="credits__person">
									<span class="credits__person-name">Oleg Basilashvili</span>
									<span class="credits__person-character">Katya's father</span>
								</div>
								<div class="credits__person">
									<span class="credits__person-name">Inna Churikova</span>
									<span class="credits__person-character">Ivan's mother</span>
								</div>
								<div class="credits__person">
									<span class="credits__person-name">Aleksandr Pankratov-Chyornyy</span>
									<span class="credits__person-character">Ivan's chief</span>
								</div>
								<div class="credits__person">
									<span class="credits__person-name">Vladimir Menshov</span>
									<span class="credits__person-character">Guest on Katya's birthday</span>
								</div>
							</div>
							<div class="votes">
								<div class="votes__item">
									<h4 class="votes__title">Average Vote:</h4>
									<span>7.3</span>
								</div>
								<div class="votes__item">
									<h4 class="votes__title">Number of votes:</h4>
									<span>7.3</span>
								</div>
								<div class="votes__item">
									<h4 class="votes__title">Popularity:</h4>
									<span>7.3</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<SimilarMovies />
	</div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import SimilarMovies from '../components/SimilarMovies'
export default {
	name: 'Single',
	components: {
		SimilarMovies,
		Navbar
	}
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
</style>