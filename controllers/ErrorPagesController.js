class ErrorPagesController{
    E404(){
        return JSON.stringify({
            "h1": "Error 404",
            "content": "This page not found"
        });
    }
}

module.exports = { ErrorPagesController };