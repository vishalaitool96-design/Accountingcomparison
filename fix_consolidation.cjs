const fs = require('fs');

function fixConsolidation() {
  let s = fs.readFileSync('consolidation.html', 'utf8');

  const oldBStr = `      <!-- SECTION B -->
      <section id="section-b-container" data-diagnostic="tracked" class="shrink-0 mt-6 bg-amber-50 rounded-xl shadow-sm border border-amber-200 overflow-hidden flex flex-col h-full font-sans">`;

  const newBStr = `      <!-- SECTION B -->
      <div class="shrink-0 mt-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <section id="section-b-container" data-diagnostic="tracked" class="shrink-0 bg-amber-50 rounded-xl shadow-sm border border-amber-200 overflow-hidden flex flex-col h-full font-sans">`;

  s = s.replace(oldBStr, newBStr);

  const oldCEnd = `            </ul>
          </div>
        </div>
      </section>

      <!-- SECTION D -->`;

  const newCEnd = `            </ul>
          </div>
        </div>
      </section>
      </div>

      <!-- SECTION D -->`;

  s = s.replace(oldCEnd, newCEnd);
  
  // Need to fix Section C section start to remove any mt-6 or add h-full
  const sectionCOld = `      <!-- SECTION C -->
      <section class="shrink-0 bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col">`;
      
  const sectionCNew = `      <!-- SECTION C -->
      <section id="section-c" data-diagnostic="tracked" class="shrink-0 bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col h-full">`;
      
  s = s.replace(sectionCOld, sectionCNew);

  fs.writeFileSync('consolidation.html', s);
  console.log("Fixed consolidation");
}

fixConsolidation();
