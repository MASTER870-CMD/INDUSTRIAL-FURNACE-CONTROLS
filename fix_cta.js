const fs = require('fs');
const path = require('path');

function fixCTA(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      fixCTA(fullPath);
    } else if (fullPath.endsWith('.tsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      content = content.replace(/className="py-20 bg-white text-\[\#17191C\] text-center"/g, 'className="py-24 bg-[#0000FF] text-center"');
      
      fs.writeFileSync(fullPath, content);
    }
  }
}
fixCTA('src/app');
