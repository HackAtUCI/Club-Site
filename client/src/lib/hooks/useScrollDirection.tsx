import { useState, useEffect } from "react";

export default function useScrollDirection() {
    const [scrollingDown, setScrollingDown] = useState(false);

    useEffect(() => {
        let lastY = window.scrollY;
        const handleScroll = () => {
            const currentY = window.scrollY;
            if (currentY > lastY){
                setScrollingDown(true)
            }else{
                setScrollingDown(false)
            }
            lastY = currentY;
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return scrollingDown;
}
