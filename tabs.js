const ACCOUNT = document.querySelector(".view__account");
const SHOP = document.querySelector(".view__shop");

const ACCOUNT_TAB = document.querySelector("#my-fonts-button");
const SHOP_TAB = document.querySelector("#buy-fonts-button");

const ACTIVE_TAB_CLASS = "--active-tab";
const SHOWN_BLOCK_CLASS = "--shown";


ACCOUNT_TAB.addEventListener("click", function(){
  this.classList.add(ACTIVE_TAB_CLASS);
  SHOP_TAB.classList.remove(ACTIVE_TAB_CLASS);

  ACCOUNT.classList.add(SHOWN_BLOCK_CLASS);
  SHOP.classList.remove(SHOWN_BLOCK_CLASS);
});

SHOP_TAB.addEventListener("click", function(){
  this.classList.add(ACTIVE_TAB_CLASS);
  ACCOUNT_TAB.classList.remove(ACTIVE_TAB_CLASS);

  SHOP.classList.add(SHOWN_BLOCK_CLASS);
  ACCOUNT.classList.remove(SHOWN_BLOCK_CLASS);
});