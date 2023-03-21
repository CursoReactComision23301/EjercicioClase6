class Button {
    constructor(parentID, text){
        this.parentID = parentID;
        this.text = text;
    }
    render(){
        let myApp = document.getElementById(this.parentID);
        const myButtonHTML = myApp.innerHTML + "<button>" + this.text + "</button><br>";
        myApp.innerHTML = myButtonHTML;
    }
}


let mySuperButtonsArrayOfStrings = ["Login", "Signup", "Reset", "Cancel"];


function RenderButton(text){
    let myButton = new Button ("App", text);
    myButton.render();
}


mySuperButtonsArrayOfStrings.forEach(element => {
    RenderButton(element)
});

class Input {
    constructor(parentID, type){
        this.parentID = parentID;
        this.type = type;
    }
    render(){
        let myApp = document.getElementById(this.parentID);
        const myInputHTML = myApp.innerHTML + "<input type=" + this.type +"><br>";
        myApp.innerHTML = myInputHTML;
    }
}


function RenderInput(type){
    
    let input_type = "none";

    switch (type){
        case "Password":
            input_type = "Password"
            break;
        case "Email":
            input_type = "Email"
            break;
        case "Date":
            input_type = "Date"
            break;
        default:
            input_type = "text"
            break;
    }

    let myInput = new Input ("App", input_type)
    myInput.render();
}


let mySuperInputArrayOfStrings = ["Username", "Password", "Email", "Date"];


let inputArrayFiltered = mySuperInputArrayOfStrings.filter(element => element == "Date");


inputArrayFiltered.forEach(function (element) {
    RenderInput(element);
});

