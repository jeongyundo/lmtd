import axios from 'axios'

export default axios.create({
    baseURL: 'https://raw.githubusercontent.com/jeongyundo/lmtd/master/lmtd-frontend/src/db/db1.json'
})