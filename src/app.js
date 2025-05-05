const express = require('express');
var cors = require('cors')
const app = express();
const jiraWorklogRoutes = require('./routes/jira-worklog.routes');

// Middleware to parse JSON requests
app.use(express.json());
app.use(cors())

// Routes
app.use('/api/worklog', jiraWorklogRoutes);

module.exports = app;
