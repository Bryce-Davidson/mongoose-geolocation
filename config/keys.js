MONGO_DATABASE = {
  USER: '',
  PASSWORD: '',
  NAME: ''
}

module.exports = {
  MONGO_DATABASE,
  MONGOURI: `mongodb://${MONGO_DATABASE.USER}:${MONGO_DATABASE.PASSWORD}@URI_GOES_HERE/${MONGO_DATABASE.NAME}`
}
