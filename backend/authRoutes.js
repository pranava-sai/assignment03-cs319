const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { MongoClient } = require('mongodb');

const url = "mongodb://127.0.0.1:27017";
const dbName = 'team76';
const client = new MongoClient(url);
const db = client.db(dbName);

router.post('/signup', async (req, res) => {
  try {
    await client.connect();
    const { username, email, password } = req.body;
    const existingUser = await db.collection('users').findOne({ $or: [{ username }, { email }] });
    if (existingUser) {
      return res.status(409).json({ error: 'Username or email already exists' });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = { username, email, password: hashedPassword };
    const result = await db.collection('users').insertOne(user);
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    console.error('Error during signup:', error);
    res.status(500).json({ error: 'An error occurred during signup' });
  } finally {
    await client.close();
  }
});

router.post('/login', async (req, res) => {
  try {
    await client.connect();
    const { username, password } = req.body;
    const user = await db.collection('users').findOne({ username });
    if (!user) {
      return res.status(401).json({ error: 'Invalid username or password' });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid username or password' });
    }
    const token = jwt.sign({ userId: user._id }, 'your-secret-key');
    res.json({ token });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ error: 'An error occurred during login' });
  } finally {
    await client.close();
  }
});

module.exports = router;