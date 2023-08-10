
const generateQR = document.querySelector(".submit")
const input = document.querySelector("input")
const img = document.querySelector(".qr-code img")
const wrapper = document.querySelector(".wrapper")

generateQR.addEventListener("click", () => {
  const inputValue = input.value.trim()
  const qrImageUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${inputValue}`
  if(inputValue){
     img.src = qrImageUrl
    img. style.display = 'flex'
    wrapper.classList.add('active')
  }else{
    img.src = ''
    wrapper.classList.remove('active')
  }
 
})
