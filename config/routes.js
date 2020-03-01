/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': { view: 'pages/test' },
  'GET /test/result': 'PersonController.result',
  'POST /test/result': 'PersonController.result',
  'GET /test/result/songshu': 'PersonController.songshu',
  'GET /test/result/shudiao': 'PersonController.shudiao',
  'GET /test/result/zonglv': 'PersonController.zonglv',
  'GET /test/result/meigui': 'PersonController.meigui',
  'GET /test/result/shumei': 'PersonController.shumei',
  'GET /test/result/shusong': 'PersonController.shusong',
  'GET /test/result/shuzong': 'PersonController.shuzong',
  'GET /test/result/meisong': 'PersonController.meisong',
  'GET /test/result/meizong': 'PersonController.meizong',
  'GET /test/result/songzong': 'PersonController.songzong',



  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/


};
