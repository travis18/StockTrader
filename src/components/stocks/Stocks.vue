<template>
  <div>
    <app-stock v-for="stock in stocks" :key="stock.id"></app-stock>
  </div>
</template>

<script>
import Stock from "./Stock.vue";
export default {
  data() {
    return {
      stocks: [
        { id: 1, name: "BMW", price: 200 },
        { id: 2, name: "Apple", price: 250 },
        { id: 3, name: "Google", price: 220 },
        { id: 4, name: "facebook", price: 180 }
      ]
    };
  },
  components: {
    appStock: Stock
  }
};
</script>
