<template>
  <div id="shopping-cart">
    <router-view />
  </div>
</template>


<style lang="scss">
@import "assets/scss/main.scss";
body {
  margin: 0;
  padding: 0;
}
* {
  box-sizing: border-box;
}
h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0px;
  padding: 0px;
}
ul,
ol,
li {
  list-style: none;
  margin: 0px;
  padding: 0px;
}
a,
a:hover,
a:focus {
  text-decoration: none;
}
img {
  width: 100%;
  height: 100%;
  display: block;
}
.btn,
button,
button:focus,
input:focus,
textarea:focus,
select,
select:focus,
a:focus {
  outline: 0px !important;
}
button {
  background-color: transparent;
  border: 0;
  cursor: pointer;
}
button[disabled] {
  pointer-events: none;
}
input {
  padding: 0;
}
input:required {
  box-shadow: none;
}
input:invalid {
  box-shadow: none;
}

// sass basic setting
$body-bg: #ffffff;
$body-color: #18253d;
$white: #ffffff;
$dark-gray: #4a4a4a;
$light-gray: #2a2a2a; 

$sizes: (
  25: 25%,
  50: 50%,
  75: 75%,
  100: 100%,
);

/* 使用@each 產出css size設定 */
@each $prop, $abbrev in (width: w, height: h) {
  @each $num, $val in $sizes {
    .#{$abbrev}-#{$num} {
      #{$prop}: $val;
    }
  }
}

$spacer: 1rem;
$spacers: (
  0: 0,
  1: (
    $spacer * 0.25,
  ),
  2: (
    $spacer * 0.5,
  ),
  3: (
    $spacer * 0.75,
  ),
  4: $spacer,
  5: (
    $spacer * 1.25,
  ),
  6: (
    $spacer * 1.5,
  ),
  7: (
    $spacer * 1.75,
  ),
  8: (
    $spacer * 2,
  ),
);

%input-style {
  width: 100%;
  margin-top: 3px;
  height: 40px;
  padding-left: 1rem;
  border-radius: 4px;
  font-size: 12px;
  border: 1px solid #4a4a4a;
  &:hover,
  &:focus {
    border: 2px solid #4a4a4a;
  }
}

html {
  font-size: 16px;
  height: 100%;
  margin: 15px;
}

body {
  height: 100%;
  background: $body-bg;
  color: $body-color;
  font-family: Noto Sans TC;
}

.d-none {
  display: none;
}

.d-inline {
  display: inline;
}

.d-inline-block {
  display: inline-block;
}

.d-block {
  display: block;
}

.d-flex {
  display: flex;
}

.flex-column {
  flex-direction: column;
}

.justify-content-start {
  justify-content: flex-start;
}

.justify-content-end {
  justify-content: flex-end;
}

.justify-content-center {
  justify-content: center;
}

.justify-content-between {
  justify-content: space-between;
}

.justify-content-around {
  justify-content: space-around;
}

.align-content-start {
  align-content: flex-start;
}

.align-content-end {
  align-content: flex-end;
}

.align-content-center {
  align-content: center;
}

.align-items-start {
  align-items: flex-start;
}

.align-items-end {
  align-items: flex-end;
}

.align-items-center {
  align-items: center;
}

.text-center {
  text-align: center;
}

.text-right {
  text-align: right;
}

.text-left {
  text-align: left;
}

.cursor-pointer {
  cursor: pointer;
}

// style start
// header
.navbar {
  position: fixed;
  width: 100%;
  height: 60px;
  z-index: 10;
  background-color: $white;
  .navbar-toggle {
    visibility: hidden;
  }
  .navbar-toggle:checked ~ nav {
    display: block;
    transform: scale(1, 1);
    .nav-item {
      transition: opacity 0.2s ease-out 0.15s;
      opacity: 1;
      margin: 25px 0;
    }
    .icon-img {
      opacity: 1;
    }
  }
  .icon-list {
    display: flex;
    justify-content: center;
    align-items: start;
    background-color: $white;
  }
  .icon-img {
    height: 24px;
    width: 24px;
    margin-top: 1.5rem;
    margin-right: 15px;
    margin-left: 15px;
    margin-bottom: 1rem;
  }
  .navbar-list {
    position: absolute;
    top: 100%;
    width: 100%;
    text-align: center;
    margin-top: 1rem;
    transition: transform 0.3s ease-out;
    transform: scale(1, 0);
    transform-origin: top;
    ul {
      display: flex;
      flex-flow: column nowrap;
      justify-content: space-between;
      align-items: center;
      background-color: $white;
      a {
        color: black;
      }
    }
    .nav-item-dividing {
      display: block;
      width: 90%;
      height: 2px;
      background-color: rgba(42, 42, 42, 0.1);
    }
    .nav-item {
      background-color: $white;
      opacity: 0;
    }
    .icon-img {
      opacity: 0;
    }
  }
  .logo {
    margin: 0.2rem auto 0 auto;
    height: 30px;
    width: 135px;
  }
  .navbar-toggle-label {
    position: absolute;
    top: 0.25rem;
    bottom: 0;
    left: 3%;
    display: flex;
    align-items: center;
    .hamburger {
      width: 30px;
      height: 3px;
      background: $light-gray;
      position: relative;
    }
    .hamburger::before,
    .hamburger::after {
      content: "";
      position: absolute;
      background: $light-gray;
    }

    .hamburger::before {
      width: 20px;
      height: 3px;
      top: 8px;
    }
    .hamburger::after {
      width: 11px;
      height: 2.5px;
      top: 16px;
    }
  }
}

@media screen and (max-width: 375px) {
  .main-app {
    display: flex;
    justify-content: center;
  }
  .step-name {
    display: none;
  }
  .cart-title {
    display: none;
  }
}
.main-app {
  margin: 0 auto;
  width: 90%;
}
.main-app {
  width: 50%;
}

//stepper
.title {
  margin-top: 5rem;
  font-size: 24px;
  font-weight: bold;
  // margin-bottom: 1rem;
}
.circle {
  font-weight: bold;
  border: 1px solid $light-gray;
  height: 2rem;
  width: 2rem;
  border-radius: 50%;
}
.stepper-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1.5rem 0 2rem 0;
  .step {
    position: relative;
    display: flex;
    justify-content: center;
    text-align: center;
    &:nth-child(1) .circle::after {
      content: "1";
    }
    &:nth-child(4) .circle::after {
      content: "2";
    }
    &:nth-child(7) .circle::after {
      content: "3";
    }
    &.active {
      background-color: $white;
      border-radius: 50%;
      color: black;
    }
    &.checked .circle::after {
      content: "\2714";
      color: $white;
    }
    &.checked .circle {
      background-color: black;
    }
  }
  .connect-line {
    width: 3.9rem;
    background-color: black;
    border: 1px solid black;
  }
}

//form
.form-step1 {
  display: grid;
  grid-template-rows: repeat(5, 1fr);
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 0.5rem 1rem;
  width: 21rem;
  .input-gender {
    grid-column: 1 / 3;
    select {
      @extend %input-style;
      color: #999999;
    }
  }
  .input-name {
    grid-column: 3 / 6;
    input {
      @extend %input-style;
    }
  }
  .input-phone,
  .input-email,
  .input-cities,
  .input-address {
    grid-column: 1 / 6;
    input,
    select {
      @extend %input-style;
      color: #999999;
    }
  }
  label {
    display: block;
  }
}

//運送方式
.form-step2 {
  width: 21.5rem;
  .shipping-method {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: repeat(2, 1fr);
    border: 1px solid $light-gray;
    align-items: center;
    position: relative;
    height: 3.75rem;
    border-radius: 4px;
    margin-bottom: 20px;
    opacity: 0.5;
    &.active,
    &:hover {
      opacity: 1;
    }
    &_btn {
      grid-column: 1 / 2;
      position: absolute;
      top: 50%;
      left: 50%;
      margin: 0;
      transform: translate(-50%, -50%);
      -webkit-appearance: none;
      padding: 0.5rem;
      border: 1px solid $light-gray;
      border-radius: 50%;
      &:checked {
        box-shadow: inset 0 0 0 5px $light-gray;
        opacity: 1;
      }
    }
    &_way,
    &_day {
      grid-column: 2 / 7;
      margin-top: 2px;
    }
    &_price {
      grid-column: 7 / 8;
    }
  }
}

//付款資訊
.part-name {
  margin-bottom: 24px;
  width: 21rem;
}
.form-step3 {
  label {
    display: block;
    font-size: 12px;
    margin-bottom: 0.5rem;
  }
  input {
    @extend %input-style;
    margin-bottom: 0.68rem;
  }
  .credit-card {
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 0rem 1rem;
    &_name,
    &_number {
      grid-column: 1 / 3;
    }
    &_lastNumber {
      label {
        padding-top: 2px;
      }
    }
  }
}

// 購物籃
.shopping-cart-content {
  border-radius: 8px;
  border: 1px solid #f0f0f5;
  padding: 0.7rem 0.7rem;
  .freight,
  .subtotal {
    display: flex;
    justify-content: space-between;
    h4 {
      font-weight: normal;
    }
    .freight-price {
      font-weight: bold;
    }
  }
  .subtotal > div {
    font-weight: bold;
  }
  .product-content {
    display: flex;
    flex-flow: column nowrap;
    &_item {
      display: flex;
      justify-content: space-between;
      margin-bottom: 1rem;
      img {
        height: 100px;
        width: 100px;
        border-radius: 4px;
      }
      &_detail {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-end;
        &_price {
          font-weight: bold;
        }
        h3 {
          font-size: 1rem;
          font-weight: normal;
        }
        .quantity-control {
          display: flex;
          .quantities {
            margin: 0 2rem;
          }
          .btn-minus,
          .btn-add {
            font-weight: bold;
            height: 27px;
            width: 26px;
            font-size: 16px;
            background-color: #f0f0f0;
            border-radius: 50%;
            text-align: ceter;
          }
        }
      }
    }
  }
}

//按鈕
.btn-control {
  display: flex;
  justify-content: center;
  margin: 1.2rem 0 5rem 0;
  border-top: 1.5px solid #e6e6eb;
  padding-top: 22px;
  &_primary {
    color: $white;
    font-size: 14px;
    font-weight: 500;
    background-color: #f67599;
    border-radius: 8px;
    height: 46px;
  }
  &_outline {
    text-align: start;
    margin-right: 2rem;
  }
}
.dividing-line {
  margin: 1.5rem 0;
  border: 1px solid #f0f0f5;
}
footer {
  display: none;
}

// 電腦版
@media screen and (min-width: 375px) {
  .navbar {
    position: relative;
    .logo {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    .icon-list {
      grid-column: 5 / 6;
    }
    .navbar-list {
      all: unset;
      width: 100%;
      display: grid;
      grid-template-columns: 1fr 1fr auto 1fr;
      .icon-img {
        opacity: 1;
        margin: 0 0.5rem;
      }
      ul {
        flex-flow: row;
        .nav-item {
          opacity: 1;
          grid-column: 1 / 2;
        }
        .nav-item-dividing {
          display: none;
        }
      }
    }

    .navbar-toggle-label {
      display: none;
    }
  }
  .main-app {
    width: 90%;
  }
  .form-step1,
  .form-step2,
  .form-step3 {
    width: 100%;
  }
  .form-step1 {
    grid-template-rows: repeat(3, 1fr);
    .input-phone {
      grid-column: 1 / 4;
    }
    .input-email {
      grid-column: 4 / 6;
    }
    .input-cities {
      grid-column: 1 / 3;
    }
    .input-address {
      grid-column: 3 / 6;
    }
  }
  .main-content {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: 10% 48% 10%;
    height: 800px;
    grid-gap: 2rem;
  }
  .title {
    margin-top: 3rem;
    grid-row: 1 / 2;
    grid-column: 1 / 3;
  }
  .checkout-content {
    grid-column: 1 / 7;
    grid-row: 2 / 3;
  }
  //購物車
  .shopping-cart-content {
    grid-column: 8 / 13;
    grid-row: 2 / 4;
    padding: 2.5rem 1rem;
    position: relative;
    .product-content_item {
      justify-content: flex-start;
      &_detail {
        width: 100%;
        align-items: flex-start;
        justify-content: flex-start;
        margin-left: 1rem;
        display: grid;
        grid-template-columns: 70% 30%;
        grid-template-rows: 1fr 1fr;
        .quantity-control {
          grid-column: 1 / 2;
        }
        &_price {
          grid-column: 2 / 3;
          grid-row: 1 / 2;
          text-align: end;
        }
      }
    }
  }
  .btn-control {
    grid-column: 1 / 7;
    grid-row: 3 / 4;
    margin: 0.6rem 0 0 0;
    justify-content: flex-end;
    &_primary {
      max-width: 50%;
    }
  }
  .cart-title {
    font-size: 16px;
    font-weight: bold;
    line-height: 50px;
    padding-bottom: 1rem;
  }
  .part-name {
    font-size: 1.2rem;
  }
  .credit-card {
    &_name,
    &_number {
      max-width: 61%;
    }
    &_date,
    &_lastNumber {
      max-width: 85%;
    }
  }
  .step-name {
    // font-size: 1rem;
  }
  .circle {
    height: 1.5rem;
    width: 1.5rem;
  }
  // footer
  footer {
    background-color: #f6f7f8;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    padding-top: 30px;
    padding-bottom: 50px;
    .footer-logo {
      height: 2rem;
    }
    .footer-logo {
      margin: auto auto;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .cutomer-service,
    .about-us,
    .information {
      display: flex;
      justify-content: center;
      h3 {
        margin-bottom: 10px;
      }
      ul {
        text-align: start;
      }
    }
    .follow-alpha-shop {
      h3 {
        margin-bottom: 10px;
      }
      .social-media {
        .fab {
          margin-left: 2px;
          margin-top: 10px;
          margin-right: 18px;
        }
      }
    }
  }
}
</style>