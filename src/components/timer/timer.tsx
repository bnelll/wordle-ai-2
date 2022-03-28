import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";

export const AutoCounter = () => {
    const [ count, setCount ] = useState(0);
    const timerRef = useRef<NodeJS.Timeout>();

    useEffect(() => {
        timerRef.current = setInterval (() => {
            setCount(c => c + 1);
        }, 1000);

        return () => {
            clearInterval(timerRef.current!);
        };
    }, [ timerRef, setCount ]);
    return (
    count
    );
};
