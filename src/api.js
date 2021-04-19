// base url
const base_url = 'https://api.rawg.io/api/';

const key= 'e8b6e59b8c494aeaa8d4d6e316e7b9a0'

// https://api.rawg.io/api/games?key=e8b6e59b8c494aeaa8d4d6e316e7b9a0&dates=2019-09-01,2019-09-30&platforms=18,1,7

const getCurrentMonth = () => {
    const month = new Date().getMonth() + 1;
    if (month < 10) {
        return `0${month}`;
    } else {
        return month;
    }
};

const getCurrentDay = () => {
    const day = new Date().getDate();
    if (day < 10) {
        return `0${day}`;
    } else {
        return day;
    }
}

const currentYear = new Date().getFullYear()
const currentMonth = getCurrentMonth()
const currentDay = getCurrentDay()
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`
const lastYear = `${currentYear-1}-${currentMonth}-${currentDay}`
const nextYear = `${currentYear+1}-${currentMonth}-${currentDay}`

// popular games

const popular_games= `games?key=${key}&dates=${lastYear},${currentDate}&ordering=-ratings&page_size=10`

export const popularGamesURL = () => `${base_url}${popular_games}`

