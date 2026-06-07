const fs = require('fs');
let html = fs.readFileSync('financial-instruments.html', 'utf8');

html = html.replace("        </div>\n      </div>\n      </section>\n      </div>", "        </div>\n      </div>\n      </section>");
html = html.replace(/<div class="p-5 relative bg-amber-50">/, '<div class="p-5 relative bg-amber-50">\n<div>');
html = html.replace(/(<div class="text-xs text-slate-500 text-right mt-2".+<\/div>)\s+<\/div>\s+<\/div>/, '$1\n            </div>\n          </div>\n        </div>');

fs.writeFileSync('financial-instruments.html', html);
