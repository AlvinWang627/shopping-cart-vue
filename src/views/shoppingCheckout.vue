<template>
  <div>
    <navbar />
    <div class="main-content">
      <div class="title">結帳</div>
      <div class="checkout-content">
        <stepper :page="page" />
        <shippingAddress
          @address-update="addressUpdate"
          v-show="page === 'address'"
        />
        <shippingMethod
          v-show="page === 'method'"
          @freight-update="freightUpdate"
        />
        <paymentInformation
          @information-update="informationUpdate"
          v-show="page === 'payment'"
        />
        <div class="btn-control">
          <button
            class="btn-control_outline w-100"
            v-show="page !== 'address'"
            @click.stop.prevent="previousPage"
          >
            ← 上一步
          </button>
          <button
            class="btn-control_primary w-100"
            @click.stop.prevent="nextPage"
            v-show="page !== 'payment'"
          >
            下一步 →
          </button>
          <button
            class="btn-control_primary w-100"
            @click.stop.prevent="handleSubmit"
            v-show="page === 'payment'"
          >
            送出申請
          </button>
        </div>
      </div>
      <shoppingCart :initial-shoppingcartcontent="shoppingcartContent" />
    </div>
  </div>
</template>


<script>
import navbar from "../components/navbar.vue";
import stepper from "../components/stepper.vue";
import shippingAddress from "../components/shippingAddress.vue";
import shippingMethod from "../components/shippingMethod.vue";
import paymentInformation from "../components/paymentInformation.vue";
import shoppingCart from "../components/shoppingCart.vue";

const dummyData = {
  product: [
    {
      id: 1,
      name: "破壞補丁修正牛仔褲",
      price: "3999",
      quantity: 1,
      image: "https://i.imgur.com/GNZfzPb.jpg",
    },
    {
      id: 2,
      name: "刷色直筒牛仔褲",
      price: "1299",
      quantity: 1,
      image: "https://i.imgur.com/bctudDc.jpg",
    },
  ],
};
export default {
  components: {
    navbar,
    stepper,
    shippingAddress,
    shippingMethod,
    paymentInformation,
    shoppingCart,
  },
  data() {
    return {
      page: "address",
      step: 0,
      nextStep: "下一步 →",
      shoppingcartContent: {
        product: {
          id: -1,
          name: "",
          price: "",
          quantity: "",
          image: "",
        },
        freight: "免費",
      },
      address: {
        gender: "",
        name: "",
        tel: "",
        email: "",
        city: "",
        address: "",
      },
      cardInformation: {
        cardName: "",
        cardNumber: "",
        cardDate: "",
        cardLastNumber: "",
      },
    };
  },
  created() {
    this.fetchProduct();
  },
  methods: {
    //換下一頁function
    nextPage() {
      if (this.step === 0) {
        this.page = "method";
        this.step += 1;
      } else if (this.step === 1) {
        this.page = "payment";
        this.step += 1;
      }
    },
    //換上一頁function
    previousPage() {
      if (this.step === 1) {
        this.page = "address";
        this.step -= 1;
      } else if (this.step === 2) {
        this.page = "method";
        this.step -= 1;
      }
    },
    fetchProduct() {
      this.shoppingcartContent.product = dummyData.product;
    },
    // 把step1 資料回傳
    addressUpdate(payload) {
      this.address = payload;
    },
    // 把step2 資料回傳
    freightUpdate(payload) {
      this.shoppingcartContent.freight = payload;
    },
    //把step3資料回傳
    informationUpdate(payload) {
      this.cardInformation = payload;
    },
    handleSubmit() {
      console.log(`
        gender: ${this.address.gender}
        name: ${this.address.name}
        tel: ${this.address.tel}
        email: ${this.address.email}
        city: ${this.address.city}
        address: ${this.address.address}
        freight:${this.shoppingcartContent.freight}
        cardName: ${this.cardInformation.cardName}
        cardNumber: ${this.cardInformation.cardNumber}
        cardDate: ${this.cardInformation.cardDate}
        cardLastNumber: ${this.cardInformation.cardLastNumber}
      `);
    },
  },
};
</script>

