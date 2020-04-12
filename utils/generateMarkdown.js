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
  ## Link
  <iframe src="https://drive.google.com/file/d/1k8kmHNDCD2EY5_BrqddsgF3Z6yhOJLKh/preview" width="640" height="480"></iframe>
`
;
}

module.exports = generateMarkdown;