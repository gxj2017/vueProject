import Axios from "axios";

export default {

    /**
     * @param url
     * @param cb
     */
    get(url, cb) {
        Axios.get(url)
            .then((data) => {
                cb(data)
            })
    }
}
