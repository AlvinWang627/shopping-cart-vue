<template>
  <div class="shopping-cart-content">
    <div class="cart-title">購物籃</div>
    <div class="product-content">
      <div
        class="product-content_item"
        v-for="(product, index) in products"
        :key="product.id"
      >
        <img :src="product.image" alt="" />
        <div class="product-content_item_detail">
          <h3 class="product-content_item_detail_name">{{ product.name }}</h3>
          <div class="quantity-control">
            <button
              class="btn-minus"
              @click.stop.prevent="minusBtn(index), saveStorage(index)"
            >
              –
            </button>
            <div class="quantities">{{ product.quantity }}</div>
            <button
              class="btn-add"
              @click.stop.prevent="addBtn(index), saveStorage(index)"
            >
              ＋
            </button>
          </div>
          <div class="product-content_item_detail_price" id="product-1">
            ${{ product.price }}
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
      <div>${{ this.subTotal }}</div>
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
  methods: {
    //購物車加號按鈕
    addBtn(index) {
      // 數量+1
      this.products[index].quantity += 1;
      //讓右邊商品金額同步更新
      if (this.products[index].name === "破壞補丁修正牛仔褲") {
        this.products[index].price = this.products[index].quantity * 3999;
      } else {
        this.products[index].price = this.products[index].quantity * 1299;
      }
    },
    //購物車減號按鈕
    minusBtn(index) {
      //預防變成負的
      if (this.products[index].quantity === 0) {
        return;
      }
      //數量-1
      this.products[index].quantity -= 1;
      //讓右邊商品金額同步更新
      if (this.products[index].name === "破壞補丁修正牛仔褲") {
        this.products[index].price = this.products[index].quantity * 3999;
      } else {
        this.products[index].price = this.products[index].quantity * 1299;
      }
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
  },
  created() {
    this.handleSubtotal();
  },
  watch: {
    //小計更新用，金額有變就更新
    listenChange: {
      handler: function () {
        if (this.initialShoppingcartcontent.freight === "免費") {
          this.subTotal =
            parseInt(this.products[0].price) + parseInt(this.products[1].price);
        } else {
          this.subTotal =
            parseInt(this.products[0].price) +
            parseInt(this.products[1].price) +
            500;
        }
      },
      deep: true,
    },
  },
};
</script>