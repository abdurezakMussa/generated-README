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
## Video Link
[![Alt text for your video](doc/screenshot_youtube.PNG)](https://drive.google.com/file/d/1pVWR7ibRRIL5QVacQggfJXOpBrzTZ9Jm/preview "Put hover text here!")
`
;
}

module.exports = generateMarkdown;