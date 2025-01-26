// axios.post("http://localhost:5000/api/users/register", { name, email, cnic, password });
import axios from 'axios'

    const apiInstance = axios.create(
     "http://localhost:5000/api/users/register", { name, email, cnic, password }
    )
 
    export default apiInstance