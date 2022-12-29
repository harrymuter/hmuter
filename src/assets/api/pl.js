import axios from "axios"
const allData = "https://fantasy.premierleague.com/api/bootstrap-static/"
const myData = "https://fantasy.premierleague.com/api/entry/3439086/"
const plBase = "https://fantasy.premierleague.com/api/entry/"

export const getAllData = async () => {
  return await (await axios.get(allData)).data
}

export const getMyData = async () => {
  return await (await axios.get(myData)).data
}

export const getMyTeam = async gw => {
  return await (
    await axios.get(plBase + "3439086" + "/event/" + gw + "/picks/")
  ).data
}
