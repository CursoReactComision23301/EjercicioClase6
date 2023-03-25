import {Button} from "./button.js";
import {Input} from "./input.js";
import { Video } from "./video.js";

function RenderButton(text){
    let myButton = new Button ("App", text);
    myButton.render();
}

function RenderVideo(url){
    let myVideo = new Video ("App", url);
    myVideo.render();
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

export {RenderButton, RenderInput, RenderVideo};