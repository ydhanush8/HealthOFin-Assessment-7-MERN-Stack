import express from 'express'
import dataBaseConnection from './config/db.js';
import dotenv from 'dotenv';
import router from './routes/route.js'
import cors from 'cors'
import AuthorizationUser from './middlewares/auth.js'

dotenv.config()

const app = express()

app.use(cors());

app.use(AuthorizationUser);

app.use(express.json());
app.use('/', router);

dataBaseConnection()

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});