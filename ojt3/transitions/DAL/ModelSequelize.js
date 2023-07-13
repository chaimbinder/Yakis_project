const { Sequelize, QueryTypes } = require('sequelize');

const sequelize = new Sequelize(
  process.env.ENV_DB,
  process.env.ENV_USER,
  process.env.ENV_PASSWORD,
  {
    dialect: 'postgres',
    host: process.env.DB_HOST
  }
);

async function getCurrentTime() {
  try {
    const currentTime = await sequelize.query('SELECT NOW()', {
      type: QueryTypes.SELECT
    });
    console.log('The db is a connected Current time:', currentTime[0].now);
    let time =currentTime[0].now
    return time
  } catch (error) {
    console.error('Error retrieving current time:', error);
  }
}
module.exports = {getCurrentTime};
