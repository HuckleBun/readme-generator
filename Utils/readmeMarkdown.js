function readmeMarkdown(answers) {
    return `
    # ${answers.title}

    ## License
    This application is under the cover of the ${answers.license} license.
    ![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)

    ## Description
    ${answers.description}

    ## Table of Contents
    - [Description](#description)
    - [Installation](#installation)
    - [Usage](#usage)
    - [Contribution](#contribution)
    - [Tests](#tests)
    - [License](#license)
    - [Connect](#connect)

    ## Installation
    ${answers.installation}

    ## Usage
    ${answers.usage}

    ## Contribution
    ${answers.contribution}

    ## Tests
    ${answers.tests}

    ## Have questions? Connect with me.
    GitHub: github.com/${answers.github}
    Email: ${answers.email}
    `
}

module.exports = readmeMarkdown;