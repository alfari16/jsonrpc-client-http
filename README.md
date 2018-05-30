# Json-RPC Client HTTP
Send data through RPC using HTTP based on Axios <br>
Built for <b>Client Side</b>

## Installation

> npm i --save jsonrpc-client-http

## Basic usage
```js
import rpc from 'jsonrpc-client-http'

rpc.post('https://rpc.domain.com', ({method:'getRequests'}))
```

## Custom Query
```js
import rpc,{query} from 'jsonrpc-client-http'

const query = {
    method : 'getRequests', 
    id : new Date().getTime(), //default
    jsonrpc : "2.0",           //default
    params : {                 //default will be {}
        requestId : 'blablabla',
        limit : 10,
        offset : 0
    }
}

rpc.post('https://rpc.domain.com', query)
```

## Adding headers
```js
import rpc,{query} from 'jsonrpc-client-http'

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

rpc.post('https://rpc.domain.com', query, config)
```


## Request method aliases
> You can use this plugin just like regular [axios](https://github.com/axios/axios) http request
For convenience aliases have been provided for all supported request methods.

##### rpc.request(config)
##### rpc.get(url[, config])
##### rpc.delete(url[, config])
##### rpc.head(url[, config])
##### rpc.options(url[, config])
##### rpc.post(url[, data[, config]])
##### rpc.put(url[, data[, config]])
##### rpc.patch(url[, data[, config]])
