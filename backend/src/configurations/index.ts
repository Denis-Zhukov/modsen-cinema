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
    expire_access_jwt: process.env.EXPIRE_ACCESS_JWT,
    expire_refresh_jwt: process.env.EXPIRE_REFRESH_JWT,

    google_client_id: process.env.GOOGLE_CLIENT_ID,
    google_secret: process.env.GOOGLE_SECRET,

    github_client_id: process.env.GITHUB_CLIENT_ID,
    github_secret: process.env.GITHUB_SECRET,

    facebook_client_id: process.env.FACEBOOK_CLIENT_ID,
    facebook_secret: process.env.FACEBOOK_SECRET,
});
