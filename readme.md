# Node JS RestAPI Server from scratch(no express)

# Server launch
```
node index.js
```

# Usage

By default server will start on ``localhost`` addres and ``3030`` port

# Endpoints

## Main page
Request Method: GET

Request URL: ``/``  

Response code: 200

Response Body
```
{
    "h1": "This is main page"
}
```

## Products list
Request Method: GET

Request URL: ``/products`` 

Response code: 200

Response Body
```
[
    {
        "id": 1,
        "name": "Product 1"
    },
    {
        "id": 2,
        "name": "Product 2"
    },
    ...
]
```

## Error page 404
If unexisting URL accessed, srver will return

Response code: 404

Response Body
```
{
    "h1": "Error 404",
    "content": "This page not found"
}
```