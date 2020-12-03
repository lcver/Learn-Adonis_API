'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

Route.group(() => {
  /**
   * Show data students
   */
  Route.get('students', 'StudentController.index').middleware(['auth:jwt'])
  Route.get('students/:id', 'StudentController.show').middleware(['auth:jwt'])

  /**
   * Create data students
   */
  Route.post('students/store', 'StudentController.store').middleware(['auth:jwt'])

  /**
   * Update data students
   */
  Route.put('students/:id', 'StudentController.update').middleware(['auth:jwt'])
  
  /**
   * Delete data student
   */
  Route.delete('students/:id', 'StudentController.delete').middleware(['auth:jwt'])
}).prefix('api/v1')

Route.group(() => {
  Route.post('login', 'AuthController.postLoginJwt').as('loginJwt')
}).prefix('api/auth')