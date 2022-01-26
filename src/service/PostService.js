import axios from "axios";

const EMPLOYEE_API_BASE_URL = "https://jsonplaceholder.typicode.com/posts";

export  default class PostService{


    static async getAllPosts(limit = 10, page = 1){
            const response = await axios.get(EMPLOYEE_API_BASE_URL, {
                params: {
                    _limit:limit,
                    _page: page
                }
            })
            return response
    }

    static async getPostById(id){
        const response = await axios.get(EMPLOYEE_API_BASE_URL + "/" + id)
        return response
    }

    static async getCommentsByPostId(id){
        const response = await axios.get(EMPLOYEE_API_BASE_URL + "/" + id + "/comments")
        return response
    }
}