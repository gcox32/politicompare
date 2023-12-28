// src/components/CandidateDisplay.js
import React from 'react';

const CandidateDisplay = ({ candidate, toggleIssue, expandedIssues }) => {
    // Placeholder data
    const placeholder = {
        name: "Candidate Name",
        headshot: "/placeholder-headshot.png",
        office: "Currently Held Office",
        issues: [
            {
                issueA: {
                    title: "Issue A",
                    stance: "Unknown",
                    description: "Description not available"
                }
            },
            {
                issueB: {
                    title: "Issue B",
                    stance: "Unknown",
                    description: "Description not available"
                }
            },
            {
                issueC: {
                    title: "Issue C",
                    stance: "Unknown",
                    description: "Description not available"
                }
            }
        ]
    };

    // Use candidate data if available, otherwise use placeholder
    const displayData = candidate || placeholder;

    return (
        <div className="candidate-display flex-1 p-4 border border-gray-300 rounded shadow">
            <h2 className="text-xl font-semibold text-gray-700">{displayData.name}</h2>
            <img src={displayData.headshot} alt={`${displayData.name} headshot`} className="rounded-full w-32 h-32 my-3" />
            <p className="text-md text-gray-600">{displayData.office}</p>
            <div className="issues mt-4">
            {displayData.issues.map((issueObj, index) => {
                const issueKey = Object.keys(issueObj)[0];
                const issue = issueObj[issueKey];
                const isExpanded = expandedIssues.includes(issueKey);

                return (
                    <div key={index} className="mb-4">
                        <h3 
                            className="text-lg font-semibold text-gray-700 cursor-pointer flex justify-between items-center"
                            onClick={() => toggleIssue(issueKey)}
                        >
                            {issue.title}
                            <span className={`transition-transform duration-200 ${isExpanded ? 'rotate-90' : ''}`}>▶</span>
                        </h3>
                        <div className={`transition-all duration-200 overflow-hidden ${isExpanded ? 'max-h-screen' : 'max-h-0'}`}>
                            <p className="text-sm text-gray-500">Stance: {issue.stance}</p>
                            <p className="text-md text-gray-600">{issue.description}</p>
                        </div>
                    </div>
                );
            })}
        </div>
        </div>
    );
};

export default CandidateDisplay;
