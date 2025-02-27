"use client"

import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

interface TypeWritedProps {
    texts: string[];
    typeSpeed?: number;
    backSpeed?: number;
    backDelay?: number;
    startDelay?: number;
    loop?: boolean;
}

const TypeWrited: React.FC<TypeWritedProps> = ({
    texts,
    typeSpeed = 100,
    backSpeed = 100,
    backDelay = 1000,
    startDelay = 500,
    loop = false
}) => {
    const el = useRef<HTMLHeadingElement | null>(null);

    useEffect(() => {
        if (el.current) {
            const typed = new Typed(el.current, {
                strings: texts,
                typeSpeed,
                backSpeed,
                backDelay,
                startDelay,
                loop,
            });

            // Cleanup function to destroy Typed.js instance
            return () => {
                typed.destroy();
            };
        }
    }, [texts, typeSpeed, backSpeed, backDelay, startDelay, loop]);

    return (
        <div>
            <h1 ref={el}></h1>
        </div>
    );
};

export default TypeWrited;
