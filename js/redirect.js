function redirect(x){
    
    switch (x){
        case "home":
            window.location.href = 'index.html';
            break;
        case "portal":
            window.location.href = 'portal.html';
            break;
        default:
            return true;
        }
}