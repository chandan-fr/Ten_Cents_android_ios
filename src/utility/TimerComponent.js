import { useState, useEffect } from 'react';

const useTimer = (initialTime) => {
    const parseTime = (timeString) => {
        const minutes = parseInt(timeString.split('m')[0], 10);
        return minutes * 60;
    };

    const [secondsLeft, setSecondsLeft] = useState(parseTime(initialTime));

    useEffect(() => {
        if (secondsLeft <= 0) return;

        const interval = setInterval(() => {
            setSecondsLeft(prev => prev - 1);
        }, 1000);

        return () => clearInterval(interval);
    }, [secondsLeft]);

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    return formatTime(secondsLeft);
};

export default useTimer;