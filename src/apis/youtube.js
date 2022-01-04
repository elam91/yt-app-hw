import axios from "axios";

const KEY = "AIzaSyBLCxE4dpSOKTcmt1vS9yWobaRl_nEBCN0";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: { part: "snippet", type: "video", maxResults: 5, key: KEY },
});
