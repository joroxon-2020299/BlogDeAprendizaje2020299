import {Router} from 'express'
import {
  createPost,
  getPosts,
  getPostById,
  updatePost,
  deletePost,
} from './publicacion.controller.js'

const api = Router()

api.post('/create', createPost) // Crear publicación

api.get('/', getPosts) // Obtener todas las publicaciones

api.get('/:id', getPostById) // Obtener publicación por ID

api.put('/update/:id', updatePost) // Actualizar publicación

api.delete('/delete/:id', deletePost) // Eliminar publicación

export default api
