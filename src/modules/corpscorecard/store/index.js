import { defineStore } from "pinia";
import axios from "axios";

export const useCorpScStore = defineStore('corpScStore', {
    state: ()=>({
        scList: [],
        scData: {}
    }),
    actions: {
        async getScorecardList(custID) {
            try {
                const res = await axios.get(import.meta.env.VITE_BE_URL + ':' + import.meta.env.VITE_BE_PORT + '/sc/getscorecardlist/' + custID)

                if (res.data.message == 'OK') this.scList = res.data.params
                else this.scList = []
        
                return res.data
            } catch (e) {
                return { message: e.message, params: 'error' }
            }
        },
        async getScorecard(scID) {
            try {
                const res = await axios.get(import.meta.env.VITE_BE_URL + ':' + import.meta.env.VITE_BE_PORT + '/sc/getscorecard/' + scID)
                if (res.data.message == 'OK') this.scData = res.data.params
                return res.data
            } catch (e) {
                return { message: e.message, params: 'error' }
            }
        },
        async createNewScorecard(scNewData) {
            try {
                const res = await axios.post(import.meta.env.VITE_BE_URL + ':' + import.meta.env.VITE_BE_PORT + '/sc/createNewScorecard', scNewData)
                this.scData = res.data.params
                return res.data
            } catch (e) {
                return { message: e.message, params: 'error' }
            }
        },
        async saveScorecard(scData) {
            try {
                const res = await axios.post(import.meta.env.VITE_BE_URL + ':' + import.meta.env.VITE_BE_PORT + '/sc/savescorecard', scData)
                this.scData = res.data.params
                return res.data
            } catch (e) {
                return { message: e.message, params: 'error' }
            }
        },
        async getActScModels() {
            try {
                const res = await axios.get(import.meta.env.VITE_BE_URL + ':' + import.meta.env.VITE_BE_PORT + '/sc/getActScModels')
                return res.data
            } catch (e) {
                return { message: e.message, params: 'error' }
            }
        },
        async saveScTemplate(scData) {
            try {
                res = await axios.post(import.meta.env.VITE_BE_URL + ':' + import.meta.env.VITE_BE_PORT + '/sc/savetemplate', scData)
                this.scData = res.data
                return res.data
            } catch (e) {
                return { message: e.message, params: 'error' }
            }
        },
        async getParams(paramname) {
            try {
                const res = await axios.get(import.meta.env.VITE_BE_URL + ':' + import.meta.env.VITE_BE_PORT + '/params/' + paramname)
                return res.data
            } catch (e) {
                return { message: e.message, params: 'error' }
            }
        }
    }

})