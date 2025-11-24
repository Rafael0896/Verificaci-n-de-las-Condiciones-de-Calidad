import React from 'react';
const application = "application";
import Header from './components/Header';
import ProcessLogTable from "./components/ProcessLogTable.jsx";
import BestPractices from "./components/BestPractices.jsx";
import QualityMetrics from "./components/QualityMetrics.jsx";


export default function App() {
    return (
        <div className="app" role={application}>
            <div>
                <Header />
                <main>
                    <ProcessLogTable />
                    <BestPractices />
                    <QualityMetrics />
                </main>
            </div>
        </div>
    );
}