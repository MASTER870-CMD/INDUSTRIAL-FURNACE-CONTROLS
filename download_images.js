const fs = require('fs');
const https = require('https');
const path = require('path');

const urls = {
  brand: [
    "https://www.indfurnace.com/assets/images/NewImages/electrical_oven.png",
    "https://www.indfurnace.com/assets/images/1x1.png",
    "https://www.indfurnace.com/assets/images/NewImages/kanthal.png",
    "https://www.indfurnace.com/assets/images/NewImages/heating.png",
    "https://www.indfurnace.com/assets/images/NewImages/rod.png",
    "https://www.indfurnace.com/assets/images/NewImages/years.jpg",
    "https://www.indfurnace.com/assets/images/NewImages/ISO%20CERTIFICATE.png"
  ],
  clients: [
    "https://www.indfurnace.com/assets/images/NewImages/logo/hal.jpg",
    "https://www.indfurnace.com/assets/images/NewImages/logo/bosh.jpg",
    "https://www.indfurnace.com/assets/images/NewImages/logo/gelogo.jpg",
    "https://www.indfurnace.com/assets/images/NewImages/logo/bel.jpg",
    "https://www.indfurnace.com/assets/images/NewImages/logo/bhel.jpg",
    "https://www.indfurnace.com/assets/images/NewImages/logo/dalmia.jpg",
    "https://www.indfurnace.com/assets/images/NewImages/logo/tatasteel.jpg",
    "https://www.indfurnace.com/assets/images/NewImages/logo/saint1.png",
    "https://www.indfurnace.com/assets/images/NewImages/logo/gail.jpg",
    "https://www.indfurnace.com/assets/images/NewImages/logo/titan1.jpg",
    "https://www.indfurnace.com/assets/images/NewImages/logo/def.jpg",
    "https://www.indfurnace.com/assets/images/NewImages/logo/tatatea.jpg",
    "https://www.indfurnace.com/assets/images/NewImages/logo/lt.jpg",
    "https://www.indfurnace.com/assets/images/NewImages/logo/john.jpg",
    "https://www.indfurnace.com/assets/images/NewImages/logo/beml.jpg",
    "https://www.indfurnace.com/assets/images/NewImages/logo/csir.png",
    "https://www.indfurnace.com/assets/images/NewImages/logo/jsw.jpg"
  ],
  furnaces: [
    "https://www.indfurnace.com/assets/images/NewImages/bottomslide.jpg",
    "https://www.indfurnace.com/assets/images/NewImages/muffleslide.jpg",
    "https://www.indfurnace.com/assets/images/NewImages/muffleslide1.jpg",
    "https://www.indfurnace.com/assets/images/NewImages/muffleslide2.jpg",
    "https://www.indfurnace.com/assets/images/NewImages/muffle.png",
    "https://www.indfurnace.com/assets/images/NewImages/muffle1.png",
    "https://www.indfurnace.com/assets/images/NewImages/muffle2.png",
    "https://www.indfurnace.com/assets/images/NewImages/chamberslide.jpg",
    "https://www.indfurnace.com/assets/images/NewImages/chamberslide2.jpg",
    "https://www.indfurnace.com/assets/images/NewImages/chamberslide1.jpg",
    "https://www.indfurnace.com/assets/images/NewImages/chamber3.jpg",
    "https://www.indfurnace.com/assets/images/NewImages/pit1.png",
    "https://www.indfurnace.com/assets/images/NewImages/pitfurnace.png",
    "https://www.indfurnace.com/assets/images/NewImages/aluminiumslide.jpg",
    "https://www.indfurnace.com/assets/images/NewImages/aluminiumslide11.jpg",
    "https://www.indfurnace.com/assets/images/NewImages/aluminiumslide22.jpg",
    "https://www.indfurnace.com/assets/images/NewImages/aluminiumslide44.jpg",
    "https://www.indfurnace.com/assets/images/NewImages/aluminiumslide55.jpg",
    "https://www.indfurnace.com/assets/images/quench2.jpg",
    "https://www.indfurnace.com/assets/images/quench3.jpg",
    "https://www.indfurnace.com/assets/images/quench4.jpg",
    "https://www.indfurnace.com/assets/images/quench5.jpg",
    "https://www.indfurnace.com/assets/images/quench6.jpg"
  ],
  accessories: [
    "https://www.indfurnace.com/assets/images/NewImages/mosislide1.jpg",
    "https://www.indfurnace.com/assets/images/NewImages/mosislide2.jpg",
    "https://www.indfurnace.com/assets/images/NewImages/mosi2slide1.jpg",
    "https://www.indfurnace.com/assets/images/NewImages/MoSi2_measurements.jpg",
    "https://www.indfurnace.com/assets/images/NewImages/sicslide3.jpg",
    "https://www.indfurnace.com/assets/images/NewImages/sic1.jpg",
    "https://www.indfurnace.com/assets/images/NewImages/sic2.jpg",
    "https://www.indfurnace.com/assets/images/NewImages/gd.jpg",
    "https://www.indfurnace.com/assets/images/NewImages/kanthalslide2.jpg",
    "https://www.indfurnace.com/assets/images/NewImages/kanthalslide5.jpg",
    "https://www.indfurnace.com/assets/images/NewImages/kanthalslide4.jpg",
    "https://www.indfurnace.com/assets/images/NewImages/blanketslide1.jpg",
    "https://www.indfurnace.com/assets/images/NewImages/blanketslide2.jpg",
    "https://www.indfurnace.com/assets/images/NewImages/ceramicslide1.jpg",
    "https://www.indfurnace.com/assets/images/NewImages/ceramicslide2.jpg",
    "https://www.indfurnace.com/assets/images/NewImages/ceramic11.jpg",
    "https://www.indfurnace.com/assets/images/NewImages/ceramic111.jpg",
    "https://www.indfurnace.com/assets/images/NewImages/aluminaslide1.jpg",
    "https://www.indfurnace.com/assets/images/NewImages/aluminaslide2.jpg",
    "https://www.indfurnace.com/assets/images/NewImages/aluminacrucibleslide.jpg",
    "https://www.indfurnace.com/assets/images/NewImages/tubeslide.jpg",
    "https://www.indfurnace.com/assets/images/NewImages/tubeslide1.jpg",
    "https://www.indfurnace.com/assets/images/NewImages/ceramicrollerslide.jpg",
    "https://www.indfurnace.com/assets/images/NewImages/ceramicrollerslide1.jpg",
    "https://www.indfurnace.com/assets/images/NewImages/ceramicboard.jpg"
  ],
  ovens: [
    "https://www.indfurnace.com/assets/images/NewImages/labovenslide.jpg",
    "https://www.indfurnace.com/assets/images/NewImages/labovenslide1.jpg",
    "https://www.indfurnace.com/assets/images/NewImages/labovenslidenew.jpg",
    "https://www.indfurnace.com/assets/images/NewImages/conveyorslide1.jpg",
    "https://www.indfurnace.com/assets/images/NewImages/conveyorslide2.jpg",
    "https://www.indfurnace.com/assets/images/NewImages/electricalslide1.jpg",
    "https://www.indfurnace.com/assets/images/NewImages/slide2.jpg",
    "https://www.indfurnace.com/assets/images/NewImages/ageingslide.jpg",
    "https://www.indfurnace.com/assets/images/NewImages/industrialoven1.jpg",
    "https://www.indfurnace.com/assets/images/NewImages/slide3.jpg",
    "https://www.indfurnace.com/assets/images/NewImages/industrialoven2.jpg",
    "https://www.indfurnace.com/assets/images/NewImages/industrialslide.jpg"
  ],
  controls: [
    "https://www.indfurnace.com/assets/images/NewImages/instrumentslide1.jpg",
    "https://www.indfurnace.com/assets/images/NewImages/instrumentslide2.jpg",
    "https://www.indfurnace.com/assets/images/NewImages/instrumentslide3.jpg",
    "https://www.indfurnace.com/assets/images/NewImages/instrumentslide4.jpg",
    "https://www.indfurnace.com/assets/images/NewImages/processslide1.jpg",
    "https://www.indfurnace.com/assets/images/NewImages/processslide2.jpg",
    "https://www.indfurnace.com/assets/images/NewImages/loggerslide2.jpg",
    "https://www.indfurnace.com/assets/images/NewImages/loggerslide3.jpg",
    "https://www.indfurnace.com/assets/images/NewImages/paper.jpg",
    "https://www.indfurnace.com/assets/images/NewImages/furcontrolslide1.jpg",
    "https://www.indfurnace.com/assets/images/NewImages/furcontrolslide2.jpg",
    "https://www.indfurnace.com/assets/images/NewImages/controlpanel2.jpg"
  ],
  thermocouples: [
    "https://www.indfurnace.com/assets/images/NewImages/moltenslide.jpg",
    "https://www.indfurnace.com/assets/images/NewImages/moltenslide1.jpg",
    "https://www.indfurnace.com/assets/images/NewImages/moltenslide2.jpg",
    "https://www.indfurnace.com/assets/images/NewImages/mimi.jpg",
    "https://www.indfurnace.com/assets/images/NewImages/duplex_mi_thermocouple.jpg",
    "https://www.indfurnace.com/assets/images/NewImages/mi_thermocouple.jpg",
    "https://www.indfurnace.com/assets/images/NewImages/rtdslide1.jpg",
    "https://www.indfurnace.com/assets/images/NewImages/thermoslide1.jpg",
    "https://www.indfurnace.com/assets/images/NewImages/thermoslide2.jpg",
    "https://www.indfurnace.com/assets/images/NewImages/thermoslide3.jpg",
    "https://www.indfurnace.com/assets/images/NewImages/omega1.jpg",
    "https://www.indfurnace.com/assets/images/NewImages/omega2.jpg",
    "https://www.indfurnace.com/assets/images/NewImages/omega3.jpg",
    "https://www.indfurnace.com/assets/images/NewImages/omega11.jpg",
    "https://www.indfurnace.com/assets/images/NewImages/omega33.jpg",
    "https://www.indfurnace.com/assets/images/NewImages/adjustable.jpg",
    "https://www.indfurnace.com/assets/images/NewImages/flangeslide1.jpg",
    "https://www.indfurnace.com/assets/images/NewImages/flangeslide2.jpg",
    "https://www.indfurnace.com/assets/images/NewImages/flangeslide3.jpg",
    "https://www.indfurnace.com/assets/images/NewImages/flangeslide4.jpg",
    "https://www.indfurnace.com/assets/images/NewImages/flangeslide5.jpg"
  ],
  heaters: [
    "https://www.indfurnace.com/assets/images/NewImages/immersion1.jpg",
    "https://www.indfurnace.com/assets/images/NewImages/immersion2.jpg",
    "https://www.indfurnace.com/assets/images/NewImages/immersion3.jpg",
    "https://www.indfurnace.com/assets/images/NewImages/imersion.jpg",
    "https://www.indfurnace.com/assets/images/NewImages/immersion.jpg",
    "https://www.indfurnace.com/assets/images/NewImages/silica_titanium_tube_heaters.jpg",
    "https://www.indfurnace.com/assets/images/NewImages/various_types_of_immersion_heaters.jpg",
    "https://www.indfurnace.com/assets/images/NewImages/capture%2818%29.png",
    "https://www.indfurnace.com/assets/images/NewImages/airslide1.jpg",
    "https://www.indfurnace.com/assets/images/NewImages/airslide3.jpg",
    "https://www.indfurnace.com/assets/images/NewImages/airslide4.jpg",
    "https://www.indfurnace.com/assets/images/NewImages/finned_heaters.jpg",
    "https://www.indfurnace.com/assets/images/NewImages/air-heater.jpg",
    "https://www.indfurnace.com/assets/images/NewImages/airheater.jpg",
    "https://www.indfurnace.com/assets/images/NewImages/ushape.jpg",
    "https://www.indfurnace.com/assets/images/NewImages/zshape.jpg",
    "https://www.indfurnace.com/assets/images/NewImages/capture%2811%29.png",
    "https://www.indfurnace.com/assets/images/NewImages/capture%2812%29.png",
    "https://www.indfurnace.com/assets/images/NewImages/capture%2813%29.png",
    "https://www.indfurnace.com/assets/images/NewImages/capture%2814%29.png",
    "https://www.indfurnace.com/assets/images/NewImages/capture%2815%29.png",
    "https://www.indfurnace.com/assets/images/NewImages/capture%2816%29.png",
    "https://www.indfurnace.com/assets/images/NewImages/capture%2817%29.png",
    "https://www.indfurnace.com/assets/images/NewImages/finnedslide1.jpg",
    "https://www.indfurnace.com/assets/images/NewImages/finnedslide3.jpg",
    "https://www.indfurnace.com/assets/images/NewImages/finnedslide4.jpg",
    "https://www.indfurnace.com/assets/images/NewImages/v1.jpg",
    "https://www.indfurnace.com/assets/images/NewImages/v2.jpg",
    "https://www.indfurnace.com/assets/images/NewImages/v3.jpg",
    "https://www.indfurnace.com/assets/images/NewImages/v4.jpg",
    "https://www.indfurnace.com/assets/images/NewImages/v5.jpg",
    "https://www.indfurnace.com/assets/images/NewImages/v6.jpg",
    "https://www.indfurnace.com/assets/images/NewImages/v7.jpg",
    "https://www.indfurnace.com/assets/images/NewImages/v8.jpg",
    "https://www.indfurnace.com/assets/images/NewImages/v9.jpg",
    "https://www.indfurnace.com/assets/images/NewImages/v10.jpg",
    "https://www.indfurnace.com/assets/images/NewImages/v11.jpg",
    "https://www.indfurnace.com/assets/images/NewImages/v12.jpg",
    "https://www.indfurnace.com/assets/images/NewImages/cartridge.jpg",
    "https://www.indfurnace.com/assets/images/NewImages/FR_200.jpg",
    "https://www.indfurnace.com/assets/images/NewImages/bobinslide1.jpg",
    "https://www.indfurnace.com/assets/images/NewImages/bobinslide2.jpg",
    "https://www.indfurnace.com/assets/images/NewImages/bobinslide3.jpg",
    "https://www.indfurnace.com/assets/images/NewImages/ductslide1.jpg",
    "https://www.indfurnace.com/assets/images/NewImages/ductslide2.jpg",
    "https://www.indfurnace.com/assets/images/NewImages/ductslide3.jpg",
    "https://www.indfurnace.com/assets/images/NewImages/ductslide4.jpg",
    "https://www.indfurnace.com/assets/images/NewImages/ductslide5.jpg"
  ],
  wax: [
    "https://www.indfurnace.com/assets/images/NewImages/waxtankslide1.jpg",
    "https://www.indfurnace.com/assets/images/NewImages/waxtankslide.jpg",
    "https://www.indfurnace.com/assets/images/NewImages/200tank.jpg",
    "https://www.indfurnace.com/assets/images/NewImages/500kg.jpg",
    "https://www.indfurnace.com/assets/images/NewImages/preslider1.jpg",
    "https://www.indfurnace.com/assets/images/NewImages/melterslide.jpg",
    "https://www.indfurnace.com/assets/images/NewImages/pumpslide1.jpg"
  ]
};

const publicIfcDir = path.join(__dirname, 'public', 'images', 'ifc');

function ensureDirSync(dirpath) {
  if (!fs.existsSync(dirpath)) {
    fs.mkdirSync(dirpath, { recursive: true });
  }
}

async function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0'
      }
    }, (res) => {
      if (res.statusCode === 200) {
        const file = fs.createWriteStream(dest);
        res.pipe(file);
        file.on('finish', () => {
          file.close(resolve);
        });
      } else {
        // Just resolve true even if it fails so we don't break the whole loop
        resolve(true); 
      }
    }).on('error', (err) => {
      resolve(true); // Don't reject to keep script running
    });
  });
}

async function run() {
  for (const [folder, folderUrls] of Object.entries(urls)) {
    const dir = path.join(publicIfcDir, folder);
    ensureDirSync(dir);
    console.log(`Downloading ${folderUrls.length} images for ${folder}...`);
    
    // Concurrent downloads for this folder
    await Promise.all(folderUrls.map(async (url) => {
      // Decode URI component to handle %20 in filenames like ISO%20CERTIFICATE.png
      let filename = decodeURIComponent(url.split('/').pop());
      // Clean query strings if any
      filename = filename.split('?')[0];
      const dest = path.join(dir, filename);
      if (!fs.existsSync(dest)) {
        await downloadFile(url, dest);
      }
    }));
  }
  console.log("Done downloading all images.");
}

run();
