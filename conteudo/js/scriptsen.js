function verificarSenha() {
    const senhaCorreta = "RecebiUmaBelaFlorArtificial:)"; 
    const senhaInserida = document.getElementById("senha").value;

    if (senhaInserida === senhaCorreta) {
        window.location.href = "./conteudo/menu.html"; 
    } else {
        alert("Senha incorreta!");
    }
}

function mostrarSenha() {
    var campoSenha = document.getElementById("senha");
    if (campoSenha.type === "password") {
        campoSenha.type = "text";
    } else {
        campoSenha.type = "password";
    }
}