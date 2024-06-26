import React, { useState, useEffect } from 'react';

const WidthDetector = ({ onWidthChange }) => {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            const isNarrow = window.innerWidth <= 1024;
            setWidth(window.innerWidth);
            onWidthChange(isNarrow);
        };

        window.addEventListener('resize', handleResize);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [onWidthChange]);

    // Return null because we are only using this component for logic, not rendering
    return null;
};

export default WidthDetector;