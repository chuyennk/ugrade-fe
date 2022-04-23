import { defineStore } from "pinia";
import axios from "axios";

export const useHomeStore = defineStore('homeStore', {
    state: ()=>({
        loginInfo: {},
    }),
    getters: {
        isLoggedIn: state => !!state.loginInfo.loginToken
    },
    actions: {
        async loggingIn({ usr, pwd }) {
            try {
                const res = await axios.post(import.meta.env.VITE_BE_URL + ':' + import.meta.env.VITE_BE_PORT + '/user/login', { usr, pwd })
                // console.log(res.data)
                this.loginInfo = res.data.params
                // this.loginInfo = res.data
                //   return res.data
            } catch (err) {
                console.log(err)
            }
        }
    }

})