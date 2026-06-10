const fs = require('fs');
const html = fs.readFileSync('cashflows.html', 'utf8');
const scriptMatches = html.match(/<script>([\s\S]*?)<\/script>/g);
if (scriptMatches && scriptMatches.length > 1) {
    const code = scriptMatches.slice(-1)[0].replace(/<script>/, '').replace(/<\/script>/, '');
    try {
        new Function(code);
        console.log('Valid JS');
    } catch(e) {
        console.error(e);
    }
} else {
    console.log("No scripts found");
}
