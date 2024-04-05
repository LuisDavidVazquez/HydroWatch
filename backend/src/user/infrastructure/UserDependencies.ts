import { CreateUserUseCase } from "../application/CreateUserUseCase";
import { GetUserByIdUseCase } from "../application/GetUserByIdUseCase";
import { CreateUserController } from "./controllers/CreateUserController";
import { GetUserByIdController } from "./controllers/GetUserByIdController";
import { EncryptHelper } from "./helpers/EncryptHelper";
import { MongodbRepository } from "./repositories/MongodbRepository";

const mongodbRepository = new MongodbRepository ()

const encryptHelper = new EncryptHelper();

const createUserUseCase = new CreateUserUseCase (
    mongodbRepository,
    encryptHelper
)

export const createUserController = new CreateUserController (
    createUserUseCase
)

const getUserByIdUseCase = new GetUserByIdUseCase(
    mongodbRepository
)

export const getUserByIdController = new GetUserByIdController(
    getUserByIdUseCase
)

