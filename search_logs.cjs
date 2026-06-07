const fs = require('fs');
const path = require('path');

function searchForOriginals(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            searchForOriginals(fullPath);
        } else if (file.endsWith('.jsonl') || file.endsWith('.json')) {
            const content = fs.readFileSync(fullPath, 'utf8');
            if (content.includes('SECTION A: Core Technical Comparison Table') && content.includes('consolidation')) {
                console.log('Found in', fullPath);
            }
        }
    }
}

try {
    searchForOriginals('.gemini');
} catch (e) {
    console.log(e.message);
}
