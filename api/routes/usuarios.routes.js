import {Router} from 'express'
import * as usuariosControllers from './usuarios.controller'

const router = Router();

router.post('/user',usuariosControllers.createUser)
