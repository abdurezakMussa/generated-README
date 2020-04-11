function generateMarkdown(data) {
  return `
## userEmail
${data.userEmail}
## githubUsername
${data.githubUsername}
## Title 
${data.title}
## Usage
${data.Usage}
## tableOfContents
${data.tableOfContents}
## projectDescription
${data.projectDescription}
 ## Contributions
${data.contributing}
 appInstall
${data.appInstall}
## badgeChoice
${data.badgeChoice}
`
;
}

module.exports = generateMarkdown;