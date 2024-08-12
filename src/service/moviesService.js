export const getMovies = async (apiUrl, params = {}) => {
    const url = new URL(apiUrl);
    Object.entries(params).forEach(([key, value]) => value != null && url.searchParams.append(key, value));

    const response = await fetch(url.toString());

    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

    return response.json();
};
