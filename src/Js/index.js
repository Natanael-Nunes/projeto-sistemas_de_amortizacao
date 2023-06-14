const botao = document.querySelector(".botao");
const fecharModal = document.querySelector(".fechar-modal");
const video = document.getElementById("video-apresentacao");
const modal = document.querySelector(".modal");
const linkDoVideo = video.src;

botao.addEventListener("click", () => {
    modal.classList.add("aberto");
    video.setAttribute("src", linkDoVideo);
});

fecharModal.addEventListener("click", () => {   
    modal.classList.remove("aberto");
    video.setAttribute("src", "");
});