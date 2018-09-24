<template>
  <div class="col-sm-6 col-md-4">
    <div class="panel panel-success">
      <div class="panel-heading">
        <div class="panel-title">
          <h3>
              {{stock.name}}
            <small>(Price: {{stock.price}})</small>
          </h3>
        </div>
      </div>
      <div class="panel-body">
        <div class="pull-left">
          <input 
                  type="number"
                  class="form-control"
                  placeholder="Quantity"
                  v-model = "quantity" />
        </div>
        <div class="pull-right">
          <button class="btn btn-success" :disabled="isBuyable">Buy</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["stock"],
  data() {
    return {
      quantity: 0
    };
  },
  computed: {
    isBuyable() {
      if (this.quantity > 0 && Number.isInteger(Number(this.quantity))) {
        return false;
      }
      return true;
    }
  },
  method: {
    buyStock() {
      var order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity
      };
      this.quantity = 0;
    }
  }
};
</script>
