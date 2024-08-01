import axios from 'axios';

const url = 'https://www.googleapis.com/books/v1/volumes';

export default async function searchBooks(inputValue, categories, order, startIndex = 0) {
    try {
        let apiUrl = `${url}?q=${inputValue}&orderBy=${order}&startIndex=${startIndex}&maxResults=20`;

        if (categories !== 'all') {
            apiUrl = `${url}?q=${inputValue}+subject:${categories}&orderBy=${order}&startIndex=${startIndex}&maxResults=20`;
        }

        const response = await axios.get(apiUrl);
        return response.data.items || [];
    } catch (error) {
        console.error('Error fetching books', error);
        return [];
    }
}
