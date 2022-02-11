<template>
  <div class="part">
    <h3 class="part-name">寄送地址</h3>
    <div class="form-step1">
      <div class="input-gender">
        <label for="">稱謂</label>
        <select name="gender" v-model="address.gender">
          <option value="" disabled  selected>請選擇稱謂</option>
          <option value="先生" >先生</option>
          <option value="小姐">小姐</option>
        </select>
      </div>
      <div class="input-name">
        <label for="">姓名</label>
        <input
          type="text"
          placeholder="請輸入姓名"
          v-model="address.name"
        />
      </div>
      <div class="input-phone">
        <label for="">電話</label>
        <input type="text" placeholder="請輸入行動電話" v-model="address.tel"/>
      </div>
      <div class="input-email">
        <label for="">E-mail</label>
        <input type="text" placeholder="請輸入電子郵件" v-model="address.email"/>
      </div>
      <div class="input-cities">
        <label for="">縣市</label>
        <select name="cities" id="" v-model="address.city">
          <option value="" disabled selected >請選擇縣市</option>
          <option value="台北市">台北市</option>
          <option value="新北市">新北市</option>
        </select>
      </div>
      <div class="input-address">
        <label for="">地址</label>
        <input type="text" placeholder="請輸入地址" v-model="address.address"/>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      address: {
        gender:"",
        name: "",
        tel:"",
        email: "",
        city: "",
        address: ""
      },
    };
  },
  watch: {
    address : {
      handler: function handleChange() {
       this.$emit("address-update", this.address)
      },
      deep: true
    }
  }
};
</script>