const top_header = document.querySelector("#top-header");
const restau_image = document.querySelector("#ydno_up_img");

const ydno_btn = document.querySelector("#ydno_btn");

const ydno_list = document.querySelector("#ydno_list");
const ydno_up_img = document.querySelector("#ydno_up_img");

const klw_btn = document.querySelector("#klw_btn");
const klw_list = document.querySelector("#klw_list");
const klw_up_img = document.querySelector("#klw_up_img");

const umw_btn = document.querySelector("#umw_btn");
const umw_list = document.querySelector("#umw_list");
const umw_up_img = document.querySelector("#umw_up_img");

const bkg_btn = document.querySelector("#bkg_btn");
const bkg_list = document.querySelector("#bkg_list");
const bkg_up_img = document.querySelector("#bkg_up_img");

const mly_btn = document.querySelector("#mly_btn");
const mly_list = document.querySelector("#mly_list");
const mly_up_img = document.querySelector("#mly_up_img");

const sku_btn = document.querySelector("#sku_btn");
const sku_list = document.querySelector("#sku_list");
const sku_up_img = document.querySelector("#sku_up_img");

const gg_btn = document.querySelector("#gg_btn");
const gg_list = document.querySelector("#gg_list");
const gg_up_img = document.querySelector("#gg_up_img");

const LL_btn = document.querySelector("#LL_btn");
const LL_list = document.querySelector("#LL_list");
const LL_up_img = document.querySelector("#LL_up_img");

const spt_btn = document.querySelector("#spt_btn");
const spt_list = document.querySelector("#spt_list");
const spt_up_img = document.querySelector("#spt_up_img");

const ang_btn = document.querySelector("#ang_btn");
const ang_list = document.querySelector("#ang_list");
const ang_up_img = document.querySelector("#ang_up_img");

const sssk_btn = document.querySelector("#sssk_btn");
const sssk_list = document.querySelector("#sssk_list");
const sssk_up_img = document.querySelector("#sssk_up_img");

const swt_btn = document.querySelector("#swt_btn");
const swt_list = document.querySelector("#swt_list");
const swt_up_img = document.querySelector("#swt_up_img");

const smdl_btn = document.querySelector("#smdl_btn");
const smdl_list = document.querySelector("#smdl_list");
const smdl_up_img = document.querySelector("#smdl_up_img");

const mth_btn = document.querySelector("#mth_btn");
const mth_list = document.querySelector("#mth_list");
const mth_up_img = document.querySelector("#mth_up_img");

const ok_btn = document.querySelector("#ok_btn");
const ok_list = document.querySelector("#ok_list");
const ok_up_img = document.querySelector("#ok_up_img");

const l_7_btn = document.querySelector("#l_7_btn");
const l_7_list = document.querySelector("#l_7_list");
const l_7_up_img = document.querySelector("#l_7_up_img");

const bos_btn = document.querySelector("#bos_btn");
const bos_list = document.querySelector("#bos_list");
const bos_up_img = document.querySelector("#bos_up_img");

const mr_btn = document.querySelector("#mr_btn");
const mr_list = document.querySelector("#mr_list");
const mr_up_img = document.querySelector("#mr_up_img");

document.onscroll = function () {
  if (window.scrollY > 50) {
    top_header.style.backgroundColor = "#2f2f41";
  } else {
    top_header.style.backgroundColor = "rgba(50, 46, 46, 0.317)";
  }
};

// mly_btn.onclick = function () {
// if (mly_list.style.display = "none") {
//     mly_list.style.display = "block";
//     mly_up_img.style.display = "none";
// } else {
//     mly_list.style.display = "none";
// }
// }
ydno_btn.addEventListener("click", () => {
  restau_image.classList.add("none");
  ydno_list.classList.add("block");
  klw_list.classList.remove("block");
  umw_list.classList.remove("block");
  bkg_list.classList.remove("block");
  mly_list.classList.remove("block");
});

// ydno_up_img.classList.add("none")
// klw_list.classList.add("none")
// umw_list.classList.add("none")
// bkg_list.classList.add("none")
// mly_list.classList.add("none")

// ydno_up_img.style.display = 'none'
// klw_list.style.display = 'none'
// umw_list.style.display = 'none'
// bkg_list.style.display = 'none'
// mly_list.style.display = 'none'

// ydno_up_img.classList.remove("block")
// klw_list.classList.remove("block")
// umw_list.classList.remove("block")
// bkg_list.classList.remove("block")
// mly_list.classList.remove("block")

klw_btn.addEventListener("click", () => {
  restau_image.classList.add("none");
  ydno_list.classList.remove("block");
  klw_list.classList.add("block");
  umw_list.classList.remove("block");
  bkg_list.classList.remove("block");
  mly_list.classList.remove("block");
});
umw_btn.addEventListener("click", () => {
  restau_image.classList.add("none");
  ydno_list.classList.remove("block");
  klw_list.classList.remove("block");
  umw_list.classList.add("block");
  bkg_list.classList.remove("block");
  mly_list.classList.remove("block");
});
bkg_btn.addEventListener("click", () => {
  restau_image.classList.add("none");
  ydno_list.classList.remove("block");
  klw_list.classList.remove("block");
  umw_list.classList.remove("block");
  bkg_list.classList.add("block");
  mly_list.classList.remove("block");
});
mly_btn.addEventListener("click", () => {
  restau_image.classList.add("none");
  ydno_list.classList.remove("block");
  klw_list.classList.remove("block");
  umw_list.classList.remove("block");
  bkg_list.classList.remove("block");
  mly_list.classList.add("block");
});

sku_btn.addEventListener("click", () => {
  sku_up_img.classList.add("none");
  sku_list.classList.add("block");
  gg_list.classList.remove("block");
  LL_list.classList.remove("block");
});
gg_btn.addEventListener("click", () => {
  sku_up_img.classList.add("none");
  gg_list.classList.add("block");
  sku_list.classList.remove("block");
  LL_list.classList.remove("block");
});
LL_btn.addEventListener("click", () => {
  sku_up_img.classList.add("none");
  LL_list.classList.add("block");
  gg_list.classList.remove("block");
  sku_list.classList.remove("block");
});

spt_btn.onclick = function () {
  spt_list.classList.toggle("block");
};

ang_btn.onclick = function () {
  ang_list.classList.toggle("block");
};

sssk_btn.onclick = function () {
  sssk_list.classList.toggle("block");
};

swt_btn.onclick = function () {
  swt_list.classList.toggle("block");
};

smdl_btn.onclick = function () {
  smdl_list.classList.toggle("block");
};

mth_btn.onclick = function () {
  mth_list.classList.toggle("block");
};
ok_btn.onclick = function () {
  ok_list.classList.toggle("block");
};
l_7_btn.onclick = function () {
  l_7_list.classList.toggle("block");
};
bos_btn.onclick = function () {
  bos_list.classList.toggle("block");
};
mr_btn.onclick = function () {
  mr_list.classList.toggle("block");
};
