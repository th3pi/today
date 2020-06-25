module.exports = {
    DB: process.env.MONGO_URL ? process.env.MONGO_URL : 'mongodb://192.168.1.15:27017/today-tasks',
    APP_PORT: 8181,
}