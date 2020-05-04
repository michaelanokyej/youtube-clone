import Axios from "axios"


// youtube key: AIzaSyDWeh1eN_GN8_w2CYKGcK_EsWWRkf3mLEc

export default Axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3"
})