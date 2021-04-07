import Post from "../models/Post.js";
import PostService from "../service/PostService.js";

class PostController {
    async create(req, res) {
        try {
            const post = await PostService.create(req.body, req.files.picture);
            return res.status(200).json({
                "status": 200,
                "post": post
            })
        } catch (e) {
            return res.status(500).json({
                "status": 500,
                "error_message": e.message
            })
        }
    }

    async getAll(req, res) {
        try {
            const posts = await PostService.getAll()
            return res.status(200).json({
                "status": 200,
                "posts": posts
            })
        } catch (e) {
            return res.status(500).json({
                "status": 500,
                "error_message": e.message
            })
        }
    }

    async getOne(req, res) {
        try {
            const post = await PostService.getOne(req.params.id)
            return res.status(200).json({
                'status': 200,
                'post': post
            })

        } catch (e) {
            return res.status(500).json({
                "status": 500,
                "error_message": e
            })
        }
    }

    async update(req, res) {
        try {

            const updatedPost = await PostService.updatePost(req.body)
            return res.status(200).json({
                'status': 200,
                'post': updatedPost
            })
        } catch (e) {
            res.status(500).json({
                "status": 500,
                "error_message": e.message
            })
        }
    }

    async delete(req, res) {
        try {
            const post = await PostService.delete(req.params.id)
            return res.status(200).json({
                'status': 200,
                message: 'This post deleted'
            })
        } catch (e) {
            res.status(500).json({
                "status": 500,
                "error_message": e.message
            })
        }
    }
}

export default new PostController();