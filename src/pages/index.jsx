import React, { useState } from 'react';
import Head from 'next/head';
import Search from '@components/Search';
import CandidateDisplay from '@components/Candidate';
import RootLayout from '../app/layouts/layout';

export default function Home() {
    // Example candidate data (replace with actual data fetching logic)
    const [candidateA, setCandidateA] = useState(null);
    const [candidateB, setCandidateB] = useState(null);

    const [expandedIssues, setExpandedIssues] = useState([]);

    const toggleIssue = (issueKey) => {
        setExpandedIssues(prev => 
            prev.includes(issueKey)
                ? prev.filter(key => key !== issueKey)
                : [...prev, issueKey]
        );
    };

    const handleSearchLeft = (query) => {
        console.log('Searching for Left Candidate:', query);
        setCandidateA(query);
    };

    const handleSearchRight = (query) => {
        console.log('Searching for Right Candidate:', query);
        setCandidateB(query);
    };

    return (
        <RootLayout>
            <Head>
                <title>Home | PolitiCompare</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="container mx-auto p-4">
                <h1 className="text-center text-3xl font-bold text-gray-800 my-6">PolitiCompare</h1>

                <Search onSearchLeft={handleSearchLeft} onSearchRight={handleSearchRight} />

                <div className="flex flex-col md:flex-row gap-4">
                    <CandidateDisplay 
                    candidate={candidateA}
                    toggleIssue={toggleIssue} 
                    expandedIssues={expandedIssues}
                    />
                    <CandidateDisplay 
                    candidate={candidateB} 
                    toggleIssue={toggleIssue} 
                    expandedIssues={expandedIssues}
                    />
                </div>
            </main>
        </RootLayout>
    );
}