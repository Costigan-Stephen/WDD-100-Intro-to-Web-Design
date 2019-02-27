function redirect(x){
    
    switch (x){
        case "home":
            window.location.href = 'about.html';
            break;
        case "portal":
            window.location.href = 'index.html';
            break;
        default:
            return true;
        }
}
