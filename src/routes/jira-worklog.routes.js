const express = require('express');
const router = express.Router();
const { jiraWorklogControll } = require('../controller/jira-worklog.controller');

router.get('/users', jiraWorklogControll.getUsers);
router.get('/issues', jiraWorklogControll.getWorklogIssues);

module.exports = router;
