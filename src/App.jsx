import React from 'react';
const application = "application";
import Header from './components/Header';


export default function App() {
    return (
        <div className="app" role={application}>
            <div>
                <Header />
                <main>

                </main>
            </div>
        </div>
    );
}