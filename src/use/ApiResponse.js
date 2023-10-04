import axios from "axios";

const API_UNSPLASH = 'https://rickandmortyapi.com/api/'
export default async function useApiResponse({method, url, params = {}}) {
    try {
        let response = null

        await axios({
            method: method,
            url: `${API_UNSPLASH}${url}`,
            params: params,
            headers: {}
        })
            .then((res) => {
                response = res.data.results
            })
        console.log('RES', response)
        return response
    } catch (error) {
        console.error('Ошибка при загрузке данных:', error)
    }
}