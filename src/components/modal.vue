<template>
  <div class="modal-overlay" @click.stop.prevent="$emit('closeModal')">
    <div class="modal" >
      <ul>
        <li>gender: {{ this.address.gender }}</li>
        <li>name: {{ this.address.name }}</li>
        <li>tel: {{ this.address.tel }}</li>
        <li>email: {{ this.address.email }}</li>
        <li>city: {{ this.address.city }}</li>
        <li>address: {{ this.address.address }}</li>
        <li>freight:{{ this.freight }}</li>
        <li>cardName: {{ this.cardInformation.name }}</li>
        <li>cardNumber: {{ this.cardInformation.cardNumber }}</li>
        <li>ardDate: {{ this.cardInformation.cardDate }}</li>
        <li>cardLastNumber:{{ this.cardInformation.cardLastNumber }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    show: Boolean,
    freight: String,
    address: Object,
    cardInformation: Object,
  },
};
</script>
<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  background-color: #000000da;
  z-index: 11;
}
.modal {
  text-align: center;
  background-color: white;
  height: 500px;
  width: 500px;
  margin-top: 10%;
  padding: 60px 0;
  border-radius: 20px;
}
</style>

