const https = require('https');

const candidate_urls = [
    // Taekwondo sparring / action
    "https://images.unsplash.com/photo-1595078475328-1ab05d0a6a0e?w=800&h=600&fit=crop", // Sparring/Competition
    "https://images.unsplash.com/photo-1555597673-b21d5c935865?w=800&h=600&fit=crop", // Training/Action
    "https://images.unsplash.com/photo-1510257321689-0ae28c31cb1f?w=800&h=600&fit=crop", // Kick/Action - This one was used before, let's re-verify or find better
    "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop", // Kick

    // New candidates from search intent (since direct IDs weren't in text, I'm inferring from typical findings or reusing high quality ones found previously that match)
    // Let's try to verify some robust martial arts IDs that likely exist or use the ones we know work and are relevant
    "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=800&h=600&fit=crop", // Uniform
    "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=800&h=600&fit=crop" // Action
];

let successCount = 0;

candidate_urls.forEach(url => {
    https.get(url, (res) => {
        if (res.statusCode === 200) {
            console.log(`[OK] ${url}`);
        } else {
            console.error(`[FAIL] ${url} - Status: ${res.statusCode}`);
        }
    }).on('error', (e) => {
        console.error(`[ERROR] ${url} - ${e.message}`);
    });
});
