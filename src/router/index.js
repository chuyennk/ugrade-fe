import {createRouter, createWebHistory} from 'vue-router'
import homeRoute from '../modules/home/route'
import custRoute from '../modules/cust/route'
import corpscRoute from '../modules/corpscorecard/route'
import corpfssRoute from '../modules/corpfss/route'


const routes = [
    homeRoute,
    custRoute,
    corpscRoute,
    corpfssRoute
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router