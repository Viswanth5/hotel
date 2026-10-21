const fs = require('fs');

const marutham = fs.readFileSync('src/marutham.css', 'utf8');
const indexCss = `@tailwind base;

${marutham}

@tailwind components;
@tailwind utilities;
`;

fs.writeFileSync('src/index.css', indexCss);
console.log('src/index.css written successfully. Size:', indexCss.length);
