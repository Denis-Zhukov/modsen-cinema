export default () => ({
    host: process.env.API_HOST,
    port: process.env.API_PORT,

    typeorm_connection: process.env.TYPEORM_CONNECTION,
    typeorm_username: process.env.TYPEORM_USERNAME,
    typeorm_password: process.env.TYPEORM_PASSWORD,
    typeorm_database: process.env.TYPEORM_DATABASE,
    typeorm_host: process.env.TYPEORM_HOST,
    typeorm_port: process.env.TYPEORM_PORT,

    secret: process.env.SECRET,
    expire_jwt: process.env.EXPIRE_JWT,
});
