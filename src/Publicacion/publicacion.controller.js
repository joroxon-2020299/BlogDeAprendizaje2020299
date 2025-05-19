import Publicacion from './publicacion.model.js'

// Crear una nueva publicación
export const createPost = async (req, res) => {
    try {
        const { title, content, course } = req.body

        // Crear la nueva publicación
        const newPost = new Publicacion(
            { 
                title, 
                content, 
                course 
            }
        )

        // Guardar en la base de datos
        await newPost.save()

        // Responder con la publicación creada
        return res.status(201).json(newPost)
        
    } catch (error) {
        return res.status(500).json(
            { message: "Error al crear la publicación", error }
        )
    }
}

// Obtener todas las publicaciones
export const getPosts = async (req, res) => {
    try {
        const posts = await Publicacion.find().sort({ createdAt: -1 }) // Ordenamos por fecha de creación
        return res.status(200).json(posts)
    } catch (error) {
        return res.status(500).json(
            { message: "Error al obtener las publicaciones", error }
        )
    }
}

// Obtener una publicación por su ID
export const getPostById = async (req, res) => {
    try {
        const post = await Publicacion.findById(req.params.id)

        if (!post) {
        return res.status(404).json({ message: "Publicación no encontrada" })
        }

        return res.status(200).json(post)
    } catch (error) {
        return res.status(500).json(
            { message: "Error al obtener la publicación", error }
        )
    }
}

// Actualizar una publicación
export const updatePost = async (req, res) => {
    try {
        const { title, content, course } = req.body

        const updatedPost = await Publicacion.findByIdAndUpdate(
            req.params.id,
            { title, content, course },
            { new: true } // Devuelve la publicación actualizada
        )

        if (!updatedPost) {
        return res.status(404).json({ message: "Publicación no encontrada" })
        }

        return res.status(200).json(updatedPost)
    } catch (error) {
        return res.status(500).json(
            { message: "Error al actualizar la publicación", error }
        )
    }
}

// Eliminar una publicación
export const deletePost = async (req, res) => {
    try {
        const deletedPost = await Publicacion.findByIdAndDelete(req.params.id)

        if (!deletedPost) {
        return res.status(404).json({ message: "Publicación no encontrada" })
        }

        return res.status(200).json({ message: "Publicación eliminada con éxito" })
    } catch (error) {
        return res.status(500).json(
            { message: "Error al eliminar la publicación", error }
        )
    }
}