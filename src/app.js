const express = require('express');
var cors = require('cors')
const app = express();
const jiraWorklogRoutes = require('./routes/jira-worklog.routes');

// Middleware to parse JSON requests
app.use(express.json());
app.use(cors({
    origin: ['http://localhost:4200', 'http://13.233.159.246'] 
}))

// Routes
app.use('/api/worklog', jiraWorklogRoutes);

module.exports = app;
