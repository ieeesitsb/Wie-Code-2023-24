import axios from 'axios'

const axiosInstance = axios.create(
    {
        // baseURL:"http://localhost:4000"
        baseURL:"http://ec2-3-7-46-71.ap-south-1.compute.amazonaws.com:4000/"
    }
);
export default axiosInstance