<template>
  <div class="shopping-cart-content">
    <div class="cart-title">購物籃</div>
    <div class="product-content">
      <div
        class="product-content_item"
        v-for="product in products"
        :key="product.id"
      >
        <img :src="product.image" alt="" />
        <div class="product-content_item_detail">
          <h3 class="product-content_item_detail_name">{{ product.name }}</h3>
          <div class="quantity-control">
            <button
              class="btn-minus"
              @click.stop.prevent="minusBtn(product.id)"
            >
              –
            </button>
            <div class="quantities">{{ product.quantity }}</div>
            <button class="btn-add" @click.stop.prevent="addBtn(product.id)">
              ＋
            </button>
          </div>
          <div class="product-content_item_detail_price" id="product-1">
            {{ product.price | formatPrice }}
          </div>
        </div>
      </div>
    </div>
    <div class="dividing-line"></div>
    <div class="freight">
      <h4>運費</h4>
      <div
        class="freight-price"
        v-show="initialShoppingcartcontent.freight === '免費'"
      >
        免費
      </div>
      <div
        class="freight-price"
        v-show="initialShoppingcartcontent.freight !== '免費'"
      >
        $500
      </div>
    </div>
    <div class="dividing-line"></div>
    <div class="subtotal">
      <h4>小計</h4>
      <div>{{ this.subTotal | formatPrice }}</div>
    </div>
  </div>
</template>


<script>
export default {
  props: {
    initialShoppingcartcontent: {
      type: Object,
      require: true,
    },
  },
  data() {
    return {
      products: this.initialShoppingcartcontent.product,
      freight: this.initialShoppingcartcontent.freight,
      subTotal: 5298,
    };
  },
  filters: {
    //將金額增加千分位","
    formatPrice(price) {
      return `$${price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
    },
  },
  methods: {
    //購物車加號按鈕
    addBtn(id) {
      const updateProducts = this.products.map((product) => {
        if (product.id === id) {
          return { ...product, quantity: (product.quantity += 1) };
        }
        return product;
      });

      this.products = updateProducts;
    },
    //購物車減號按鈕
    minusBtn(id) {
      const updateProducts = this.products.map((product) => {
        if (product.id === id) {
          return { ...product, quantity: (product.quantity -= 1) };
        }
        return product;
      });
      this.products = updateProducts;
    },
    fetchFreight() {
      this.freight = this.initialShoppingcartcontent.freight;
    },
    // 做create freight用
    handleSubtotal() {
      if (this.freight === "免費") {
        this.subTotal =
          parseInt(this.products[0].price) + parseInt(this.products[1].price);
      } else {
        this.subTotal =
          parseInt(this.products[0].price) +
          parseInt(this.products[1].price) +
          500;
      }
    },
  },
  computed: {
    //watch使用，用來一次監聽兩個變數
    listenChange() {
      const { products } = this;
      const { freight } = this.initialShoppingcartcontent;
      return { products, freight };
    },
    subTotal2() {
      //小計總額計算用，商品加上運費，丟到watch做監控
      const currentFreight =
        this.initialShoppingcartcontent.freight === "免費" ? 0 : 500;
      const productsPrice = this.products.reduce((acc, product) => {
        return (acc += product.quantity * product.price);
      }, 0);
      return currentFreight + productsPrice;
    },
  },
  created() {
    this.handleSubtotal();
  },
  watch: {
    //小計更新用，金額有變就更新
    listenChange: {
      handler: function () {
        this.subTotal = this.subTotal2;
      },
      deep: true,
    },
  },
};
</script>