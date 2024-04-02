console.log("This is tutorial");

// Utility function 
// 1. utility function to get DOM element from string
function getElementFromString(string) {
    let div = document.createElement('div');
    div.innerHTML = string;
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

    addedParamCounts++;

    // Convert the element string to DOM node
    let paramElement = getElementFromString(string);
    params.appendChild(paramElement);

    // Add a event listener to remove the parameters on clicking button 
    let deleteParam = document.getElementsByClassName('deleteParam')
    for (item of deleteParam) {
        item.addEventListener("click", (e) => {
            e.target.parentElement.remove();
            // e.alert("Are you Sure to delete parameters?"); // Error /////////////////////////////////////////////////////
        })
    }

})

// If the user click on the "Submit" button in form
let submitBtn = document.getElementById('submitBtn');
submitBtn.addEventListener('click', () => {
    // Show please wait in the response box to request patience from the user
    document.getElementById("responseJsonText").value = "Please Wait till the response  is generated...";

    // Fetch all the values user has entered
    let url = document.getElementById('urlField').value;
    let requestType = document.querySelector("input[name = 'requestType']:checked").value;
    let contentType = document.querySelector("input[name = 'contentType']:checked").value;

  
    // If user has used params option instead of json, collect all parameters in an object
    if (contentType == 'params') {
        data = {};
        for (i = 0; i < addedParamCounts + 1; i++) {
            if (document.getElementById('parameterKey' + (i + 1)) != undefined) {
                let key = document.getElementById('parameterKey' + (i + 1)).value;
                let value = document.getElementById('parameterValue' + (i + 1)).value;
                data[key] = value;
            }
            data = JSON.stringify(data);

        }
    }
    else { 
        data = document.getElementById('requestJsonText').value
        }
      // Log all the values in the console
    // console.log("URL is", url);
    // console.log("requestType is", requestType);
    // console.log("contentType is", contentType);
    // console.log("data is", data);


    //  if the request type is get, invoke fetch api to create a get request
    if(requestType = "GET"){
        fetch(url, {
            method: 'GET',

        })
        .then(response => response.text())
        .then((text) =>{
            document.getElementById("responseJsonText").value = text;
        })
    }
    // if the request type is POST/
    else(
        fetch(url, {
            method: 'POST',
            body : data,
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
              },

        })
        .then(response => response.text())
        .then((text) =>{
            document.getElementById("responseJsonText").value = text;
        })
    );


})

