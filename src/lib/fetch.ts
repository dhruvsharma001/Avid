

export async function nextFetch(url: string, options: any): Promise<{ data: any, status: number, ok: boolean }> {
    const resp = await fetch(url, { ...options, headers: { ...options.headers, 'Content-Type': 'application/json' } });
    const data = await resp.json();

    return { data, status: resp.status, ok: resp.ok };
}
