import { Router } from 'express'
import * as movieListCtrl from '../controllers/movieList.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

/*---------- Public Routes ----------*/


/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)

router.get('/:id', checkAuth, movieListCtrl.getMovieList)

export { router }
