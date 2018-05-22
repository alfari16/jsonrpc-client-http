import axios from "axios";
import _ from 'lodash'

const rpc = axios.create({});
rpc.defaults = _.cloneDeep(axios.defaults)
export const config = ({ id, method, params = {} }) => {
    return {
        id: id || new Date().getTime(),
        jsonrpc: "2.0",
        method,
        params
    };
};

export default rpc;
