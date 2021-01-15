<template>
	<div>
		<div>
			<nav class="green darken-2" >
				<div class="nav-wrapper">
					<router-link to="/" style="font-size: 2.1rem; margin: 0 4rem 0 2rem">MovieSearcher</router-link>
					<router-link
						to="/favorites"
						style="font-size: 1.5rem"
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