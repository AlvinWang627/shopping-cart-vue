<template>
  <div class="part">
    <h3 class="part-name">運送方式</h3>
    <div class="form-step2">
      <label for="radio-1">
        <div class="shipping-method active">
          <input
            name="radio"
            type="radio"
            class="shipping-method_btn"
            id="radio-1"
            checked
          />
          <h3 class="shipping-method_way">標準運送</h3>
          <div class="shipping-method_price">免費</div>
          <h4 class="shipping-method_day">約3~7個工作天</h4>
        </div>
      </label>
      <label for="radio-2">
        <div class="shipping-method">
          <input
            name="radio"
            type="radio"
            class="shipping-method_btn"
            id="radio-2"
          />
          <h3 class="shipping-method_way">DHL 貨運</h3>
          <div class="shipping-method_price">$500</div>
          <h4 class="shipping-method_day">48小時內送達</h4>
        </div>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      shippingMethods: [
        {
          way: "標準運送",
          price: "免費",
          day: "約3~7個工作天",
        },
        {
          way: "DHL 貨運",
          price: "$500",
          day: "48小時內到達",
        },
      ],
    };
  },
  methods: {
    
  }
};
</script>