export class AuthTokenError extends Error{
    constructor(){
        super('Error whith authentication token.')
    }
}