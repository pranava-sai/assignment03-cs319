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