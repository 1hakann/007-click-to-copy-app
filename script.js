const button = document.querySelector('.btn');
const link = document.querySelector('.link');

const copyText = (e) => {
    e.preventDefault();

    navigator.clipboard.writeText(link.value).then(() => {
        button.textContent = "Copied!!!";

        setTimeout(() => {
            button.textContent = "Copy";
        }, 2000);
    })   
}

button.addEventListener("click", copyText);