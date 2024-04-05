export interface IEncryptService {

    encryptPassword (password : string) : string
    authPassword (password : string, encryptedPassword : string ) : boolean

}