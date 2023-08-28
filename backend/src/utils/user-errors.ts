export enum UserErrors {
    USER_EXIST = 'User with this email already exists',
    USER_NOT_EXISTS = "User with this email doesn't exist",
    WRONG_AUTH = 'Wrong email or password',
    WRONG_FILES_TYPE = 'Unexpected file type',
    NO_REQUIRED_FILES = 'Missing files',
    NO_EMAIL = 'Email not specified',
    WRONG_REFRESH_TOKEN = 'Wrong refresh token',
    NO_REFRESH_TOKEN = 'Token not passed',
    SCHEDULE_NOT_EXISTS = 'No such schedule',
    ALREADY_SUBSCRIBED = `You're already subscribed`,
}
