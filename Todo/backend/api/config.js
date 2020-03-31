module.exports = {
    PORT : 3000 || process.env.PORT,
    MONGODB_URI: "mongodb://localhost:27017/TodoApp?retryWrites=true",
    MONGODB_PORT : "27017",
    JWT_SECRET: "JWT_SECRET",
    JWT_EXPIRES : 60*60
}