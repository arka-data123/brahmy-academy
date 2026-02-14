const https = require('https');

const urls = [
    "https://images.unsplash.com/photo-1595078475328-1ab05d0a6a0e?w=600&h=600&fit=crop",
    "https://images.unsplash.com/photo-1555597673-b21d5c935865?w=600&h=600&fit=crop",
    "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=600&h=600&fit=crop",
    "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=600&fit=crop",
    "https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?w=600&h=600&fit=crop",
    "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=600&h=600&fit=crop",
    "https://images.unsplash.com/photo-1517963879433-6ad2b056d712?w=600&h=600&fit=crop",
    "https://images.unsplash.com/photo-1590556409324-aa1d726e5c3c?w=600&h=600&fit=crop",
    "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&h=600&fit=crop",
    "https://images.unsplash.com/photo-1517438322307-e67111335449?w=600&h=600&fit=crop",
    "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=600&h=600&fit=crop",
    "https://images.unsplash.com/photo-1566241440091-ec10de8db2e1?w=600&h=600&fit=crop"
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
            console.log("All images validated successfully!");
        }
    }).on('error', (e) => {
        console.error(`[ERROR] ${url} - ${e.message}`);
    });
});
