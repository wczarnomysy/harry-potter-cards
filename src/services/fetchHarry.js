const ENDPOINT = "https://hp-api.herokuapp.com/api/characters";

const fetchHarry = () => fetch(ENDPOINT).then(res => res.json());

export default fetchHarry;
