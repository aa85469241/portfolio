import { useState, useEffect } from 'react'

export const useMediaQuery = (
    mediaQuery,
    defaultMatches = window.matchMedia(mediaQuery).matches
) => {
    const [isMatch, setIsMatch] = useState(defaultMatches)

    useEffect(() => {
        const media = window.matchMedia(mediaQuery);

        if (media.matches !== isMatch) setIsMatch(media.matches);

        const listener = () => setIsMatch(media.matches);

        media.addEventListener("change", listener);

        return () => media.removeEventListener("change", listener);
    }, [mediaQuery, isMatch])

    return isMatch;
}