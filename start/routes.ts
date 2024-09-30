/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
const StatesController = () => import('#controllers/states_controller')


router.get('/', async () => {
  return {
    hello: 'world',
  }
})

router.get('/states', [StatesController, 'index'])