import { defineStore } from "pinia";
import axios from "axios";

export const useCorpFssStore = defineStore('corpFssStore', {
    state: ()=>({
        fssData: {},
    }),
    actions: {
        async populateFssData(cust) {
            try {
                const res = await axios.get(import.meta.env.VITE_BE_URL + ':' + import.meta.env.VITE_BE_PORT + '/fss/getfssdata/' + cust.custID + '/' + cust.fssLevelType)
                this.fssData = res.data
                // return {fssData}
            } catch (e) {
                this.fssData = {
                    fssInfo: {},
                    fssHeaders: [],
                    fssItems: [],
                }
            }
        },
        async saveFssData(fssData) {
            try {
                await axios.post(import.meta.env.VITE_BE_URL + ':' + import.meta.env.VITE_BE_PORT + '/fss/savefssdata', fssData)
                return { message: 'OK' }
            } catch (e) {
                return { message: e.message, params: 'error' }
            }
        }
    }

})