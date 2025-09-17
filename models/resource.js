import mongoose from "mongoose";

const ResourceSchema = new mongoose.Schema(
    {
        titel: String,
        type: String,
        description: String,
        authorId: String,
        createdAt: Date,
        updatedAt: Date
    },
    { versionKey: false }
);

export default mongoose-model("Resource", ResourceSchema, "resources");