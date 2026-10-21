const fs = require('fs');

const html = fs.readFileSync('src/body_extracted.html', 'utf8');
const imgs = html.match(/src="[^"]*"/g) || [];
console.log('Images count:', imgs.length);
imgs.forEach((img, i) => console.log(i + 1, img));
