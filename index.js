var estado = document.getElementById('estado');
var cidade = document.getElementById('cidade');
var listarItens = document.getElementById('listarItens');

estado.addEventListener('change', function () {
    while (cidade.firstChild) {
        cidade.removeChild(cidade.firstChild);
    }

    var casa = estado.value;

    var op0 = document.createElement('option');
    op0.innerHTML = 'Selecione uma característica'
    cidade.appendChild(op0);

    switch (casa) {
        case "PE":
            var op1 = document.createElement('option');
            op1.innerHTML = 'Recife';
            op1.value = 'PE';
            cidade.appendChild(op1);

            var op2 = document.createElement('option');
            op2.innerHTML = 'Moreno'
            op2.value = 'PE'
            cidade.appendChild(op2);

            var op3 = document.createElement('option');
            op3.innerHTML = 'Caruaru'
            op3.value = 'PE'
            cidade.appendChild(op3);

            var op4 = document.createElement('option');
            op4.innerHTML = 'Vitória'
            op4.value = 'PE'
            cidade.appendChild(op4);
            break;

        case "AL":
            var op1 = document.createElement('option');
            op1.innerHTML = 'Maceió';
            op1.value = 'amb';
            cidade.appendChild(op1);

            var op2 = document.createElement('option');
            op2.innerHTML = 'Murici'
            op2.value = 'ang'
            cidade.appendChild(op2);

            var op3 = document.createElement('option');
            op3.innerHTML = 'Maragogi'
            op3.value = 'int'
            cidade.appendChild(op3);

            var op4 = document.createElement('option');
            op4.innerHTML = 'Pilar'
            op4.value = 'det'
            cidade.appendChild(op4);
            break;

        case "RJ":
            var op1 = document.createElement('option');
            op1.innerHTML = 'Angra dos Reis';
            op1.value = 'cur';
            cidade.appendChild(op1);

            var op2 = document.createElement('option');
            op2.innerHTML = 'Aperibé'
            op2.value = 'sab'
            cidade.appendChild(op2);

            var op3 = document.createElement('option');
            op3.innerHTML = 'Araruama'
            op3.value = 'per'
            cidade.appendChild(op3);

            var op4 = document.createElement('option');
            op4.innerHTML = 'Areal'
            op4.value = 'int'
            cidade.appendChild(op4);
            break;

        case "SP":
            var op1 = document.createElement('option');
            op1.innerHTML = 'Presidente Prudente';
            op1.value = 'lea';
            cidade.appendChild(op1);

            var op2 = document.createElement('option');
            op2.innerHTML = 'Rio Claro'
            op2.value = 'ded';
            cidade.appendChild(op2);

            var op3 = document.createElement('option');
            op3.innerHTML = 'Araçatuba '
            op3.value = 'pac';
            cidade.appendChild(op3);

            var op4 = document.createElement('option');
            op4.innerHTML = 'Santa Bárbara d-Oeste'
            op4.value = 'jgl';
            cidade.appendChild(op4);
            break;
    }
});

var formulario = document.getElementById("formulario");
var estadoSelect = document.getElementById("estado");
var cidadeSelect = document.getElementById("cidade");
var bairroInput = document.getElementById("bairro");

formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    var SelectEstado = estadoSelect.options[estadoSelect.selectedIndex].text;
    var selectCidade = cidadeSelect.options[cidadeSelect.selectedIndex].text
    var NomeBairro = bairroInput.value;

    if (!SelectEstado || !selectCidade || !NomeBairro) {
        alert("Preencha todos os campos antes de enviar.");
        return;
    }

    var PreencherDiv = document.createElement("div");
    PreencherDiv.className = "item-container";

    var TextoEnviado = document.createElement("span");
    TextoEnviado.textContent = `${SelectEstado} - ${selectCidade} - ${NomeBairro}`;

    var btnEditar = document.createElement("button");
    btnEditar.textContent = "Editar";
    btnEditar.addEventListener("click", () => {
        var NovoEstado = prompt("Digite um novo estado:", SelectEstado);
        var NovaCidade = prompt("Digite uma nova cidade:", selectCidade);
        var NovoBairro = prompt("Digite um novo bairro:", NomeBairro);

        if (NovoBairro) {
            TextoEnviado.textContent = `${NovoEstado} - ${NovaCidade} - ${NovoBairro}`;
        }
    });

    var btnDeletar = document.createElement("button");
    btnDeletar.textContent = "X";
    btnDeletar.addEventListener("click", () => {
        listarItens.removeChild(PreencherDiv);
    });

    PreencherDiv.appendChild(TextoEnviado);
    PreencherDiv.appendChild(btnEditar);
    PreencherDiv.appendChild(btnDeletar);

    listarItens.appendChild(PreencherDiv);

    estadoSelect.selectedIndex = 0;
    cidadeSelect.innerHTML = "";
    bairroInput.value = "";
});
