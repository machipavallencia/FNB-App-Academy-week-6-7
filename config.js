
let rootPath = "https://mysite.itvarsity.org/api/ContactBook/";
let apikey = checkApikey();

function checkApikey() {
    const key = localStorage.getItem("apikey");
    if (!key) {
        window.location.href = "enter-api-key.html";
        return null;
    }
    return key;
}
