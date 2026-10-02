const fs = require('fs');
const path = require('path');

function fixHeaders(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      fixHeaders(fullPath);
    } else if (fullPath.endsWith('.tsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      // Fix double text classes and make headers white/off-white
      content = content.replace(/className="bg-white text-\[\#17191C\](.*?)text-white/g, 'className="bg-[#F7F8FA] text-[#17191C]$1');
      // Fix text opacity in subheaders
      content = content.replace(/text-\[\#E3E6E8\] opacity-80/g, 'text-[#5B6268]');
      // Replace blue thick border with a subtle one for inner pages
      content = content.replace(/border-b-4 border-\[\#0000FF\]/g, 'border-b border-[#E3E6E8]'); 
      
      fs.writeFileSync(fullPath, content);
    }
  }
}
fixHeaders('src/app');
