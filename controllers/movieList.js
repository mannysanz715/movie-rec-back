import fetch from 'node-fetch';
const apiKey = process.env.API_KEY

async function getMovieList(req, res){
  try {
    const genreKey = req.params.id
    console.log(genreKey)
    let listData = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${genreKey}`)
    listData = await listData.json(listData)
    return await res.status(200).json(listData)
  } catch (error) {
    console.log(error)
    return res.status(500).json(error)
  }
}

export{
  getMovieList
}