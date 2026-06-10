import React from 'react';
import { useRoute } from 'wouter';
import { topicDataMap } from '../data';

export default function TopicPage() {
  const [match, params] = useRoute<{ id: string }>('/topic/:id');
  
  if (!match || !params) return null;

  const topicId = params.id;
  const data = topicDataMap[topicId];

  if (!data) {
    return (
      <div className="flex-1 w-full max-w-7xl mx-auto p-4 md:p-8 flex flex-col items-center justify-center min-h-[50vh]">
        <h2 className="text-2xl font-bold text-slate-300">Topic not found</h2>
        <p className="text-slate-500 mt-2">The topic '{topicId}' could not be evaluated.</p>
        <a href="/" className="mt-6 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded font-medium transition-colors">
          Return Home
        </a>
      </div>
    );
  }

  return (
    <div className="flex-1 w-full max-w-7xl mx-auto p-4 md:p-8 flex flex-col gap-10 font-sans">
      {/* Header section */}
      <div className="border-l-4 border-amber-500 pl-6 py-2 shrink-0 bg-[#0d1b33]/40 p-6 rounded-r-xl mb-4 shadow-sm border border-slate-800">
        <h2 className="text-3xl font-bold text-amber-400 uppercase tracking-wide font-serif">
          {data.title}
        </h2>
        <p className="text-base text-slate-300 mt-3 max-w-4xl leading-relaxed">
          {data.description}
        </p>
      </div>

      {/* Sections rendering */}
      <div className="flex flex-col gap-12">
        {data.sections.map((section, sIdx) => {
          return (
            <section key={sIdx} className="shrink-0 bg-[#0A192F] rounded-xl shadow-lg border border-slate-700/60 overflow-hidden flex flex-col backdrop-blur-md">
              <div className="bg-[#112240] text-amber-500 px-6 py-4 font-bold uppercase tracking-wider text-sm border-b border-slate-700/80 font-serif">
                {section.sectionTitle}
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left border-collapse min-w-[600px]">
                  <thead className="bg-[#0A192F] text-slate-400 border-b-2 border-slate-700">
                    <tr>
                      {section.headers.map((header, hIdx) => (
                        <th key={hIdx} className="p-4 border-r border-slate-800 font-semibold last:border-r-0 whitespace-nowrap">
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800 font-sans text-slate-300 bg-[#0d1b33]/30">
                    {section.tableData.map((row, rIdx) => (
                      <tr key={rIdx} className="hover:bg-slate-800/80 transition-colors">
                        {row.map((cell, cIdx) => (
                          <td key={cIdx} className={`p-4 border-r border-slate-800 last:border-r-0 align-top ${cIdx === 0 ? 'font-medium text-amber-100 bg-[#112240]/40' : ''}`}>
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
