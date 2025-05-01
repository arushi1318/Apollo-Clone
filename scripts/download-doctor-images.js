const fs = require('fs');
const path = require('path');
const https = require('https');
const sharp = require('sharp');

const doctors = [
  { name: 'dr-sarah-johnson', url: 'https://xsgames.co/randomusers/assets/avatars/female/1.jpg' },
  { name: 'dr-michael-chen', url: 'https://xsgames.co/randomusers/assets/avatars/male/2.jpg' },
  { name: 'dr-emily-rodriguez', url: 'https://xsgames.co/randomusers/assets/avatars/female/3.jpg' },
  { name: 'dr-rajesh-kumar', url: 'https://xsgames.co/randomusers/assets/avatars/male/4.jpg' },
  { name: 'dr-priya-sharma', url: 'https://xsgames.co/randomusers/assets/avatars/female/5.jpg' },
  { name: 'dr-james-wilson', url: 'https://xsgames.co/randomusers/assets/avatars/male/6.jpg' },
  { name: 'dr-aisha-patel', url: 'https://xsgames.co/randomusers/assets/avatars/female/7.jpg' },
  { name: 'dr-david-thompson', url: 'https://xsgames.co/randomusers/assets/avatars/male/8.jpg' },
  { name: 'dr-ananya-reddy', url: 'https://xsgames.co/randomusers/assets/avatars/female/9.jpg' },
  { name: 'dr-sophia-williams', url: 'https://xsgames.co/randomusers/assets/avatars/female/10.jpg' },
  { name: 'dr-carlos-martinez', url: 'https://xsgames.co/randomusers/assets/avatars/male/11.jpg' },
  { name: 'dr-meera-kapoor', url: 'https://xsgames.co/randomusers/assets/avatars/female/12.jpg' },
  { name: 'dr-alexander-brown', url: 'https://xsgames.co/randomusers/assets/avatars/male/13.jpg' },
  { name: 'dr-nisha-gupta', url: 'https://xsgames.co/randomusers/assets/avatars/female/14.jpg' }
];

const outputDir = path.join(__dirname, '../public/doctors');

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

async function downloadAndProcessImage(doctor) {
  return new Promise((resolve, reject) => {
    https.get(doctor.url, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download image for ${doctor.name}: ${response.statusCode}`));
        return;
      }

      const chunks = [];
      response.on('data', (chunk) => chunks.push(chunk));
      response.on('end', async () => {
        const buffer = Buffer.concat(chunks);
        const outputPath = path.join(outputDir, `${doctor.name}.jpg`);
        
        try {
          // Process image with sharp
          await sharp(buffer)
            .resize(200, 200, {
              fit: 'cover',
              position: 'center'
            })
            .jpeg({ quality: 90 })
            .toFile(outputPath);
          
          console.log(`✓ Successfully processed image for ${doctor.name}`);
          resolve();
        } catch (error) {
          console.error(`Error processing image for ${doctor.name}:`, error);
          reject(error);
        }
      });
    }).on('error', (error) => {
      console.error(`Network error for ${doctor.name}:`, error);
      reject(error);
    });
  });
}

async function processAllImages() {
  console.log('Starting image download and processing...');
  
  for (const doctor of doctors) {
    try {
      await downloadAndProcessImage(doctor);
    } catch (error) {
      console.error(`Failed to process ${doctor.name}:`, error);
    }
  }
  
  console.log('All images processed successfully!');
}

processAllImages(); 