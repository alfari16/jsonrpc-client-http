import axios from "axios";

const rpc = axios.create({});
export const query = ({ id = new Date().getTime(), method = null, jsonrpc = "2.0", params = {} }) => {
    return {
        id,
        jsonrpc,
        method,
        params
    };
};

export default rpc;
