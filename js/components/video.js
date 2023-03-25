export class Video{
    constructor(parentID, url, width, height, type){
        this.parentID = parentID;
        this.url = url;
    }
    render(){
        let myApp = document.getElementById(this.parentID);
        const myVideoHTML = myApp.innerHTML + "<video width=320 height=240 controls> <source src="+this.url+" type=video/mp4> Your video does not support this tag </video><br>";
        myApp.innerHTML = myVideoHTML;
    }
}

