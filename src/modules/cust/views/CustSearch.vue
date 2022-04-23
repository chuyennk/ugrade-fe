<template>
  <q-page padding>
    <cust-search-box />
    <!-- <div>{{ searchResult.results[0]}}</div> -->
    <div class="q-pa-md row items-start q-gutter-sm">
      <q-card
        v-ripple
        class="my-card column col-12 shadow-2 cursor-pointer q-hoverable"
        v-for="cust in searchResult.results"
        :key="cust.custID"
        @click="selectCust(cust.custID)"
      >
        <q-card-section class="q-py-xs q-px-md">
          <div class="row">
            <div class="text-body1 text-bold">{{ cust.custName }}</div>
            <q-space></q-space>
            <div class="text-caption">
              Fuzzy Matched Score :
              {{ Number.parseFloat(cust.confidenceScore).toFixed(1) }}
            </div>
          </div>
        </q-card-section>
        <q-separator />
        <q-card-section class="q-px-md q-py-xs">
          <div class="text-body2-thin">Customer ID: {{ cust.custID }}</div>
          <div class="text-body2-thin">
            Business Registration Number: {{ cust.bizRegNum }}
            - Registrated Date: {{ dateFunction.formatDate(cust.bizRegDate, "DD MMM YYYY") }}
          </div>
          <div class="text-body2-thin">
            Managed By: RMCode {{ cust.rmCode }} - Team {{ cust.teamCode }}
          </div>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script setup>
    import { storeToRefs } from "pinia"
    import CustSearchBox from "./CustSearchBox.vue"
    import { date } from "quasar"
    import { useRouter } from "vue-router"
    import {useCustStore} from "../store"
    import { useCorpScStore } from "../../corpscorecard/store"
    import { useCorpFssStore } from "../../corpfss/store"

    const custStore = useCustStore()
    const corpScStore = useCorpScStore()
    const corpFssStore = useCorpFssStore()

    const {searchResult} = storeToRefs(custStore)

    // use this function to format the date of bizregdate
    const dateFunction = date;

    const router = useRouter();

    const selectCust = async (custID) => {
      await custStore.getCustByID(custID)
      await corpScStore.getScorecardList(custID)
      await corpFssStore.populateFssData({
        custID: custID,
        fssLevelType: "C",
      }) //look for Advance Mobile for dev

      await router.push("/cust/info");
    };
</script>

<style lang="sass" scoped>
.my-card:hover
  background-color: #f1f1f1
</style>
