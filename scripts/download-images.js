const https = require('https');
const fs = require('fs');
const path = require('path');

const doctors = [
  { name: 'dr-sarah-johnson', url: 'https://ui-avatars.com/api/?name=Sarah+Johnson&background=random&size=200' },
  { name: 'dr-michael-chen', url: 'https://ui-avatars.com/api/?name=Michael+Chen&background=random&size=200' },
  { name: 'dr-emily-rodriguez', url: 'https://ui-avatars.com/api/?name=Emily+Rodriguez&background=random&size=200' },
  { name: 'dr-rajesh-kumar', url: 'https://ui-avatars.com/api/?name=Rajesh+Kumar&background=random&size=200' },
  { name: 'dr-priya-sharma', url: 'https://ui-avatars.com/api/?name=Priya+Sharma&background=random&size=200' },
  { name: 'dr-james-wilson', url: 'https://ui-avatars.com/api/?name=James+Wilson&background=random&size=200' },
  { name: 'dr-aisha-patel', url: 'https://ui-avatars.com/api/?name=Aisha+Patel&background=random&size=200' },
  { name: 'dr-david-thompson', url: 'https://ui-avatars.com/api/?name=David+Thompson&background=random&size=200' },
  { name: 'dr-ananya-reddy', url: 'https://ui-avatars.com/api/?name=Ananya+Reddy&background=random&size=200' },
  { name: 'dr-sophia-williams', url: 'https://ui-avatars.com/api/?name=Sophia+Williams&background=random&size=200' },
  { name: 'dr-carlos-martinez', url: 'https://ui-avatars.com/api/?name=Carlos+Martinez&background=random&size=200' },
  { name: 'dr-meera-kapoor', url: 'https://ui-avatars.com/api/?name=Meera+Kapoor&background=random&size=200' },
  { name: 'dr-alexander-brown', url: 'https://ui-avatars.com/api/?name=Alexander+Brown&background=random&size=200' },
  { name: 'dr-nisha-gupta', url: 'https://ui-avatars.com/api/?name=Nisha+Gupta&background=random&size=200' }
];

const outputDir = path.join(__dirname, '../public/doctors');

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

function downloadImage(doctor) {
  return new Promise((resolve, reject) => {
    const outputPath = path.join(outputDir, `${doctor.name}.png`);
    
    https.get(doctor.url, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download ${doctor.name}: ${response.statusCode}`));
        return;
      }

      const fileStream = fs.createWriteStream(outputPath);
      response.pipe(fileStream);

      fileStream.on('finish', () => {
        console.log(`Downloaded ${doctor.name}`);
        resolve();
      });

      fileStream.on('error', (err) => {
        reject(err);
      });
    }).on('error', reject);
  });
}

async function downloadAll() {
  console.log('Starting downloads...');
  
  for (const doctor of doctors) {
    try {
      await downloadImage(doctor);
    } catch (error) {
      console.error(`Error downloading ${doctor.name}:`, error.message);
    }
  }
  
  console.log('All downloads completed!');
}

downloadAll(); 