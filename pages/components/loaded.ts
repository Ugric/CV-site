import { useEffect, useState } from "react";

function useIsLoaded(): boolean {
    const [loaded, setloaded] = useState(false);
    useEffect(() => {
        setloaded(true);
    }, []);
    return loaded;
}

export default useIsLoaded;
