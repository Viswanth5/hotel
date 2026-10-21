const fs = require('fs');

function htmlToJsx(html) {
  let jsx = html;

  // Replace comments
  jsx = jsx.replace(/<!--([\s\S]*?)-->/g, (m, c) => `{/* ${c.trim()} */}`);

  // Replace attributes
  jsx = jsx.replace(/\bclass="/g, 'className="');
  jsx = jsx.replace(/\bfor="/g, 'htmlFor="');
  jsx = jsx.replace(/\btabindex="/g, 'tabIndex="');
  jsx = jsx.replace(/\bstroke-width="/g, 'strokeWidth="');
  jsx = jsx.replace(/\bstroke-linecap="/g, 'strokeLinecap="');
  jsx = jsx.replace(/\bstroke-linejoin="/g, 'strokeLinejoin="');

  // Replace inline styles like style="--d:.25s" or style="display:none"
  jsx = jsx.replace(/style="([^"]*)"/g, (m, val) => {
    const parts = val.split(';').filter(p => p.trim());
    const props = parts.map(p => {
      const idx = p.indexOf(':');
      if (idx === -1) return '';
      const k = p.slice(0, idx).trim();
      const v = p.slice(idx + 1).trim();
      if (k.startsWith('--')) {
        return `'${k}': '${v}'`;
      }
      const camelK = k.replace(/-([a-z])/g, (_, g) => g.toUpperCase());
      return `${camelK}: '${v}'`;
    }).filter(Boolean);
    return `style={{ ${props.join(', ')} }}`;
  });

  // Self closing tags in SVG and HTML
  const voidTags = ['input', 'img', 'br', 'hr', 'path', 'circle', 'rect', 'line', 'polygon', 'polyline', 'ellipse'];
  voidTags.forEach(tag => {
    const r = new RegExp(`<(${tag})([^>]*?)>`, 'gi');
    jsx = jsx.replace(r, (m, t, attrs) => {
      if (attrs.trim().endsWith('/')) return m;
      return `<${t}${attrs} />`;
    });
  });

  return jsx;
}

const sections = JSON.parse(fs.readFileSync('src/sections.json', 'utf8'));
sections.forEach((sec, i) => {
  const converted = htmlToJsx(sec.content);
  fs.writeFileSync(`src/converted_${i}.jsx`, converted);
  console.log(`Wrote converted_${i}.jsx for ${sec.title}`);
});
