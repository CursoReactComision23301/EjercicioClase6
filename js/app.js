import {RenderInput, RenderVideo} from "./components/functions.js";
import {RenderButton} from "./components/functions.js";
import {mySuperButtonsArrayOfStrings, inputArrayFiltered, myVideoArray} from "./components/data.js";


mySuperButtonsArrayOfStrings.forEach(element => {
    RenderButton(element)
});

inputArrayFiltered.forEach(function (element) {
    RenderInput(element);
});

myVideoArray.forEach(function(element){
    RenderVideo(element);
})