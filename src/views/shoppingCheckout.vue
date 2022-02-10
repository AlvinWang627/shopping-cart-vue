<template>
  <div>
    <navbar />
    <div class="main-content">
      <div class="title">結帳</div>
      <div class="checkout-content">
        <stepper :page = "page"/>
        <shippingAddress v-show="page === 'address'" />
        <shippingMethod
          v-show="page === 'method'"
          @freight-update="freightUpdate"
        />
        <paymentInformation v-show="page === 'payment'" />
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
          >
            {{ this.nextStep }}
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
        this.nextStep = "送出申請";
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
        this.nextStep = "下一步 →";
      }
    },
    fetchProduct() {
      this.shoppingcartContent.product = dummyData.product;
    },
    freightUpdate(payload) {
      this.shoppingcartContent.freight = payload;
    },
  },
};
</script>

