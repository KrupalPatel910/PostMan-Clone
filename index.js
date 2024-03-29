console.log("This is tutorial");

// Utility function 
// 1. utility function to get DOM element from string
   function getElementFromString(string){
    let div = document.createElement('div');
    div.innerHTML=string;
    return div.firstElementChild; 
   }


// hide the parameters box initially
let parameterBox = document.getElementById('parametersBox');
parameterBox.style.display = 'none';

// If the user click on params box, hide the json box 
let paramRadio = document.getElementById('paramRadio');
paramRadio.addEventListener('click', () => {
    document.getElementById('requestJsonBox').style.display = 'none';
    document.getElementById('parametersBox').style.display = 'block';

});

// If the user click on json box, hide the params box 
let jsonRadio = document.getElementById('jsonRadio');
jsonRadio.addEventListener('click', () => {
    document.getElementById('parametersBox').style.display = 'none';
    document.getElementById('requestJsonBox').style.display = 'block';
});

// Initialize no of parameters
let addedParamCounts = 0;



// If the user click on the "+" button for adding more parameters
let addParam = document.getElementById('addParam');
addParam.addEventListener('click', () => {
    let params = document.getElementById('params'); // The div that contains all the parameters
    let string = `  <div class="form-row d-flex gap-3 ">
                         <label for="url" style="width: 11vw" class="col-sm-1 col-form-label fw-bold fs-4 ">Parameter ${addedParamCounts + 2}:</label>
                         <div class="form-group col-md-4 my-2">
                           <input type="text" class="form-control" id="parameterKey${addedParamCounts + 2}" placeholder="Enter Parameter ${addedParamCounts + 2} Key">
                         </div>
                         <div class="form-group  col-md-4 my-2">
                           <input type="text" class="form-control" id="parameterValue${addedParamCounts + 2}" placeholder="Enter Parameter ${addedParamCounts + 2} value">
                         </div>
                         <button class="btn btn-primary m-2 deleteParam" >-</button>
                    </div>`;

                    addedParamCounts ++;
   
     // Convert the element string to DOM node
     let paramElement = getElementFromString(string);
     params.appendChild(paramElement); 

     // Add a event listener to remove the parameters on clicking button 
    let deleteParam = document.getElementsByClassName('deleteParam')
    for (item of deleteParam){
        item.addEventListener("click", (e)=>    {
            e.target.parentElement.remove();
            e.alert("Are you Sure to delete parameters?"); // Error /////////////////////////////////////////////////////
        })
    }

})

// If the user click on the "Submit" button in form
let submitBtn = document.getElementById('submitBtn');
submitBtn.addEventListener('click', ()=>{
    
})

