document.getElementById("form").addEventListener("submit", async (e) => {

    e.preventDefault();

    const data = {
        nome: document.getElementById("nome").value,
        cpf: document.getElementById("cpf").value,
        dataNascimento: document.getElementById("dataNascimento").value,
        telefone: document.getElementById("telefone").value,
        email: document.getElementById("email").value
    };

    try {

        const res = await fetch("/cadastro", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        const json = await res.json();

        if (res.ok) {
            alert(json.mensagem);
            document.getElementById("form").reset();
        } else {
            alert(json.erro);
        }

    } catch (error) {

        alert("Erro ao conectar com o servidor");
        console.error(error);

    }

});