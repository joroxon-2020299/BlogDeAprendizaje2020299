import Comentario from "./comentario.model.js"
import Publicacion from "../Publicacion/publicacion.model.js"

// Crear un comentario
export const createComment = async (req, res) => {
    try {
        const { nombre, contenido } = req.body
        const { publicacionId } = req.params

        // Verificar que la publicación exista
        const publicacion = await Publicacion.findById(publicacionId)
        if (!publicacion) {
            return res.status(404).json(
                { message: "Publicación no encontrada" }
            )
        }

        const nuevoComentario = new Comentario(
            {
                nombre,
                contenido,
                publicacion: publicacionId
            }
        )

        await nuevoComentario.save()
        return res.status(201).json(nuevoComentario)

    } catch (error) {
        return res.status(500).json(
            { message: "Error al crear el comentario", error }
        )
    }
}

// Obtener comentarios de una publicación
export const getCommentByPost = async (req, res) => {
    try {
        const { publicacionId } = req.params

        const comentarios = await Comentario.find(
            { publicacion: publicacionId }
        ).sort(
            { createdAt: -1 }
        )

        return res.status(200).json(comentarios)

    } catch (error) {
        return res.status(500).json(
            { message: "Error al obtener los comentarios", error }
        )
    }
}

// Eliminar comentario (opcional)
export const deleteComment = async (req, res) => {
    try {
        const { id } = req.params

        const comentario = await Comentario.findByIdAndDelete(id)
        if (!comentario) {
            return res.status(404).json(
                { message: "Comentario no encontrado" }
            )
        }

        return res.status(200).json(
            { message: "Comentario eliminado correctamente" }
        )

    } catch (error) {
        return res.status(500).json(
            { message: "Error al eliminar el comentario", error }
        )
    }
}
