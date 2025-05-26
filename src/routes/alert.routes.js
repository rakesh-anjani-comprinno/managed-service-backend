const express = require('express');
const router = express.Router();
const { PagerDutyController } = require('../controller/pagerduty.controller');
const { JiraAlertController } = require('../controller/jira-alert.controller');

router.get('/pagerduty/services', PagerDutyController.getAllServices);
router.get('/pagerduty/incidents', PagerDutyController.getIncidents);

router.get('/jira/servicedesk',JiraAlertController.getServiceDesk);
router.get('/jira/issues',JiraAlertController.getAllIssues);

module.exports = router;
