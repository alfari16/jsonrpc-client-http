# Json-RPC Client HTTP
Send data trough RPC using HTTP based on Axios <br>
Built for <b>Client Side<b>

## Installation

> npm i --save jsonrpc-client-http

## Basic usage
```
import jsonrpc-client-http from 'jsonrpc-client-http'

jsonrpc-client-http.post('https://rpc.domain.com', ({method:'getRequests'}))
```

## Custom Query
```
import jsonrpc-client-http,{query} from 'jsonrpc-client-http'

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

jsonrpc-client-http.post('https://rpc.domain.com', query)
```

## Adding headers
```
import jsonrpc-client-http,{query} from 'jsonrpc-client-http'

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

jsonrpc-client-http.post('https://rpc.domain.com', query, config)
```


## Request method aliases
> You can use this plugin just like regular [axios](https://github.com/axios/axios) http request
For convenience aliases have been provided for all supported request methods.

jsonrpc-client-http.request(config)
jsonrpc-client-http.get(url[, config])
jsonrpc-client-http.delete(url[, config])
jsonrpc-client-http.head(url[, config])
jsonrpc-client-http.options(url[, config])
jsonrpc-client-http.post(url[, data[, config]])
jsonrpc-client-http.put(url[, data[, config]])
jsonrpc-client-http.patch(url[, data[, config]])