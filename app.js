/*eslint-env browser*/


var budgetController = (function() {
    
   
    
})();


// UI CONTROLLER
var UIController = (function () {
    
    
    var DOMStrings = {
        inputType: '.add__type' , 
        inputDescription: '.add__description' , 
        inputValue: '.add__value' , 
        inputButton : '.add__btn'
    }
    
    return {
                getInput: function() {
                    
                    return {
                        
//                            type: document.querySelector('.add__type').value , 
//                            description: document.querySelector('.add__description').value ,
//                            value: document.querySelector('.add__value').value
                        
                            type: document.querySelector(DOMStrings.inputType).value , 
                            description: document.querySelector(DOMStrings.inputDescription).value ,
                            value: document.querySelector(DOMStrings.inputValue).value
                    };
                  
                } , 
        
        
                // Exposing the DOM Strings to the Controller
                getDOMStrings:  function() {
                    return DOMStrings;
                }
    };

})();

// Global App Controller
var controller = (function(budgetCtrl , UICtrl){

    var DOM = UICtrl.getDOMStrings();
    var ctrlAddItem = function() {
            // get the filed input data
        
            var input = UICtrl.getInput();
            console.log(input);
        
            // add the item to the budget controller 
            // add the item to the UI
            // Calculate the budget
            // Display the budget on the UI
            console.log('ctrlAddItem was called!');
    }
    
    
    // document.querySelector('.add__btn').addEventListener('click' , ctrlAddItem);
    document.querySelector(DOM.inputButton).addEventListener('click' , ctrlAddItem); 
    document.addEventListener('keypress' , function(event) {
             // console.log(event);
        
            if (event.keyCode === 13 || event.which === 13){
                console.log('Enter Was Pressed');
                ctrlAddItem();
            }
        
    });
    
    
})(budgetController , UIController);
