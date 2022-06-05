
const data = {
    "currency": "€",
    "sneakers": [
      {
        "model": "Nike ZoomX<br>Vaporfly NEXT 2",
        "price": "254.99",
        "image_url": "https://static.nike.com/a/images/t_default/ffe4182a-19a6-4d9c-941e-3249637de7ba/custom-nike-vaporfly-next-2-by-you.png",
        "link": "https://www.nike.com/be/en/t/zoomx-vaporfly-next-2-road-racing-shoes-821S4F/DV3030-700"
      },
      {
        "model": "Nike LeBron IX",
        "price": "229.99",
        "image_url": "https://static.nike.com/a/images/t_default/9cd5e7a2-2a85-4285-b328-9761db759ca2/lebron-ix-shoes-Nl4LDm.png",
        "link": "https://www.nike.com/be/en/t/lebron-ix-shoes-Nl4LDm/DJ3908-600"
      },
      {
        "model": "Nike Air Max 97<br>Unlocked By You",
        "price": "219.99",
        "image_url": "https://static.nike.com/a/images/t_default/dfc7f465-167e-4f04-bf84-f230a0d05b17/custom-nike-air-max-97-unlocked-by-you.png",
        "link": "https://www.nike.com/be/en/u/custom-nike-air-max-97-unlocked-by-you-10001289/3293960037"
      },
      {
        "model": "Nike Air<br>VaporMax Plus",
        "price": "209.99",
        "image_url": "https://static.nike.com/a/images/t_default/ih3jdlbdabdlzsfkzflb/%D0%BA%D1%80%D0%BE%D1%81%D1%81%D0%BE%D0%B2%D0%BA%D0%B8-air-vapormax-plus-7bNRWl.png",
        "link": "https://www.nike.com/be/en/t/air-vapormax-plus-shoes-tCcrMN/CK0900-001"
      },
      {
        "model": "Nike Air Max Plus 3<br>Air Max Month",
        "price": "179.99",
        "image_url": "https://static.nike.com/a/images/t_default/44aebc6f-2a84-4719-bd39-5fe8ded99cce/air-max-plus-3-air-max-month-shoes-KC9Crq.png",
        "link": "https://www.nike.com/be/en/t/air-max-plus-3-air-max-month-shoes-KC9Crq/DR8602-001"
      },
      {
        "model": "LeBron 19 Low",
        "price": "159.99",
        "image_url": "https://static.nike.com/a/images/t_default/dce8d398-c5ea-4737-8b28-29e514f08a8d/lebron-19-low-basketball-shoes-2m2Ls4.png",
        "link": "https://www.nike.com/be/en/t/lebron-19-low-basketball-shoes-16mdR5/DM1058-200"
      },
      {
        "model": "Jordan Air<br>200E SP",
        "price": "149.99",
        "image_url": "https://static.nike.com/a/images/t_default/f7badce8-59ce-4528-a7de-516475019d1f/jordan-air-200e-sp-mens-shoes-vzzgrb.png",
        "link": "https://www.nike.com/be/en/t/jordan-air-200e-sp-shoes-78Qmws/DQ6385-360"
      },
      {
        "model": "Zion 1 SP",
        "price": "129.99",
        "image_url": "https://static.nike.com/a/images/t_default/d7453e5e-b619-4d46-9abd-502fe5ebcc54/zion-1-sp-basketball-shoes-3KZmvv.png",
        "link": "https://www.nike.com/be/en/t/zion-1-sp-basketball-shoes-3KZmvv/DQ4706-086"
      }
    ]
  }

const baners = document.querySelector('.baners')




for(let i = 0; i<data.sneakers.length; i++){
    
    baners.insertAdjacentHTML('afterbegin',
    `
    
    <div class="baner" onclick="myhref('${data.sneakers[i].link}');">
    <div class="logo-wrap">
    <img src="./assets/Vector.png" alt="">
</div>
<div class="slide">
    <div class="title-wrap">
        <h3 class="title">${data.sneakers[i].model}</h3>
    </div>
    <div class="price-wrap">
        <p class="price">${data.currency}${data.sneakers[i].price}</p>
    </div>
    <div class="img-wrap">
        <img class="img" src="${data.sneakers[i].image_url}" alt="model">
    </div>
</div>


</div>
            
    `)
    function myhref(web){
        window.location.href = web;}

}



const btn = document.querySelector('.btn')
let slideIndex = 0;
showSlides(slideIndex);

function currentSlide(n) {

    showSlides(slideIndex = n);
}
function nextSlide() {
    btn.classList.remove('active')
    console.log('rem');
    showSlides(slideIndex += 1);

}

function showSlides(n) {
    let i;
    const slides = document.querySelectorAll(".baner");
    
   
    if (n +1  > slides.length) {
       
      slideIndex = 0
    }
    if (n < 0) {
        slideIndex = slides.length
    }
  
  
    for (let slide of slides) {
        
        slide.style.zIndex = '-1';
        slide.classList.remove('show'); 
       
        
        
    }   
   
    slides[slideIndex].classList.add('show'); 
    console.log('add');
    setTimeout(()=>{
        btn.classList.add('active')
    },1800)
   
    setTimeout(nextSlide,3000);

    
   
    
    
}