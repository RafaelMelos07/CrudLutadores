let lutadores = [];
let editIndex = null;

// Função para adicionar ou atualizar um lutador
document.getElementById("addBtn").addEventListener("click", function() {
    const nome = document.getElementById("nome").value;
    const idade = document.getElementById("idade").value;
    const peso = document.getElementById("peso").value;
    const estiloDeLuta = document.getElementById("estiloDeLuta").value;

    // Validação simples
    if (!nome || !idade || !peso || !estiloDeLuta) {
        alert("Por favor, preencha todos os campos!");
        return;
    }

    // Adicionar ou atualizar lutador
    if (editIndex === null) {
        // Adicionar novo lutador
        lutadores.push({ nome, idade, peso, estiloDeLuta });
    } else {
        // Atualizar lutador existente
        lutadores[editIndex] = { nome, idade, peso, estiloDeLuta };
        editIndex = null;
        document.getElementById("addBtn").value = "Adicionar Lutador";
    }

    // Limpar campos de entrada
    document.getElementById("nome").value = "";
    document.getElementById("idade").value = "";
    document.getElementById("peso").value = "";
    document.getElementById("estiloDeLuta").value = "";

    renderTable();
});

// Função para exibir a tabela de lutadores
function renderTable() {
    const table = document.getElementById("lutadoresTable");
    table.innerHTML = ""; // Limpa a tabela

    lutadores.forEach((lutador, index) => {
        const row = table.insertRow();

        row.insertCell(0).innerText = lutador.nome;
        row.insertCell(1).innerText = lutador.idade;
        row.insertCell(2).innerText = lutador.peso;
        row.insertCell(3).innerText = lutador.estiloDeLuta;

        // Coluna para ações (editar e deletar)
        const actions = row.insertCell(4);
        const editButton = document.createElement("button");
        editButton.innerText = "Editar";
        editButton.classList.add("edit-btn");
        editButton.onclick = () => editLutador(index);

        const deleteButton = document.createElement("button");
        deleteButton.innerText = "Deletar";
        deleteButton.classList.add("delete-btn");
        deleteButton.onclick = () => deleteLutador(index);

        actions.appendChild(editButton);
        actions.appendChild(deleteButton);
    });
}

// Função para carregar um lutador nos campos para edição
function editLutador(index) {
    const lutador = lutadores[index];
    document.getElementById("nome").value = lutador.nome;
    document.getElementById("idade").value = lutador.idade;
    document.getElementById("peso").value = lutador.peso;
    document.getElementById("estiloDeLuta").value = lutador.estiloDeLuta;

    editIndex = index;
    document.getElementById("addBtn").value = "Atualizar Lutador";
}

// Função para deletar um lutador
function deleteLutador(index) {
    lutadores.splice(index, 1);
    renderTable();
}
