class MainController{
    index(){
        return JSON.stringify({
            "h1": "This is main page"
        });
    }
}

module.exports = { MainController };