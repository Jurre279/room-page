const caroselH1 = document.querySelector(".carosel-h1");
const caroselText = document.querySelector(".carosel-text");
const top = document.querySelector(".top");

const caroselinfo = [
  {
    h1: "Discover innovative \n ways to decorate",
    text: "We provide unparalleled quality, comfort and style for property owners across the country. Our experts combine form and function to bring your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
    img: "../images/mobile-image-hero-1.jpg",
  },
  {
    h1: "We are available \n all across the globe",
    text: "With stores all over the world, its easy for you to find furniture for your home or business. Locally, we can be found in most major cities across the country. Find the location using our store locator. Do you have questions? Dont hesitate to contact us today",
    img: "../images/mobile-image-hero-2.jpg",
  },
  {
    h1: "Manufactured with \n the best materials",
    text: "Our modern furniture store offers a high level of quality. Our company has invested in advanced technology to ensure that each product is made as perfect and consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
    img: "../images/mobile-image-hero-3.jpg",
  },
];

let caroselIndex = 0;

function changecaroselinfo() {
  caroselH1.textContent = caroselinfo[caroselIndex].h1;
  caroselText.textContent = caroselinfo[caroselIndex].text;
  top.style.backgroundImage = `url(${caroselinfo[caroselIndex].img})`;

  caroselIndex++;

  if (caroselIndex === caroselinfo.length) {
    caroselIndex = 0;
  }
}

setInterval(changecaroselinfo, 5000);

const rightArrow = document.querySelector(".right-arrow");
const leftArrow = document.querySelector(".left-arrow");

rightArrow.addEventListener("click", () => {
  caroselIndex++;

  if (caroselIndex === caroselinfo.length) {
    caroselIndex = 0;
  }
  changecaroselinfo();
});

leftArrow.addEventListener("click", () => {
  caroselIndex--;
  if (caroselIndex < 0) {
    caroselIndex = caroselData.length - 1;
  }
  caroselIndex--;

  changecaroselinfo();
});
