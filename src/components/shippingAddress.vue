<template>
  <div class="part">
    <h3 class="part-name">寄送地址</h3>
    <div class="form-step1">
      <div class="input-gender">
        <label for="">稱謂</label>
        <select placeholder="先生">
          <option value="">先生</option>
          <option value="">小姐</option>
        </select>
      </div>
      <div class="input-name">
        <label for="">性名</label>
        <input type="text" placeholder="請輸入姓名" />
      </div>
      <div class="input-phone">
        <label for="">電話</label>
        <input type="text" placeholder="請輸入行動電話" />
      </div>
      <div class="input-email">
        <label for="">E-mail</label>
        <input type="text" placeholder="請輸入電子郵件" />
      </div>
      <div class="input-cities">
        <label for="">縣市</label>
        <select name="cities" id="">
          <option value="" disabled selected>請選擇縣市</option>
          <option value="">台北市</option>
          <option value="">新北市</option>
        </select>
      </div>
      <div class="input-address">
        <label for="">地址</label>
        <input type="text" placeholder="請輸入地址" />
      </div>
    </div>
  </div>
</template>


<script>
export default {
  
}
</script>