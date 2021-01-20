<template>
	<div class="navigation__container">
		<div >
			<nav class="navigation green darken-2" >
				<div class="navigation__list">
					<router-link to="/" class="navigation__item" style="font-size: 2rem">MovieSearcher</router-link>
					<router-link
						to="/favorites"
						style="font-size: 1.5rem"
						class="navigation__item" 
					>Favorites
					</router-link>
				</div>
			</nav>
		</div>
		<router-view />
	</div>
</template>

<script>
import Favorites from '../views/Favorites.vue'
export default {
  components: { Favorites },
  name: "default-layout",
}
</script>