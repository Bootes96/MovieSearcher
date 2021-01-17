export const func = {
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
}