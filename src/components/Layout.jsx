import React from 'react';
import Navbar from './Navbar';

const Layout = ({ children }) => {
    return (
        <div className="flex flex-col lg:flex-row min-h-screen bg-primary text-white">
            {/* Left Sidebar (Fixed on Desktop) */}
            <aside className="w-full lg:w-1/3 xl:w-1/4 lg:fixed lg:h-screen p-8 lg:p-12 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/10 z-50 bg-primary">
                <Navbar />
            </aside>

            {/* Right Content (Scrollable) */}
            <main className="w-full lg:w-2/3 xl:w-3/4 lg:ml-auto p-8 lg:p-20 flex flex-col gap-20 lg:gap-32">
                {children}
                <footer className="pt-20 pb-10 text-sm text-text-muted border-t border-white/10 mt-auto">
                    <p>&copy; {new Date().getFullYear()} Sahai Jordi Alan.</p>
                </footer>
            </main>
        </div>
    );
};

export default Layout;
