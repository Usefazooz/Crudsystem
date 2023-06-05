var inputName = document.getElementById("productName")
var inputPrice = document.getElementById("productPrice")
var inputCategory = document.getElementById("productCategory")
var inputDescription = document.getElementById("productDescription")
var searchInput=document.getElementById("searchInput")
var currentindex =0

var productList=[];
if(localStorage.getItem("productList")!=null){
    productList=JSON.parse(localStorage.getItem("productList"))
    display();
}

function addProduct(){
    var product = {
        name:inputName.value,
        price:inputPrice.value,
        category:inputCategory.value,
        description:inputDescription.value
    }
    productList.push(product);
    localStorage.setItem("productList",JSON.stringify(productList))
    display()
}
function display(){
    var yousef=""
    for(var i =1; i< productList.length ;i++)
    {
        yousef+=`<tr>
        <td>`+i+`</td>
        <td>`+productList[i].name+`</td>
        <td>`+productList[i].price+`</td>
        <td>`+productList[i].category+`</td>
        <td>`+productList[i].description+`</td>
        <td><button class=" btn btn-warning" onclick=updateproduct(`+i+`) >Update</button></td>
        <td>
        <button class="btn btn-danger" onclick=deleteproduct(`+i+`)>Delete</button>
        </td>
        
        </tr>`
        document.getElementById("tableBody").innerHTML=yousef;
    }
}
function clearform(){
    inputName.value=""
      inputPrice.value=""
      inputCategory.value="mobile"
       inputDescription.value=""
}
function deleteproduct(index){
    productList.splice(index,1)
    localStorage.setItem("productList",JSON.stringify(productList))
    display()
   
    
}
function updateproduct(index){
currentindex=index
 inputName.value=productList[index].name
      inputPrice.value=productList[index].price
      inputCategory.value="mobile"
       inputDescription.value= productList[index].description 
       document.getElementById("eddd").style.display="inline-block"
       document.getElementById("addd").style.display="none"
}

function edet(){
    productList[currentindex].name=inputName.value
    productList[currentindex].price=inputPrice.value
    productList[currentindex].category=inputCategory.value
    productList[currentindex].description=inputDescription.value
    document.getElementById("addd").style.display="inline-block"
    document.getElementById("eddd").style.display="none"  
    display()
}

function searchh(){
    var searchhValue = searchInput.value.toLowerCase()
var temp=""
for(var i=1 ; i<productList.length ; i++){
    if(productList[i].name.toLowerCase().includes(searchhValue)==true){
        temp +=`<tr>
        <td>`+i+`</td>
        <td>`+productList[i].name.toLowerCase().replace(searchhValue,"<span class='text-danger fw-bold'>"+searchhValue+"</span>")+`</td>
        <td>`+productList[i].price+`</td>
        <td>`+productList[i].category+`</td>
        <td>`+productList[i].description+`</td>
        <td><button class=" btn btn-warning">Update</button></td>
        <td>
        <button class="btn btn-danger" onclick=deleteproduct(`+i+`)>Delete</button>
        </td>
        
        </tr>`

    }

}
document.getElementById("tableBody").innerHTML=temp;
}


