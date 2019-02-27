function include() {
    let file, xhttp;

    let allElements = document.getElementsByTagName('*'); // get all elements on the page

    for (let i = 0; i < allElements.length; i++) { // process all the elements looking for the custom attribute 'includefile'
        file = allElements[i].getAttribute("includefile");
        if (file) { // if the attribute is found, process an AJAX XMLHttpRequest
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4) {
                    if (this.status == 200) {
                        allElements[i].innerHTML = this.responseText;
                    }
                    if (this.status == 400) {
                        allElements[i].innerHTML = "Page not found!";
                    }
                    allElements[i].removeAttribute('includefile');
                    include(); // call the function again to start the process over
                }
            }
            xhttp.open('GET', './modules/' + file, true); // matching file names in includes folder
            xhttp.send();
            
            var content = document.getElementById('home');  //content exists
            var pagename = document.getElementById('pagename');  //content exists
            
//            if (content) {
//                if (pagename){
//                    navCheck();
//                }
//            }

            return;
        }
    }
}
// initial call to the include function
include();

//function navCheck() {
//
//    var pName = document.getElementById('pagename').innerHTML;
//    
//    if (pName == "AboutMe") {
//        document.getElementById('home').classList.remove('current');
////        document.getElementById('portal').classList.add('current');
//
//    } else if (pName == "AssignmentPortal") {
//        document.getElementById('about').classList.remove('current');
////        document.getElementById('home').classList.add('current');
//        
//    }
//}