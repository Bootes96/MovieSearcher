<template>
  <div>
    <form action="#">
      <p class="sort-title">Select Genre</p>
      <div class="genres">
        <p class="genres-item">
          <label>
            <input type="checkbox" value="28" v-model="checkedGenres" />
            <span>Action</span>
          </label>
        </p>
        <p class="genres-item">
          <label>
            <input type="checkbox" value="12" v-model="checkedGenres" />
            <span>Adventure</span>
          </label>
        </p>
        <p class="genres-item">
          <label>
            <input type="checkbox" value="16" v-model="checkedGenres" />
            <span>Animation</span>
          </label>
        </p>
        <p class="genres-item">
          <label>
            <input type="checkbox" value="35" v-model="checkedGenres" />
            <span>Comedy</span>
          </label>
        </p>
        <p class="genres-item">
          <label>
            <input type="checkbox" value="80" v-model="checkedGenres" />
            <span>Crime</span>
          </label>
        </p>
        <p class="genres-item">
          <label>
            <input type="checkbox" value="99" v-model="checkedGenres" />
            <span>Documentary</span>
          </label>
        </p>
        <p class="genres-item">
          <label>
            <input type="checkbox" value="18" v-model="checkedGenres" />
            <span>Drama</span>
          </label>
        </p>
        <p class="genres-item">
          <label>
            <input type="checkbox" value="14" v-model="checkedGenres" />
            <span>Fantasy</span>
          </label>
        </p>
        <p class="genres-item">
          <label>
            <input type="checkbox" value="10751" v-model="checkedGenres" />
            <span>Family</span>
          </label>
        </p>
        <p class="genres-item">
          <label>
            <input type="checkbox" value="36" v-model="checkedGenres" />
            <span>History</span>
          </label>
        </p>
        <p class="genres-item">
          <label>
            <input type="checkbox" value="27" v-model="checkedGenres" />
            <span>Horror</span>
          </label>
        </p>
        <p class="genres-item">
          <label>
            <input type="checkbox" value="10402" v-model="checkedGenres" />
            <span>Music</span>
          </label>
        </p>
        <p class="genres-item">
          <label>
            <input type="checkbox" value="9648" v-model="checkedGenres" />
            <span>Mystory</span>
          </label>
        </p>
        <p class="genres-item">
          <label>
            <input type="checkbox" value="10749" v-model="checkedGenres" />
            <span>Romance</span>
          </label>
        </p>
        <p class="genres-item">
          <label>
            <input type="checkbox" value="878" v-model="checkedGenres" />
            <span>Science fiction</span>
          </label>
        </p>
        <p class="genres-item">
          <label>
            <input type="checkbox" value="10770" v-model="checkedGenres" />
            <span>Tv Movie</span>
          </label>
        </p>
        <p class="genres-item">
          <label>
            <input type="checkbox" value="53" v-model="checkedGenres" />
            <span>Thriller</span>
          </label>
        </p>
        <p class="genres-item">
          <label>
            <input type="checkbox" value="10751" v-model="checkedGenres" />
            <span>War</span>
          </label>
        </p>
        <p class="genres-item">
          <label>
            <input type="checkbox" value="37" v-model="checkedGenres" />
            <span>Western</span>
          </label>
        </p>
      </div>
    </form>
    <form action="#">
      <p class="sort-title">Sort movies by</p>
      <div class="sort-wrapper">
        <p>
          <label>
            <input
              name="group1"
              type="radio"
              checked
              value="popularity.desc"
							v-model="sortBy"
            />
            <span>Popularity</span>
          </label>
        </p>
        <p>
          <label>
            <input
              name="group1"
              type="radio"
              checked
              value="release_date.desc"
							v-model="sortBy"
            />
            <span>Release Date</span>
          </label>
        </p>
        <p>
          <label>
            <input
              name="group1"
              type="radio"
              checked
              value="original_title.desc"
							v-model="sortBy"
            />
            <span>Original Title</span>
          </label>
        </p>
        <p>
          <label>
            <input
              name="group1"
              type="radio"
              checked
              value="vote_count.desc"
							v-model="sortBy"
            />
            <span>Vote Count</span>
          </label>
        </p>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'MovieSorted',
  data: () => ({
		checkedGenres: [],
		sortBy: ''
	}),
	watch: {
		sortBy(newSort) {
      //this.$router.push("/sort_by" + "?" + newSort)
      this.$router.push({path: window.location.search, query: {sort_by: newSort}})
			this.$store.commit('sortBy', newSort)
    },
    checkedGenres(genresArr) {
      const genres = genresArr.join(',')
      //this.$router.push("/with_genres" + "=" + genres)
      this.$router.push({path: window.location.search, query: {with_genres: genres}})
      this.$store.commit('changeGenres', "&with_genres=" + genres)
    }
	}
}
</script>

<style lang="scss" scoped>
	.genres {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
		grid-column-gap: 1.5rem;
		grid-row-gap: 2rem;
		&-item span {
			padding-left: 25px;
		}
	}

	.sort {
		&-title {
			font-size: 1.5rem;
			margin: 20px 0 20px 20px;
		}
		&-wrapper {
			display: grid;
			grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
			grid-column-gap: 1.5rem;
			grid-row-gap: 2rem;
		}
	}
</style>
  