const express = require('express');
var cors = require('cors')
const app = express();
const jiraWorklogRoutes = require('./routes/jira-worklog.routes');
const alertRoutes = require('.//routes/alert.routes');

// Middleware to parse JSON requests
app.use(express.json());
app.use(cors({
    origin: ['http://localhost:4200', 'http://13.233.159.246','http://managed-services.comprinno.net','https://managed-services.comprinno.net'] 
}))

// Routes
app.use('/api/worklog', jiraWorklogRoutes);
app.use('/api/alert-dashboard',alertRoutes)

module.exports = app;
