<template>
  <div>
    <!-- Dropdown Structure -->
    <ul id="dropdown1" class="dropdown-content">
      <li>
        <MovieSorted />
      </li>
    </ul>
    <nav class="green darken-2" >
      <div class="nav-wrapper">
      <div class="row">
        <a @click.prevent="startPage" class="brand-logo col s3">MovieSearcher</a>
        <ul class="nav-list col s9">
          <li class="nav-el">
            <a class='dropdown-trigger nav-link' href='#' data-target='dropdown1' ref="dropdown">Options</a>
          </li>
          <router-link
              v-for="link in links"
              :key="link.url"
              tag='li'
              class="nav-el"
              :to="link.url"
            ><a class="nav-link">{{link.title}}</a>
          </router-link>
          <li class="nav-el">
            <Search />
          </li>
        </ul>
      </div>
    </div>
    </nav>
  </div>
</template>

<script>
  import MovieSorted from '@/components/MovieSorted'
  import Search from '@/components/Search'
  export default {
    name: 'Navbar',

    data() {
      return {
        links: [
          {title: 'Favorites', url: '/favorites'}
        ],
        dropdown: null
      }
    },

    mounted() {
      this.dropdown = M.Dropdown.init(this.$refs.dropdown, {
        closeOnClick: false
      })
    },

    methods: {
      startPage() {
        this.$store.commit('sortBy', 'popularity.desc')
        this.$store.commit('changeGenres', '')
        this.$store.commit('changePage', 1)
        this.$store.dispatch('fetchMovies')
        this.$router.push('/')
      }
    },

    beforeDestroy() {
      //Избавляемся от утечек памяти
      if (this.dropdown && this.dropdown.destroy) {
        this.dropdown.destroy();
      }
    },

    components: {
      MovieSorted,
      Search
    }
  }
</script>  

<style lang="scss" scoped>
  .brand-logo {
    display: block;
  }
  .row .col {
    float: right;
  }
  .nav {
    &-el{
      margin-right: 40px;
      &:last-child {
        margin-left: 100px;
        width: 400px;
      }
    }
    &-link {
      font-size: 1.5rem;
      padding: 0 40px;
    }
  }
  .dropdown-content {
    top: -65px;
    width: 500px !important;
  }
</style>