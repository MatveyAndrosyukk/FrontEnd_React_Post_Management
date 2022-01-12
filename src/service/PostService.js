import axios from "axios";

const EMPLOYEE_API_BASE_URL = "https://jsonplaceholder.typicode.com/posts";

class PostService{
    getPosts(){
        return axios.get(EMPLOYEE_API_BASE_URL);
    }
}

export default new PostService()