class ProductsController{
    constructor(){
        this.products = [];
        for (let index = 1; index <= 100; index++) {
            this.products.push({
                id: index,
                name: `Product ${index}`
            })
        }
    }
    get(){
        return JSON.stringify(this.products);
    }

    getOne(id){
        return JSON.stringify(this.products.find(el => el.id === id) || {});
    }
}

module.exports = { ProductsController };