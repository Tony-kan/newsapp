//👇🏻 base URL
const apiBaseUrl = "https://newsapi.org/v2";

//👇🏻 breaking news endpoint
const breakingNewsUrl = `${apiBaseUrl}/top-headlines?country=us&apiKey=${process
    .env.EXPO_PUBLIC_NEWS_API_KEY!}`;

//👇🏻 recommended news endpoint
const recommendedNewsUrl = `${apiBaseUrl}/top-headlines?country=us&category=business&apiKey=${process
    .env.EXPO_PUBLIC_NEWS_API_KEY!}`;

//👇🏻 fetch by category  endpoint
const discoverNewsUrl = (discover: string) =>
    `${apiBaseUrl}/top-headlines?country=us&category=${discover}&apiKey=${process
        .env.EXPO_PUBLIC_NEWS_API_KEY!}`;

//👇🏻 search news endpoint
const searchNewsUrl = (query: string) =>
    `${apiBaseUrl}/everything?q=${query}&apiKey=${process.env
        .EXPO_PUBLIC_NEWS_API_KEY!}`;

//👇🏻 API function call
const newsApiCall = async (endpoints: string) => {
    try {
        const response = await fetch(endpoints);
        const data = await response.json();
        return data;
    } catch (err) {
        console.error(err);
    }
};

//👇🏻 returns breaking news
export const fetchBreakingNews = async () => {
    return await newsApiCall(breakingNewsUrl);
};

//👇🏻 returns recommended news
export const fetchRecommendedNews = async () => {
    return await newsApiCall(recommendedNewsUrl);
};

//👇🏻 returns news based on a category
export const fetchDiscoverNews = async (discover: string) => {
    return await newsApiCall(discoverNewsUrl(discover));
};

//👇🏻 returns search query news
export const fetchSearchNews = async (query: string) => {
    const endpoint = searchNewsUrl(query);
    return await newsApiCall(endpoint);
};