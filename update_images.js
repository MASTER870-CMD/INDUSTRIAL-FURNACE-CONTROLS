const fs = require('fs');
const path = require('path');

function replaceInFile(filepath, regex, replacement) {
  let content = fs.readFileSync(filepath, 'utf8');
  content = content.replace(regex, replacement);
  fs.writeFileSync(filepath, content);
}

const root = path.join(__dirname, 'src', 'app');

// 1. page.tsx (Home)
const pageTsx = path.join(root, 'page.tsx');
replaceInFile(pageTsx, /<PlaceholderImage text="Official IFC High-Temperature Furnace Image" className="h-full" \/>/g, 
  '<PlaceholderImage src="/images/ifc/brand/electrical_oven.png" text="High-Temperature Furnace" className="h-full" />');

replaceInFile(pageTsx, /<PlaceholderImage text="Official IFC High-Temperature Chamber Furnace Image" className="h-full" \/>/g, 
  '<PlaceholderImage src="/images/ifc/furnaces/chamberslide.jpg" text="High-Temperature Chamber Furnace" className="h-full" />');

replaceInFile(pageTsx, /<PlaceholderImage text=\{`Representative \$\{cat\.title\} Image`\} className="h-full opacity-80 group-hover:opacity-100 transition-opacity" \/>/g, 
  '<PlaceholderImage src={cat.image} alt={cat.title} className="h-full opacity-80 group-hover:opacity-100 transition-opacity" />');

replaceInFile(pageTsx, /<PlaceholderImage text="IFC Engineering & Control Panel Assembly" className="h-full" \/>/g, 
  '<PlaceholderImage src="/images/ifc/controls/controlpanel2.jpg" text="Engineering Control Panel" className="h-full" />');


// 2. products/page.tsx
const productsTsx = path.join(root, 'products', 'page.tsx');
replaceInFile(productsTsx, /<PlaceholderImage text=\{cat\.title\} className="group-hover:scale-105 transition-transform duration-500 border-none" \/>/g,
  '<PlaceholderImage src={cat.image} text={cat.title} className="group-hover:scale-105 transition-transform duration-500 border-none" />');


// 3. products/[category]/page.tsx
const categoryTsx = path.join(root, 'products', '[category]', 'page.tsx');
replaceInFile(categoryTsx, /<PlaceholderImage text="" icon=\{false\} className="border-none opacity-50" \/>/g,
  '<PlaceholderImage src={product.image} alt={product.name} className="border-none group-hover:scale-105 transition-transform duration-500" />');


// 4. products/[category]/[slug]/page.tsx
const slugTsx = path.join(root, 'products', '[category]', '[slug]', 'page.tsx');
replaceInFile(slugTsx, /<PlaceholderImage text=\{`Official IFC Image: \$\{product\.name\}`\} className="border-none shadow-sm" \/>/g,
  '<PlaceholderImage src={product.image} alt={product.name} className="border-none shadow-sm" />');
replaceInFile(slugTsx, /<PlaceholderImage text="" icon=\{false\} className="border-none opacity-50" \/>/g,
  '<PlaceholderImage src={relatedProduct.image} alt={relatedProduct.name} className="border-none group-hover:scale-105 transition-transform duration-500" />');


// 5. gallery/page.tsx (Needs to map dynamically)
// We'll update the mock gallery items in the file to point to real images.
// Instead of regexing all items, let's just make the placeholder load the item.src if we add it.
let galleryContent = fs.readFileSync(path.join(root, 'gallery', 'page.tsx'), 'utf8');
galleryContent = galleryContent.replace(/<PlaceholderImage text="Official IFC product image" className="group-hover:scale-105 transition-transform duration-500" \/>/g,
  '<PlaceholderImage src={item.src} alt={item.title} className="group-hover:scale-105 transition-transform duration-500" />');
fs.writeFileSync(path.join(root, 'gallery', 'page.tsx'), galleryContent);


// 6. about/page.tsx
const aboutTsx = path.join(root, 'about', 'page.tsx');
replaceInFile(aboutTsx, /<PlaceholderImage text="Manufacturing Facility \/ Engineering Setup" className="rounded-sm" \/>/g,
  '<PlaceholderImage src="/images/ifc/brand/years.jpg" text="Manufacturing Facility" className="rounded-sm" />');

// 7. certificates/page.tsx
const certTsx = path.join(root, 'certificates', 'page.tsx');
replaceInFile(certTsx, /<PlaceholderImage text="Official ISO 9001:2015 Certificate Image" icon=\{false\} \/>/g,
  '<PlaceholderImage src="/images/ifc/brand/ISO CERTIFICATE.png" alt="ISO 9001:2015 Certificate" />');

// 8. applications/page.tsx
const appTsx = path.join(root, 'applications', 'page.tsx');
// Will just use category images
replaceInFile(appTsx, /<PlaceholderImage text=\{app\.title\} className="border-none" \/>/g,
  '<PlaceholderImage src={app.image || "/images/ifc/brand/heating.png"} alt={app.title} className="border-none group-hover:scale-105 transition-transform duration-500" />');

console.log('Done mapping images.');
