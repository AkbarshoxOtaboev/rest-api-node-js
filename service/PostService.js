import Post from "../models/Post.js";
import FileService from "./FileService.js";

class PostService {
    create(post, picture) {
        const fileName = FileService.fileUpload(picture)
        return Post.create({...post, picture:fileName})
    }

    getOne(id) {
        if (!id) {
            throw  new Error('Id not found')
        }
        return Post.findById(id);
    }

    getAll() {
        return Post.find();
    }

    updatePost(post) {
        if (!post._id) {
            throw new Error('Id not found')
        }
        return Post.findByIdAndUpdate(post._id, post, {new: true})

    }

    delete(id) {
        if (!id) {
            throw new Error('Id not found')
        }
        return Post.findByIdAndDelete(id);
    }
}

export default new PostService();