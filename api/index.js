//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const { Sequelize } = require('sequelize')
const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const axios = require('axios');
const { Country } = require('./src/db.js');

// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  axios("https://restcountries.com/v3/all")
  .then(response => {
    response.data.forEach(c => {
      Country.create({
        id: c.cca3,
        name: c.name.common,
        image: c.flags[0],
        continent: c.continents[0],
        capital: c.capital ? c.capital[0] : "No se encontro la capital",
        subregion: c.subregion ? c.subregion : "No se encontro la subregion",
        area: c.area ? c.area : "No se encontro el area",
        population: c.population
      });
    })
  })



  server.listen(3001, () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  });
});
