import express from "express";

import { getAllUser, register, login } from '../controller/UserController'

const route = express.Router()

route.get('/', getAllUser)
route.post('/', register)
route.post('/', login)

export default route