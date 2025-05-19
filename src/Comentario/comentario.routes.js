import {Router} from 'express'
import {
  createComment,
  getCommentByPost,
  deleteComment,
} from "./comentario.controller.js"

const api = Router()

// Crear un comentario
api.post('/comments', createComment) 

// Obtener comentarios de una publicación
api.get('/comments/:id', getCommentByPost)

// Eliminar un comentario
api.delete('/comments/delete/:id', deleteComment)

export default api
