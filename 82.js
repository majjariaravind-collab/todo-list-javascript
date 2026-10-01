const inputName = document.querySelector(".name");
const inputPrice=document.querySelector(".price");
const addButton=document.querySelector(".add");
const total=document.querySelector(".total");
const list=document.querySelector('.lists');

let totalAmount=0;
addButton.addEventListener('click',()=>{
  const name=inputName.value;
  const price=Number(inputPrice.value);
  if(name==="" || price<=0){
    alert("You should enter the details properly.")
    return;
  }

  const li=document.createElement('li');
  li.textContent=`${name} - ₹${price}`;
  list.appendChild(li);

  totalAmount+=price;

  total.textContent=`₹${totalAmount}`;
  inputName.value="";
  inputPrice.value="";

});

