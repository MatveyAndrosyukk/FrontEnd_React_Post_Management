import axios from "axios";

const POST_API_BASE_URL = "http://localhost:8080/posts";

export default class PostService{
    static async getPosts(limit = 10, page = 1){
        const response = await axios.get(POST_API_BASE_URL, {
            params : {
                _limit : limit,
                _page : page
            }
        })
        return response
    }

    static async getPostById(id){
        const response = await axios.get(POST_API_BASE_URL + "/" + id)
        return response
    }

    static async getCommentsByPostId(id){
        const response = await axios.get(POST_API_BASE_URL + "/" + id + "/comments")
        return response
    }

    static async addPost(post){
        const response = await axios.post(POST_API_BASE_URL, post)
        return response
    }

    static async addCommentToPost(comment, id){
        const response = await axios.put(POST_API_BASE_URL + "/" + id + "/comments", comment)
        return response
    }

    static async deletePostById(id){
        const response = await axios.delete(POST_API_BASE_URL + "/" + id)
        return response
    }

    static async deleteCommentByPostId(postId, commentId){
        const response = await axios.put(POST_API_BASE_URL + "/" + postId + "/comments/delete/" + commentId)
        return response
    }
}
