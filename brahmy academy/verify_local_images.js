const fs = require('fs');
const path = require('path');

const imagePaths = [
    "assets/images/gallery/taekwondo-1.jpg",
    "assets/images/gallery/taekwondo-2.png",
    "assets/images/gallery/taekwondo-3.webp",
    "assets/images/gallery/taekwondo-4.webp"
];

let successCount = 0;

imagePaths.forEach(relativePath => {
    const fullPath = path.join(__dirname, relativePath);

    fs.access(fullPath, fs.constants.F_OK, (err) => {
        if (err) {
            console.error(`[FAIL] File not found: ${relativePath}`);
        } else {
            console.log(`[OK] File exists: ${relativePath}`);
            successCount++;
        }

        if (successCount === imagePaths.length) {
            console.log("All 4 local gallery images verified successfully!");
        }
    });
});
