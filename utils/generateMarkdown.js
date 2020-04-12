function generateMarkdown(data) {
  const gitTitle = "\033[1mTitle\033[0"
  const gitUserName = "Username"
  const gitEmail = "User Email"
  const gitDescription = "Description"
  const gitInstall = "Install"
  const gitContents = "Table of Contents"
  const gitUsage = "Usage";
  const gitLicense = "License"
  const gitContributing = "Contributing"
  const gitQuestions = "Questions"
  
  return `
## Username
  - ${data.githubUsername}
## Email
  - ${data.userEmail}
## Title
  - ${data.title}
## Description
  - ${data.projectDescription}
## Install
  - ${data.appInstall}
## Table of Contents
  - ${data.tableOfContents}
## Usage
  - ${data.usage}
## License
  - ${data.badgeChoice}
## Contributions
  - ${data.contributing}
## Questions
  - ${data.questions}
  ## Video link
  [![SC2 Video](https://img.youtube.com/vi/--b-9HrKK6w/0.jpg)](http://www.youtube.com/watch?v=--b-9HrKK6w)
`
;
}

module.exports = generateMarkdown;