
// TODO: Create a function to generate markdown for README
const fs = require('fs')

function generateMarkdown(data) {
  return `
  <h1 align="center">${data.title} 👋</h1>
  
![badge](https://img.shields.io/badge/license-${data.license}-brightgreen)<br />
## Description
🔍 ${data.description}
## Table of Contents
- [Description](#description)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Usage
💻 ${data.usage}
## License
![badge](https://img.shields.io/badge/license-${data.license}-brightgreen)
<br />
This application is covered by the ${data.license} license. 
## Contributing
👪 ${data.contributors}
## Tests
✏️ ${data.tests}
## Questions
✋ ${data.questions}<br />
<br />
 Find me on GitHub: [${data.username}](https://github.com/${data.username})<br />
<br />
✉️ Email me with any questions: ${data.email}<br /><br />


`;
}

module.exports = generateMarkdown;
