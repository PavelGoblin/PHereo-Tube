console.log("Video Added");

//1- fetch ,load and show catagories on html

//Create loadCatagories
const loadCatagories = () => {
  //fetch the data
  fetch( https://openapi.programming-hero.com/api/phero-tube/categories)
    .then((res) =>res.json())
    .then((data)=>displayCatagories(data.catagories))
    .catch((error) =>console.log(error));
};

//create DisplayCatagories
const displayCatagories=(catagories)) =>{
 catagories.forEach(item) => {
  console.log(item);
 });
  
}
loadCatagories();