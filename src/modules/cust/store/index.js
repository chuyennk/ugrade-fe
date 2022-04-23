import { defineStore } from "pinia";
import axios from "axios";

export const useCustStore = defineStore('custStore', {
    state: ()=>({
        searchResult: {
            strSearch: '',
            message: '',
            results: []
        },
        custInfo: []
    }),
    actions: {
        async fuzzySearch(strSearch) {
            try {
                const res = await axios.get(import.meta.env.VITE_BE_URL + ':' + import.meta.env.VITE_BE_PORT + '/cust/fuzzysearch/' + strSearch)
                this.searchResult = {
                    strSearch: strSearch,
                    message: res.data.message,
                    results: res.data.params ? res.data.params : [],
                }
            } catch (e) {
                this.searchResult = {
                    strSearch: strSearch,
                    message: e.message,
                    results: [],
                }
            }
        },
        async getCustByID( custID) {
            try {
                const res = await axios.get(import.meta.env.VITE_BE_URL + ':' + import.meta.env.VITE_BE_PORT + '/cust/getcust/' + custID)
                const custInfo = { ...res.data }
                if (custInfo.message == 'OK') {
                    this.custInfo = custInfo.params
                } else {
                    this.custInfo = []
                }
            } catch (e) {
                return { message: e.message, params: 'error' }
            }
        }
    }

})