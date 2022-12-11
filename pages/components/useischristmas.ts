import { useEffect, useState } from "react";
import useIsLoaded from "./loaded";

// make a react hook that switches to true when it is christmas day
function useIsChistmas() {
    const date = new Date();
    const loaded = useIsLoaded();
    const [isChristmas, setIsChristmas] = useState(
        loaded && date.getMonth() === 11
    );
    useEffect(() => {
        const loop = setInterval(() => {
            const date = new Date();
            if (date.getMonth() === 11) {
                setIsChristmas(true);
            } else {
                setIsChristmas(false);
            }
        }, 1000);
        return () => clearInterval(loop);
    }, []);
    return isChristmas;
}
export default useIsChistmas;
