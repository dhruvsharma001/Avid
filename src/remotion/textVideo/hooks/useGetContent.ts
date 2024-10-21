import { useState, useEffect } from 'react';
import { prefetch } from 'remotion';

type FetchAndPreload = {
    free: () => void;
    waitUntilDone: () => Promise<string>;
};
function useGetContent(url: string | undefined, contentType: string = 'image/png') {
    const [blobURL, setBlobURL] = useState<string>();
    const [prefetchedObject, setPrefetchedObject] = useState<FetchAndPreload | null>(null)
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch your content here and update the state.
        // This is just a placeholder, replace it with your actual logic.
        if (url)
            fetch(url)
                .then(async response => {
                    const data = await response.blob()
                    const blobUrl = URL.createObjectURL(data);
                    if (blobURL) {
                        const res = prefetch(blobURL, { method: 'blob-url', contentType })
                        setPrefetchedObject(res)
                    }
                    setBlobURL(blobURL);
                    setLoading(false);
                })
                .catch(error => {
                    setError(error)
                    setLoading(false);
                });
    }, [url]);

    return { prefetchedObject, blobURL, error, loading };
}

export default useGetContent;