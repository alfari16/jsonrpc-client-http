# Json-RPC HTTP
Send data trough RPC using HTTP <br> Based on Axios

## Installation

> npm i --save json-rpc-http

## Basic usage
```
import json-rpc-http from 'json-rpc-http'

json-rpc-http.post('https://rpc.domain.com', ({method:'getRequests'}))
```

## Custom Query
```
import json-rpc-http,{query} from 'json-rpc-http'

const query = {
    method : 'getRequests', 
    id : new Date().getTime(), //default
    jsonrpc : "2.0",           //default
    params : {                 // default will be {}
        requestId : 'blablabla',
        limit : 10,
        offset : 0
    }
}

json-rpc-http.post('https://rpc.domain.com', query)
```

## Adding headers
```
import json-rpc-http,{query} from 'json-rpc-http'

const query = {
    method : 'getRequests', 
    id : new Date().getTime(), //default
    jsonrpc : "2.0",           //default
    params : {                 // default will be {}
        requestId : 'blablabla',
        limit : 10,
        offset : 0
    }
}

//config request
const config = {
    headers:{
        Authorization: 'Bearer blablaTOKENblablabla'
    }
}

json-rpc-http.post('https://rpc.domain.com', query, config)
```


## Request method aliases
> You can use this plugin just like regular [axios](https://github.com/axios/axios) http request
For convenience aliases have been provided for all supported request methods.

json-rpc-http.request(config)
json-rpc-http.get(url[, config])
json-rpc-http.delete(url[, config])
json-rpc-http.head(url[, config])
json-rpc-http.options(url[, config])
json-rpc-http.post(url[, data[, config]])
json-rpc-http.put(url[, data[, config]])
json-rpc-http.patch(url[, data[, config]])