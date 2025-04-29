import axios from "axios";

export const fetchUser = async () => {
    const resp = await axios.get('https://dummyjson.com/users');
    return resp.data.users;
};