const https = require('https');

const urls = [
    "https://images.unsplash.com/photo-1595078475328-1ab05d0a6a0e?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1555597673-b21d5c935865?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop"
];

let successCount = 0;

urls.forEach(url => {
    https.get(url, (res) => {
        if (res.statusCode === 200) {
            console.log(`[OK] ${url}`);
            successCount++;
        } else {
            console.error(`[FAIL] ${url} - Status: ${res.statusCode}`);
        }

        if (successCount === urls.length) {
            console.log("All 4 Taekwondo images validated successfully!");
        }
    }).on('error', (e) => {
        console.error(`[ERROR] ${url} - ${e.message}`);
    });
});
