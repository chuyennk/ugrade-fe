import { defineStore } from "pinia";

export const useCustStore = defineStore('storeCust', {
    state: ()=>({
        counter: 0,
        nameStore : 'Test'
    }),
    getters: {
        doubleCounter: state => {state.counter++}
    },
    actions: {
        addOne(){
            this.counter++;
        }
    }

})