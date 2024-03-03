const inputFieldName = document.querySelector(".form-control");
const btnCreate = document.querySelector("#create-btn");

// ADD butonuna tiklaninca olusacak table icin;
const myForm = document.querySelector("#my-form");

const myTbody = document.querySelector("tbody");

const btnAddField = document.createElement("button");

const createField = () => {
  //console.log("tiklandi");
  inputFieldName.style.fontSize="27px"

  if (inputFieldName.value == "") {
    alert("lutfen veri geriniz");
    return;
  }

  //  console.log(inputFieldName.value);



  const newFieldInput = document.createElement("input");
  newFieldInput.type = "text";
  newFieldInput.placeholder = inputFieldName.value.toUpperCase();
  newFieldInput.name = inputFieldName.value;
  newFieldInput.className = "form-control my-field";
  newFieldInput.style.fontSize = "24px";

  myForm.appendChild(newFieldInput);

  // const btnAddField=document.createElement("button")
  btnAddField.textContent = "ADD";
  btnAddField.className = "btn btn-sm btn-primary";
  btnAddField.type = "submit";
  btnAddField.style.fontSize = "20px";


  myForm.appendChild(btnAddField);

  const header = document.querySelector("thead tr");

  const newTh = document.createElement("th");
  newTh.textContent = inputFieldName.value.toUpperCase();

  header.appendChild(newTh);

  inputFieldName.value = ""; // burda yazmamiz lazim yoksa th lar gozukmez
};

//? click eventinden sonra bir fonksiyona gitsin ve o fonksiyonu calsitirsin istyrz.fakat bunu en sonda yazmaliyiz.kod okuma sirasina gore.

btnCreate.addEventListener("click", createField);

//!____________________________________________

myForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const formChildren = document.querySelectorAll(".my-field");
  console.log(formChildren); // NodeList [input.form-control.my-field]

  const myTr = document.createElement("tr");
 

  formChildren.forEach((child) => {
    //console.log(child);// butun inputu verir
    //console.log(child.value);

    const myTd = document.createElement("td");
    myTd.textContent = child.value.toUpperCase();
    myTd.style.fontSize="24px"
   

    // yanlis deger girilince duzeltmesi icin;

    myTd.addEventListener("click", (e) => {
      console.log(e.target);
      const newValue = prompt("Yeni degeri giriniz");
      if (newValue) e.target.textContent = newValue.toUpperCase();
    });

    myTr.appendChild(myTd);

    //  myTbody.appendChild(myTr);  // butun islemler bitince bunu sahiplendirelim
  });

  //? Delete button

  const deleteBtnTd = document.createElement("td");
  const deleteBtn = document.createElement("button");
  deleteBtn.className = "btn btn-sm btn-danger";

  deleteBtn.textContent = "Delete";
  deleteBtn.style.fontSize="24px"

  deleteBtnTd.appendChild(deleteBtn);
  myTr.appendChild(deleteBtnTd);


  myTbody.appendChild(myTr);

  // formu resetlemek icin;
  myForm.reset();

  deleteBtn.addEventListener("click", (e) => {
    //  console.log(e.target);
    deleteTodo(e.target.parentElement.parentElement);
  });
});

// delete fonksyonu

const deleteTodo = (todo) => {
  todo.remove();
};
