



var carVariants = {

    honda: {
        civic: {
            // reborn: {

                name: " reborn",
                model: '2026',
                price: '2000 $',
                colors: ['red', 'white', 'black'],
                gates: ' 4',
                wheels: ' 4',
                mileage: '14 to 18 km/liter',
                transmission: 'type manual',

            // }
        }

    },



    toyota: {
        Camry: {

            // XSE: {

                name: "Toyota — Camry XSE",
                model: '2026 ',
                price: '2500 $',
                colors: ['red', 'white', 'black'],
                gate: '4',
                wheels: '4',
                transmission: 'type Auto',
            // }



        }
    },
    Ford: {
        Mustang: {
            // GT: {
                name: "Ford — Mustang GT",
                model: '2026 ',
                price: '3000 $',
                colors: ['red', 'white', 'black'],
                gate: 4,
                wheels: 4,
                transmission: 'type Auto'
        //    /}



        }
    },
    Chevrolet: {
        Malibu: {
            // LT: {
                name: "Chevrolet — Malibu LT",
                model: 2026,
                price: '4000 $',
                colors: ['red', 'white', 'black'],
                gate: 4,
                wheels: 4,
                transmission: 'type Auto'
            // }



        }
    },
    BMW: {
        Series: {
            // sport: {
                name: "BMW — 3 Series 330i M Sport",
                model: 2026,
                price: ' 2000 $',
                colors: ['red', 'white', 'black'],
                gate: 4,
                wheels: 4,
                transmission: 'type Auto'
            // }



        }
    },
    Mercedes: {
        Class: {
        // AMG: {


            name: "Mercedes‑Benz —  C300 AMG Line",
            model: 2026,
            price: '2000 $',
            colors: ['red', 'white', 'black'],
            gate: 4,
            wheels: 4,
            transmission: 'type Auto',
        // }



    }
},
    Audi: {
        A4: {
            // SLine: {
                name: "Audi — A4 S Line",
                model: 2026,
                price: '2000 $',
                colors: ['red', 'white', 'black'],
                gate: 4,
                wheels: 4,
                transmission: 'type Auto'
            // }



        }
    },
    Hyundai: {
        Elantra: {
            // NLine: {
                name: "Hyundai — Elantra N Line",
                model: 2026,
                price: '2000$',
                colors: ['red', 'white', 'black'],
                gate: 4,
                wheels: 4,
                transmission: 'type Auto'
            // }



        }
    },
    Nissan: {
        Altima: {
            // SR: {
                name: "Nissan — Altima SR",
                model: 2026,
                price: '2000 $ ',
                colors: ['red ',' white' ,'black'],

                gate: 4,
                wheels: 4,
                transmission: 'type Auto',
            // }



        }
    }
}




   var main = document.getElementById('main');
   var brand = document.getElementById('brand');
   var model = document.getElementById('model');
   brand.innerHTML =`<option>select brand name</option>`
   model.innerHTML =`<option>select model name</option>`
   function renderAllCars(){

  


   


    for (var key in carVariants){
        console.log(key)
        brand.innerHTML += `<option value="${key}">${key}</option>`
        for (var key1 in carVariants[key]){ 
            console.log(key1)
        // for (var key2 in carVariants[key][key1]) {
            var obj = (carVariants[key][key1]);
            // console.log(obj.colors)
            var Div  ="";
            for(var i=0; i < obj.colors.lenght; i++){
                
         }       
            Div += 
            `<div class="${obj.colors[i]}"></div>`
        
              main.innerHTML += `
              <div class="col-12 col-sm-12 col-md-6 col-lg-3 mb-2"> 
                 <div class="card" style="width: 18rem;">
                 <img src='${obj.image || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJMLRgzvgX9hYLHBnWU0RXN7_gMynhxPb9DA&s'}' class="card-img-top" alt="...">
                  <div class="card-body">
                     <h5 class="card-title">${key1.toUpperCase()} (${obj.model}) </h5>
                     <p class="card-text">${obj.name}
                        </p>
                        
                        
                         <p class="card-text">${obj.transmission}
                        </p>
                        <h6>${obj.price}</h6>

                        <div>
                        ${Div}
                        </div>
                       
                        
                        
           
                    
                  </div>
             </div>
          </div>  
                          `
                           


        }
              



    }  
   }
renderAllCars()
function setModel(){
    model.innerHTML ='';
      model.innerHTML =`<option>select model name</option>`
    // console.log('brand', carVariants[brand.value])
    for(var key in carVariants[brand.value]){
      model.innerHTML += `<option value="${key}">${key}</option>`
    }
}
var carDetail=document.getElementById('car-detail');
function searchCar(){
    main.innerHTML="";
    main.style.display ="none";
    carDetail.style.display ="flex"
    
    var car =carVariants[brand.value][model.value];
    carDetail.innerHTML=`
            <div class="card mb-3">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="${car.image ||"" }"class="img-fluid rounded-start" alt="...">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">${model.value.toUpperCase()}</h5>
                            <p class="card-text">${car.name}</p>
                        
                        
                        
                         <p class="card-text">${car.transmission}
                          </p>
                          <h6>${car.price}</h6>
                        
                    </div>
                 </div>
            </div>
    `
}


function clearSearch(){  
   carDetail.innerHTML="";
carDetail.style.display="none";
main.style.display ="flex"
renderAllCars()
}
    






















































































