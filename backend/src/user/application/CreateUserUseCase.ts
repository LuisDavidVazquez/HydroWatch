import { User } from "../domain/User";
import { UserRepository } from "../domain/UserRepository";
import { EncryptHelper } from "../infrastructure/helpers/EncryptHelper";

export class CreateUserUseCase {
    constructor(
        readonly userRepository: UserRepository,
        readonly encryptHelper : EncryptHelper
    ) { }

    async run(
        email: string,
        password: string,
        data: {
            name: string,
            lastname: string,
            role: string
        }
    ): Promise<User | null> {
        try {
            const encryptedPassword = this.encryptHelper.encryptPassword(password)
            const user = new User(email, encryptedPassword, data)
            const result = await this.userRepository.createUser(user)
            console.log(result)
            return result
        } catch (error) {
            console.log("Error al guardar usuario\n", error)
            return null
        }
    }

}