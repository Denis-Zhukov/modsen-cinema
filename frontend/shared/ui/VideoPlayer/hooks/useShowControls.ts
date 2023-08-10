import { useEffect, useState } from 'react';

export const useShowControls = () => {
    const [showControls, setShowControls] = useState(true);

    useEffect(() => {
        let timerId: NodeJS.Timeout;
        const handleMouseMove = () => {
            document.body.style.cursor = 'auto';
            setShowControls(true);

            clearTimeout(timerId);

            timerId = setTimeout(() => {
                setShowControls(false);
                document.body.style.cursor = 'none';
            }, 3000);
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            clearTimeout(timerId);
        };
    }, []);

    return showControls;
};
