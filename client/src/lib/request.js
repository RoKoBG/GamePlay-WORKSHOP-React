export const request = async (method, url, data) => {
    const response = await fetch(url, {
        method,
    });
    if (!response.ok) {
        throw new Error("Something happened");
    }

    const result = await response.json();
    
    return result;
};
