import axios from "axios";

const EMPLOYEE_API_BASE_URL = "https://jsonplaceholder.typicode.com/posts";

export  default class PostService{


    static async getAllPosts(){
            const response = await axios.get(EMPLOYEE_API_BASE_URL)
            return response.data
    }
}