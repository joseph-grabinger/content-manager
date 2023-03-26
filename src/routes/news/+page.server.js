import { getNews } from '$lib/db';

export async function load() {
    const news = getNews();

    return { news };
}
