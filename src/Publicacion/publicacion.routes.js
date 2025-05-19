import {Router} from 'express'
import {
  createPost,
  getPosts,
  getPostById,
  updatePost,
  deletePost,
} from './publicacion.controller.js'

const api = Router()

api.post('/posts', createPost) // Crear publicación

api.get('/posts', getPosts) // Obtener todas las publicaciones

api.get('/posts/:id', getPostById) // Obtener publicación por ID

api.put('/posts/:id', updatePost) // Actualizar publicación

api.delete('/posts/:id', deletePost) // Eliminar publicación

export default api
