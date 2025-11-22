import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-secondary py-8 text-center text-gray-400 text-sm">
            <p>&copy; {new Date().getFullYear()} Portfolio. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
