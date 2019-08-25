import api from "../commons/api"
import {homeUrl} from "../commons/urls"

export default {
    getHomeData(cb){
        api.get(homeUrl,cb)
    }
}