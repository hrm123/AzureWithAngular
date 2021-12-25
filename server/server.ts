
import * as express from 'express';
import {Application} from "express";
import { Server } from 'http';
import {readResumeDetails} from "./resume-details";
const bodyParser = require('body-parser');



const app: Application = express();


app.use(bodyParser.json());


// REST API
app.route('/apis/resumes')
    .get(readResumeDetails);


// launch an HTTP Server
const httpServer : Server = app.listen(9000, () => {
    console.log("HTTP Server running at http://localhost:9000");
});









