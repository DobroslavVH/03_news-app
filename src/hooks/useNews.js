import axios from "axios";

export const fetchNews = async ({ categories, countries }) => {

    const API_KEY = "apiKey=a8f31bc8eb22494a844c62dbc7b72b55";
    const URL = "https://newsapi.org/v2/top-headlines?";

    let filteredData = []
    let category = []
    let country = []

    for (let cou = 0; cou < countries.length; cou++) {
        const reqCountry = countries[cou];
        console.log('reqCountry', reqCountry)
        for (let cat = 0; cat < categories.length; cat++) {
            const reqCategory = categories[cat];
            console.log('reqCategory', reqCategory)
            await axios.get(`${URL}${API_KEY}&category=${reqCategory}&country=${reqCountry}`)
                .then(response => {
                    filteredData = [...filteredData, response.data.articles]
                    category = [...category, reqCategory]
                    country = [...country, reqCountry]
                })
                .catch((err) => console.log(err))
        }
    }

    return ({
        filteredData,
        country,
        category
    })
}

const useNews = async ({ countries, categories }) => {

    const news = await fetchNews({ countries, categories })

    return news
}

export default useNews