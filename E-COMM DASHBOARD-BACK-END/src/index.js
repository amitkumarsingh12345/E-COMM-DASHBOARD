const express = require('express');
const model = require('./database/schema');
const Product = require('./database/addproduct');
const image = require('./database/image');
const app = new express();
const cors = require('cors');
app.use(cors());
app.use(express.json());

// ------------------Get disks(SignUP) Api-------------------------------

app.get('/disks',async(req, res) => {
    let data = await model.find();
    res.send(data);
});

// ------------------Post disks(SignUp) Api-------------------------------

app.post('/disks', async(req, res) => {
    const {UserName, Password,Email} = req.body;
    const data = await new model({
        UserName,
        Password,
        Email
     }); 
    let savedata = await data.save();
    res.send(savedata);

});

// ------------------Login Api-------------------------------

app.post('/login', async(req, res) => {
    if(req.body.Email && req.body.Password) {
        const data = await model.findOne(req.body).select("-Password");
        data? res.send(data): res.send({"Massage": "Recard Not Found"});
    } else {
        res.send({"Massage": req.body.Email?"Plese Enter Password": "Plese Enter Email" });
    }
});

// ------------------Post Product Api-------------------------------

app.post('/products', async(req, res) => {
    const {Name, Price, Category, Company, UserId} = req.body;
    const data = await new Product({
        Name,
        Price,
        Category,
        UserId,
        Company,
     }); 
    let savedata = await data.save();
    res.send(savedata);
});

// ------------------Get or Find Product Api-------------------------------

app.get('/products',async(req, res) => {
    let data = await Product.find();
    if( data.length> 0) {
        res.send(data);
    } else {
        res.send({Result: "Recard Not Found"});
    }
});

// ------------------Delete Product Api-------------------------------

app.delete('/products/:id', async(req, res) => {
    const id = req.params.id;
    const data = await Product.deleteOne({_id: id});
    res.send(data);
});

// ------------------Update Product Api-------------------------------

app.put('/products/:id', async(req, res) => {
    const id = req.params.id;
    const data = await Product.updateOne(
        {_id: id},
        {
           $set: {
              Name: req.body.Name,
              Price: req.body.Price,
              Category: req.body.Category,
              Company: req.body.Company,
           }
        }   
    );
    res.send(data);
});

// ------------------Post Image Api-------------------------------

app.post('/image',async(req, res) => {
    const {Name, Category, Company, ImageName} = req.body;
    const data = await new image({
        Name,
        Category,
        Company,
        ImageName
     }); 
    let savedata = await data.save();
    res.send(savedata)
});

// ------------------Get Image Api-------------------------------

app.get('/image', async(req, res) => {
    const data = await image.find();
    res.send(data);
    console.log(data);
})

// ------------------Server-------------------------------
app.listen(10101, () => console.log("Server Created"));