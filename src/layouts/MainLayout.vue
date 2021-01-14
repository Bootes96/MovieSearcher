<template>
	<div>
		<Navbar/>
		<router-view />
	</div>
</template>

<script>
import Navbar from "../components/Navbar"
import Movies from '../views/Movies'
export default {
  name: "main-layout",
  components: {
		Navbar,
		Movies
  }
}
</script>