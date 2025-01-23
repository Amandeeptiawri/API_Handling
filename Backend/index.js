import express from 'express';

const app = express();

const port = process.env.PORT || 3000;


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);

});

app.get('/api/products', (req, res) => {
    const products = [
        {
            id: 1,
            name: 'table',
            price: 100,

        },
        {
            id: 2,
            name: 'chair',
            price: 200,

        },
        {
            id: 1,
            name: 'car',
            price: 300,

        }


    ]
    
    if(req.query.search) {
        const filterProducts = products.filter(product => product.name.includes(req.query.search))
        res.send(filterProducts);
        return;
    }

    setTimeout(() => {

        res.send(products);

    }, 3000)


})


