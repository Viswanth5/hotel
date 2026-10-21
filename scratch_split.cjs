const fs = require('fs');

const html = fs.readFileSync('src/body_extracted.html', 'utf8');

// List section comments
const regex = /<!--\s*={4,}\s*([\s\S]*?)\s*={4,}\s*-->/g;
let match;
let indices = [];

while ((match = regex.exec(html)) !== null) {
  indices.push({
    title: match[1].replace(/\r?\n|\r/g, ' ').trim(),
    start: match.index,
    headerEnd: regex.lastIndex
  });
}

console.log('Sections found:', indices.length);
indices.forEach((sec, i) => {
  const nextStart = indices[i + 1] ? indices[i + 1].start : html.length;
  sec.content = html.slice(sec.headerEnd, nextStart).trim();
  console.log(`${i}: [${sec.title}] length: ${sec.content.length}`);
});

fs.writeFileSync('src/sections.json', JSON.stringify(indices, null, 2));
console.log('Saved sections.json');
