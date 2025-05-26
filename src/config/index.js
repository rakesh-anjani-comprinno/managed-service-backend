require('dotenv').config();

module.exports = {
  port: process.env.PORT || 3000,
  JIRA_ADMIN_USER_NAME : process.env.JIRA_ADMIN_USER_NAME,
  JIRA_ADMIN_PASSWORD_TOKEN: process.env.JIRA_ADMIN_PASSWORD_TOKEN,
  JIRA_BASE_URL: process.env.JIRA_BASE_URL,
  PAGERDUTY_TOKEN : process.env.PAGERDUTY_TOKEN,
  PAGERDUTY_BASE_URL : process.env.PAGERDUTY_BASE_URL
};
