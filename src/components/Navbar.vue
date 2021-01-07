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
        <router-link to="/" href="#!" class="brand-logo col s3">Rick and Morty</router-link>
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
            <form class="search-form">
              <div class="input-field">
                <input id="search" type="search" required>
                <label class="label-icon" for="search"><i class="material-icons">search</i></label>
                <i class="material-icons">close</i>
              </div>
            </form>
          </li>
        </ul>
      </div>
    </div>
    </nav>
  </div>
</template>

<script>
  import MovieSorted from '@/components/MovieSorted'
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

    beforeDestroy() {
      //Избавляемся от утечек памяти
      if (this.dropdown && this.dropdown.destroy) {
        this.dropdown.destroy();
      }
    },

    components: {
      MovieSorted
    }
  }
</script>  

<style lang="scss" scoped>
  .brand-logo {
    display: block;
  }
  .nav {
    &-list {
      float: right;
    }
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
  .input-field {
    height: 64px;
  }

  #search {
    height: 100%;
  }

  .dropdown-content {
    top: -65px;
    width: 500px !important;
  }
</style>