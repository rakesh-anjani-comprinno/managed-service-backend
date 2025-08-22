const express = require('express');
const router = express.Router();
const { jiraWorklogControll } = require('../controller/jira-worklog.controller');

router.get('/users', jiraWorklogControll.getUsers);
router.get('/issues', jiraWorklogControll.getWorklogIssues);
router.get('/issues-excel', jiraWorklogControll.getAllWorkIssuesForExcelSheet);
router.post('/count', jiraWorklogControll.getCount);

module.exports = router;
