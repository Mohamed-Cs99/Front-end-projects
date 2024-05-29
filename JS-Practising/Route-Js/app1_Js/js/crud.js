let pName = document.getElementById("pName");
let type = document.getElementById("type");
let id = document.getElementById("id");
let price = document.getElementById("price");
let quantity = document.getElementById("quantity");
let model = document.getElementById("model");
let desc = document.getElementById("Description");
//global 
let productsList = [];

function addNewItem() {
   if (checkEmpty() == false) {
      alert("Check Empty Inputs!");
   }
   else {
      let product =
      {
         _name: pName.value,
         _type: type.value,
         _id: id.value,
         _price: price.value,
         _quantity: quantity.value,
         _model: model.value,
         _desc: desc.value
      }

      productsList.push(product);
      //clearForm();
      displayProducts();
   }


}

function clearForm() {
   pName.value = "";
   type.value = "";
   id.value = "";
   price.value = "";
   quantity.value = "";
   model.value = "";
   desc.value = "";
}

function displayProducts() {
   let bx = ``;
   for (let i = 0; i < productsList.length; i++) {
      bx += `
      <div class="col-md-4 text-center my-3">
                    <div class="member position-relative ">
                        <img src="imgs/cc.webp" class="w-100" alt="carSpare">
                        <div class="caption text-white position-absolute px-3 ">
                            <h2><span class="mainColor">Name : </span> ${productsList[i]._name}</h2>
                            <p><span class="mainColor">Type : </span> ${productsList[i]._type}</p>
                            <p><span class="mainColor">Price : </span> ${productsList[i]._price}</p>
                            <p><span class="mainColor">Quantity : </span> ${productsList[i]._quantity}</p>
                            <p><span class="mainColor">Model : </span> ${productsList[i]._model}</p>
                            <p><span class="mainColor">Description : </span> ${productsList[i]._desc}</p>
                            <button  class="btn btn-outline-success  ">Update</button>
                            <button  class="btn btn-outline-warning ">Delete</button>
                        </div>
                    </div>
                </div>
      
      `
   }
   document.getElementById("demo").innerHTML = bx;

}

function updateProduct() {

}

function deleteProduct() {

}

function checkEmpty() {
   if (pName.value == "" || type.value == "" || id.value == "" || price.value == "" || quantity.value == "" || model.value == "" || desc.value == "") {
      return false;
   }
   else return true;
}

function Search(txt) {
   let nwBox = ``;
   for (let i = 0; i < productsList.length; i++) {
      if (productsList[i]._name.toLowerCase().includes(txt.toLowerCase())) {
         nwBox += `
              <div class="col-md-4 text-center my-3">
              <div class="member position-relative ">
                  <img src="imgs/cc.webp" class="w-100" alt="carSpare">
                  <div class="caption text-white position-absolute px-3 ">
                      <h2><span class="mainColor">Name : </span> ${productsList[i]._name}</h2>
                      <p><span class="mainColor">Type : </span> ${productsList[i]._type}</p>
                      <p><span class="mainColor">Price : </span> ${productsList[i]._price}</p>
                      <p><span class="mainColor">Quantity : </span> ${productsList[i]._quantity}</p>
                      <p><span class="mainColor">Model : </span> ${productsList[i]._model}</p>
                      <p><span class="mainColor">Description : </span> ${productsList[i]._desc}</p>
                      <button  class="btn btn-outline-success  ">Update</button>
                      <button  class="btn btn-outline-warning ">Delete</button>
                  </div>
              </div>
          </div>
              `

      }
   }
   document.getElementById("demo").innerHTML = nwBox;
}