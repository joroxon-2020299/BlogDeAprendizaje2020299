import {Router} from 'express'
import {
  createComment,
  getCommentByPost,
  deleteComment,
} from "./comentario.controller.js"

const api = Router()

// Crear un comentario
api.post('/create', createComment) 

// Obtener comentarios de una publicación
api.get('/:id', getCommentByPost)

// Eliminar un comentario
api.delete('/delete/:id', deleteComment)

export default api
