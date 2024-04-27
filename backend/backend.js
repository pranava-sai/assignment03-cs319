// Pranava Sai Maganti
// pranava7@iastate.edu
// pranava7
// April 15, 2024

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

app.post("/addNewTelugu", async (req, res) => {
    try {
        await client.connect();
        const keys = Object.keys(req.body);
        const values = Object.values(req.body);

        const newDocument = {
            "id": values[0], // also "id": req.body.id,
            "title": values[1], // also "name": req.body.name,
            "year": values[2], // also "price": req.body.price,
            "url": values[3], // also "description": req.body.description,
            "plot": values[4], // also "imageUrl": req.body.imageUrl
            "cast": values[5],
            "director": values[6]
        };
        console.log(newDocument);

        const results = await db
            .collection("Telugu-Movies")
            .insertOne(newDocument);
        res.status(200);
        res.send(results);
    } catch (error) {
        console.error("An error occurred:", error);
        res.status(500).send({ error: 'An internal server error occurred' });
    }
});

app.post("/addNewHindi", async (req, res) => {
    try {
        await client.connect();
        const keys = Object.keys(req.body);
        const values = Object.values(req.body);

        const newDocument = {
            "id": values[0], // also "id": req.body.id,
            "title": values[1], // also "name": req.body.name,
            "year": values[2], // also "price": req.body.price,
            "url": values[3], // also "description": req.body.description,
            "plot": values[4], // also "imageUrl": req.body.imageUrl
            "cast": values[5],
            "director": values[6]
        };
        console.log(newDocument);

        const results = await db
            .collection("Hindi-Movies")
            .insertOne(newDocument);
        res.status(200);
        res.send(results);
    } catch (error) {
        console.error("An error occurred:", error);
        res.status(500).send({ error: 'An internal server error occurred' });
    }
});

app.post("/addNewEnglish", async (req, res) => {
    try {
        await client.connect();
        const keys = Object.keys(req.body);
        const values = Object.values(req.body);

        const newDocument = {
            "id": values[0], // also "id": req.body.id,
            "title": values[1], // also "name": req.body.name,
            "year": values[2], // also "price": req.body.price,
            "url": values[3], // also "description": req.body.description,
            "plot": values[4], // also "imageUrl": req.body.imageUrl
            "cast": values[5],
            "director": values[6]
        };
        console.log(newDocument);

        const results = await db
            .collection("English-Movies")
            .insertOne(newDocument);
        res.status(200);
        res.send(results);
    } catch (error) {
        console.error("An error occurred:", error);
        res.status(500).send({ error: 'An internal server error occurred' });
    }
});