import fetch from 'node-fetch';
const apiKey = process.env.API_KEY


async function getMovieList(req, res){
  try {
    const genreKey = req.params.id
    const apiURLList = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&page=7&with_original_language=en&with_genres=${genreKey}&vote_average.gte=7`

    let listData = await fetch(apiURLList)
    listData = await listData.json(listData)

    const movie = selectRandomMovie(listData)

    return await res.status(200).json(movie)
  } catch (error) {
    return res.status(500).json(error)
  }
}

function selectRandomMovie(movieList){
  const randomNum = Math.floor(Math.random() * (movieList.results.length - 1))
  console.log(movieList.results.length)
  return movieList.results[randomNum]
}


export{
  getMovieList
}