import express from "express";
import { createUserController, getUserByIdController } from "./UserDependencies";

export const userRouter = express.Router()

userRouter.post('/',createUserController.run.bind(createUserController))

userRouter.get('/:id',getUserByIdController.run.bind(getUserByIdController))