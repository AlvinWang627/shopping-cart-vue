<template>
  <div class="part">
    <h3 class="part-name">運送方式</h3>
    <div class="form-step2">
      <label
        :for="shippingMethod.id"
        v-for="(shippingMethod, index) in shippingMethods"
        :key="shippingMethod.id"
      >
        <div
          :class="[
            'shipping-method',
            { active: shippingMethod.id === currentPick },
          ]"
          @click.stop="freightActive(index)"
          @click.stop.prevent="handleFreight"
        >
          <input
            name="radio"
            type="radio"
            class="shipping-method_btn"
            :id="shippingMethod.id"
            :checked="shippingMethod.id === currentPick"
          />
          <h3 class="shipping-method_way">{{ shippingMethod.way }}</h3>
          <div class="shipping-method_price">{{ shippingMethod.fright }}</div>
          <h4 class="shipping-method_day">{{ shippingMethod.way }}</h4>
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
          id: 1,
          way: "標準運送",
          fright: "免費",
          day: "約3~7個工作天",
        },
        {
          id: 2,
          way: "DHL 貨運",
          fright: "$500",
          day: "48小時內到達",
        },
      ],
      currentPick: 1,
      currentFreight: "免費"
    };
  },
  methods: {
    //讓運費預設在"免費"欄位(checked)、點擊時加上active的class用
    freightActive(index) {
      this.currentPick = this.shippingMethods[index].id;
      this.currentFreight = this.shippingMethods[index].fright
    },
    handleFreight() {
      this.$emit("freight-update", this.currentFreight);
    },
  },
};
</script>