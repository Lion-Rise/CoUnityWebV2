import fs from 'fs';
import path from 'path';

const directoryPath = path.join(process.cwd(), 'COUNITYGIF');
const targetPath = path.join(process.cwd(), 'public/assets/animations/hero');

if (!fs.existsSync(targetPath)) {
    fs.mkdirSync(targetPath, { recursive: true });
}

fs.readdir(directoryPath, (err, files) => {
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    }

    // Filter for jpg files and sort them naturally
    const jpgFiles = files.filter(file => file.endsWith('.jpg')).sort((a, b) => {
        const numA = parseInt(a.match(/frame_(\d+)/)[1]);
        const numB = parseInt(b.match(/frame_(\d+)/)[1]);
        return numA - numB;
    });

    jpgFiles.forEach((file, index) => {
        const oldPath = path.join(directoryPath, file);
        // Zero-pad the index to 3 digits (000, 001, etc.)
        const newFilename = `frame_${String(index).padStart(3, '0')}.jpg`;
        const newPath = path.join(targetPath, newFilename);

        fs.copyFile(oldPath, newPath, (err) => {
            if (err) throw err;
            console.log(`${file} -> ${newFilename}`);
        });
    });

    console.log(`Processed ${jpgFiles.length} frames.`);
});
