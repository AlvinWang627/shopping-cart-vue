<template>
  <div>
    <div class="stepper-container">
      <div :class="['step active', {checked: page !== 'address'}]">
        <div class="circle"></div>
      </div>
      <div class="step-name">寄送地址</div>
      <span class="connect-line"></span>
      <div :class="['step', {checked: page === 'payment'}] ">
        <div class="circle"></div>
      </div>
      <div class="step-name">運送方式</div>
      <span class="connect-line"></span>
      <div class="step">
        <div class="circle"></div>
      </div>
      <div class="step-name">付款資訊</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    page: String
  }
}
</script>