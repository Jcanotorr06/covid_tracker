import axios from "axios";

const URL = 'https://api.covid19api.com/'


export const fetchData = async () =>{
    try {
        const{data:{Global:{TotalConfirmed, TotalDeaths, TotalRecovered}, Date}} = await axios.get(`${URL}summary`);
        return({TotalConfirmed, TotalDeaths, TotalRecovered, Date});
    } catch (error) {
        return(error);
    }
};

export const fetchCountries = async () =>{
    try {
        const {data} = await axios.get(`${URL}countries`)
        return data.map((country) => [country.Country, country.Slug]);
    } catch (error) {
        return error;
    }
}

 export const fetchDailyData = async (country) => {

    let changableUrl = URL;

    if(country) {
        changableUrl = `${URL}dayone/country/${country}`
    }

    try {
        const {data} = await axios.get(changableUrl);

        return data.map(
            ({Confirmed, Deaths, Active, Date}) => (
                {confirmed:Confirmed, deaths:Deaths, active:Active, date:Date}
            )
        );
    } catch (error) {
        return error;
    }
} 