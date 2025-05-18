import mongoose from 'mongoose'
const { Schema, model } = mongoose

const publicacionSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            required: true, // El contenido es obligatorio
        },
        course: {
            type: String,
            enum: ['Taller', 'Tecnologia', 'Practica Supervisada'], // Definimos los 3 cursos posibles
            required: true,
        }
    },
    { 
        timestamps: true // Agrega createdAt y updatedAt automáticamente
    } 
)

export default model("Post", publicacionSchema)