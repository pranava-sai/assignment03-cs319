var express = require("express");
var cors = require("cors");
var app = express();
var fs = require("fs");
var bodyParser = require("body-parser");
const { MongoClient } = require("mongodb")
const url = "mongodb://127.0.0.1:27017";
const dbName = "team76";
const client = new MongoClient(url);
const db = client.db(dbName)

// const authRoutes = require('./authRoutes');
// app.use('/auth', authRoutes);

app.use(cors());
app.use(bodyParser.json());

const port = "8081"
const host = "localhost";

app.listen(port, () => {
    console.log("App listening at http://%s:%s", host, port);
})

app.get("/EnglishMovies", async (req, res) => {
    await client.connect();
    console.log("Node connected successfully to GET MongoDB");
    const query = {};
    const results = await db
        .collection("english")
        .find(query)
        .limit(100)
        .toArray();
    console.log(results);
    res.status(200);
    res.send(results);
});

app.get("/TeluguMovies", async (req, res) => {
    await client.connect();
    console.log("Node connected successfully to GET MongoDB");
    const query = {};
    const results = await db
        .collection("telugu")
        .find(query)
        .limit(100)
        .toArray();
    console.log(results);
    res.status(200);
    res.send(results);
});

app.get("/HindiMovies", async (req, res) => {
    await client.connect();
    console.log("Node connected successfully to GET MongoDB");
    const query = {};
    const results = await db
        .collection("hindi")
        .find(query)
        .limit(100)
        .toArray();
    console.log(results);
    res.status(200);
    res.send(results);
});

app.get("/students", async (req, res) => {
    await client.connect();
    console.log("Node connected successfully to GET MongoDB");
    const query = {};
    const results = await db
        .collection("students")
        .find(query)
        .limit(100)
        .toArray();
    console.log(results);
    res.status(200);
    res.send(results);
});

app.get("/instructor", async (req, res) => {
    await client.connect();
    console.log("Node connected successfully to GET MongoDB");
    const query = {};
    const results = await db
        .collection("instructor")
        .find(query)
        .limit(100)
        .toArray();
    console.log(results);
    res.status(200);
    res.send(results);
});

app.post("/addNewTelugu", async (req, res) => {
    try {
        await client.connect();
        const newDocument = {
            id: req.body.id,
            title: req.body.title,
            year: req.body.year,
            url: req.body.url,
            plot: req.body.plot,
            price: req.body.price,
            cast: req.body.cast,
            director: req.body.director
        };

        const result = await db.collection("telugu").insertOne(newDocument);
        res.status(200).send(result);
    } catch (error) {
        console.error("Error adding new Telugu movie:", error);
        res.status(500).send({ error: 'An internal server error occurred' });
    } finally {
        await client.close();
    }
});

app.post("/addNewEnglish", async (req, res) => {
    try {
        await client.connect();
        const newDocument = {
            id: req.body.id,
            title: req.body.title,
            year: req.body.year,
            image: req.body.image,
            plot: req.body.plot,
            price: req.body.price,
            cast: req.body.cast,
            director: req.body.director
        };

        const result = await db.collection("english").insertOne(newDocument);
        res.status(200).send(result);
    } catch (error) {
        console.error("Error adding new English movie:", error);
        res.status(500).send({ error: 'An internal server error occurred' });
    } finally {
        await client.close();
    }
});

app.post("/addNewHindi", async (req, res) => {
    try {
        await client.connect();
        const newDocument = {
            id: req.body.id,
            title: req.body.title,
            year: req.body.year,
            url: req.body.url,
            plot: req.body.plot,
            price: req.body.price,
            cast: req.body.cast,
            director: req.body.director
        };

        const result = await db.collection("hindi").insertOne(newDocument);
        res.status(200).send(result);
    } catch (error) {
        console.error("Error adding new Hindi movie:", error);
        res.status(500).send({ error: 'An internal server error occurred' });
    } finally {
        await client.close();
    }
});

app.put("/updateTelugu/:id", async (req, res) => {
    try {
        await client.connect();
        const updateDoc = {
            $set: req.body
        };

        const result = await db.collection("telugu").updateOne({ id: req.params.id }, updateDoc);
        if (result.modifiedCount === 0) {
            return res.status(404).send({ error: "No movie found with that ID" });
        }
        res.status(200).send(result);
    } catch (error) {
        console.error("Error updating Telugu movie:", error);
        res.status(500).send({ error: 'An internal server error occurred' });
    } finally {
        await client.close();
    }
});

app.put("/updateHindi/:id", async (req, res) => {
    try {
        await client.connect();
        const updateDoc = {
            $set: req.body
        };

        const result = await db.collection("hindi").updateOne({ id: req.params.id }, updateDoc);
        if (result.modifiedCount === 0) {
            return res.status(404).send({ error: "No movie found with that ID" });
        }
        res.status(200).send(result);
    } catch (error) {
        console.error("Error updating Hindi movie:", error);
        res.status(500).send({ error: 'An internal server error occurred' });
    } finally {
        await client.close();
    }
});

app.put("/updateEnglish/:id", async (req, res) => {
    try {
        await client.connect();
        const updateDoc = {
            $set: req.body
        };

        const result = await db.collection("english").updateOne({ id: req.params.id }, updateDoc);
        if (result.modifiedCount === 0) {
            return res.status(404).send({ error: "No movie found with that ID" });
        }
        res.status(200).send(result);
    } catch (error) {
        console.error("Error updating English movie:", error);
        res.status(500).send({ error: 'An internal server error occurred' });
    } finally {
        await client.close();
    }
});

app.delete("/deleteTelugu/:id", async (req, res) => {
    try {
        await client.connect();
        const result = await db.collection("telugu").deleteOne({ id: req.params.id });
        if (result.deletedCount === 0) {
            return res.status(404).send({ error: "No movie found with that ID" });
        }
        res.status(200).send(result);
    } catch (error) {
        console.error("Error deleting Telugu movie:", error);
        res.status(500).send({ error: 'An internal server error occurred' });
    } finally {
        await client.close();
    }
});


app.delete("/deleteHindi/:id", async (req, res) => {
    try {
        await client.connect();
        const result = await db.collection("hindi").deleteOne({ id: req.params.id });
        if (result.deletedCount === 0) {
            return res.status(404).send({ error: "No movie found with that ID" });
        }
        res.status(200).send(result);
    } catch (error) {
        console.error("Error deleting Hindi movie:", error);
        res.status(500).send({ error: 'An internal server error occurred' });
    } finally {
        await client.close();
    }
});

app.delete("/deleteEnglish/:id", async (req, res) => {
    try {
        await client.connect();
        const result = await db.collection("english").deleteOne({ id: req.params.id });
        if (result.deletedCount === 0) {
            return res.status(404).send({ error: "No movie found with that ID" });
        }
        res.status(200).send(result);
    } catch (error) {
        console.error("Error deleting English movie:", error);
        res.status(500).send({ error: 'An internal server error occurred' });
    } finally {
        await client.close();
    }
});

app.post("/",async(req,res)=>{
    const{email,password}=req.body

    try{
        const check=await collection.findOne({email:email})

        if(check){
            res.json("exist")
        }
        else{
            res.json("notexist")
        }

    }
    catch(e){
        res.json("fail")
    }

})


app.post("/signup", async (req, res) => {
    try {
        const { id, name, email, password, userType = "user" } = req.body;
        const doubleCheck = await db.collection("users").findOne({ email: email });
        if (doubleCheck) {
            return res.status(400).send({ success: false, message: "User already exists with the given email." });
        }
        const newDocument = {
            id: id,
            name: name,
            email: email,
            password: password, // Note: password should be hashed in production
            userType: userType,
        };
        const result = await db.collection("users").insertOne(newDocument);
        res.status(200).send({ success: true, result: result });
    } catch (error) {
        console.error("Error during user signup:", error);
        res.status(500).send({ error: 'An internal server error occurred' });
    }
});

app.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await db.collection("users").findOne({ email: email });
        if (!user) {
            return res.status(404).send({ success: false, message: "No user found with that email." });
        }

        if (user.password !== password) {
            return res.status(401).send({ success: false, message: "Incorrect password." });
        }

        // Successful login: return success status and the user's name
        res.status(200).send({ success: true, message: "Login successful", name: user.name });

    } catch (error) {
        console.error("Error during user login:", error);
        res.status(500).send({ error: 'An internal server error occurred' });
    }
});




// app.post("/signup",async(req,res)=>{
//     const{email,password}=req.body

//     const data={
//         email:email,
//         password:password
//     }

//     try{
//         const check=await collection.findOne({email:email})

//         if(check){
//             res.json("exist")
//         }
//         else{
//             res.json("notexist")
//             await collection.insertMany([data])
//         }

//     }
//     catch(e){
//         res.json("fail")
//     }

// })

// app.listen(8000,()=>{
//     console.log("port connected");
// })