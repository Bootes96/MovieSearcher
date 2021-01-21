<template>
  <div class="navigation__container">
    <!-- Dropdown Structure -->
    <ul id="dropdown1" class="dropdown-content">
      <li>
        <MovieSorted />
      </li>
    </ul>
    <nav class="navigation green darken-2" >
      <div>
        <ul class="navigation__list green darken-2">
          <li class="navigation__item green darken-2" >
            <router-link to="/" class="navigation__logo"> <span v-on:click="startPage">MovieSearcher</span></router-link>
          </li>
          <li class="navigation__item">
            <a class='dropdown-trigger nav-link' href='#' data-target='dropdown1' ref="dropdown">Options</a>
          </li>
          <router-link
              v-for="link in links"
              :key="link.url"
              tag='li'
              class="navigation__item"
              :to="link.url"
            ><a class="nav-link">{{link.title}}</a>
          </router-link>
          <li class="navigation__item">
            <Search :clearForm='trigger'/>
          </li>
        </ul>
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
        dropdown: null,
        trigger: 0
      }
    },

    mounted() {
      this.dropdown = M.Dropdown.init(this.$refs.dropdown, {
        closeOnClick: false
      })
    },

    methods: {
      startPage() {
          console.log('hey');
          this.trigger += 1
          this.$store.commit('sortBy', 'popularity.desc')
          this.$store.commit('changeGenres', '')
          this.$store.commit('changePage', 1)
          this.$store.dispatch('fetchMovies')

          //removing active class 
          const el = document.querySelector('.cyan')
          el.classList.remove("cyan")

          //adding active class to the first page
          const pagination = document.querySelector('.pagination')
          pagination.firstElementChild.nextElementSibling.classList.add('cyan', 'lighten-2')
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

<style lang="scss">
  .nav {
    &-link {
      font-size: 1.5rem;
      padding: 0 40px;
    }
  }
  .dropdown-content {
    top: -65px;
    width: 500px !important;
  }

  .navigation {
    &__list {
      margin: 0 2rem;
      display: grid;
      grid-template-columns: 1fr 2fr 2fr 2fr;
      grid-column-gap: 1.5rem;
    }
    &__item {
      text-align: center;
    }
    &__logo {
      font-size: 2rem;
    }
  }

  @media (max-width: 761px) {
  .navigation {
    width: 100%;
    height: 100%;
    &__container {
      max-width: 320px;
      margin: 0 auto;
    }
    &__list {
      display: flex;
      flex-direction: column;
      margin: 0 2rem;
    } 
    &__item {
      width: 100%;
    }
  }

  .dropdown-content {
    position: relative;
    width: 320px !important;
    left: 0 !important;
    height: auto;
    margin-left: -28px;
  }
}
</style>