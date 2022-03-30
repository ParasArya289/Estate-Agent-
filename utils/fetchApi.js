import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "X-RapidAPI-Host": "bayut.p.rapidapi.com",
      "X-RapidAPI-Key": "4705de155fmsh41d4bbcdd99a1bbp1af4f5jsn4ef31394ebe4",
    },
  });
  return data;
};
