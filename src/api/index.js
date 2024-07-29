import axios from 'axios';

const url = 'https://www.googleapis.com/books/v1/volumes';

export default async function searchBooks(queryValue, categories, order, startIndex = 0) {
    try {
        let apiUrl = `${url}?q=${queryValue}&orderBy=${order}&startIndex=${startIndex}&maxResults=20`;
        if (categories !== 'all') {
            apiUrl += `&subject:${categories}`;
        }

        const response = await axios.get(apiUrl);
        return response.data.items || [];
    } catch (error) {
        console.error('Error fetching books', error);
        return [];
    }
}
