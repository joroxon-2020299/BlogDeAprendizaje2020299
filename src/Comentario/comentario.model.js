import mongoose from 'mongoose'
const { Schema, model } = mongoose

const comentarioSchema = new Schema(
    {
        nombre: {
            type: String,
            required: true,
            trim: true,
        },
        contenido: {
            type: String,
            required: true,
            trim: true,
        },
        publicacion: {
            type: Schema.Types.ObjectId,
            ref: "Publicacion",
            required: true,
        },
    },
    {
        timestamps: true,
    }
)

export default model("Comentario", comentarioSchema)
