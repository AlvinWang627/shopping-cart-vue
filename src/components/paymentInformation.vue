<template>
  <div class="part">
    <h3 class="part-name">付款資訊</h3>
    <div class="form-step3">
      <div class="credit-card">
        <div class="credit-card_name">
          <label for="">持卡人姓名</label>
          <input
            type="text"
            placeholder="John Doe"
            v-model="cardInformation.cardName"
          />
        </div>
        <div class="credit-card_number">
          <label for="">卡號</label>
          <input
            type="text"
            placeholder="1111 2222 3333 4444"
            v-model="cardInformation.cardNumber"
          />
        </div>
        <div class="credit-card_date">
          <label for="">有效期間</label>
          <input
            type="text"
            placeholder="MM/YY"
            v-model="cardInformation.cardDate"
          />
        </div>
        <div class="credit-card_lastNumber">
          <label for="">CVC / CCV</label>
          <input
            type="text"
            placeholder="123"
            v-model="cardInformation.cardLastNumber"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const STORAGE_KEY_3 = "shopping-cart-cardInformation"
export default {
  data() {
    return {
      cardInformation: {
        cardName: "",
        cardNumber: "",
        cardDate: "",
        cardLastNumber: "",
      },
    };
  },
  created() {
    this.cardInformation = JSON.parse(localStorage.getItem(STORAGE_KEY_3)) || this.cardInformation
  },
  methods: {
    saveStorage() {
      localStorage.setItem(STORAGE_KEY_3, JSON.stringify(this.cardInformation))
    }
  },
  watch: {
    cardInformation: {
      handler: function handleChange() {
        this.saveStorage()
        this.$emit("information-update", this.cardInformation);
      },
      deep: true,
    },
  },
};
</script>