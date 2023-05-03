async function buscaEndereco(cep) {
    let mensagemErro = document.querySelector("#erro");
    mensagemErro.innerHTML = "";
    try {
        const consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const consultaCEPConvertida = await consultaCEP.json();
        if (consultaCEPConvertida.erro) {
            throw Error('Este CEP não existe');
        }

        let cidade = document.querySelector("#cidade");
        let logradouro = document.querySelector("#endereco");
        let estado = document.querySelector("#estado");
        let bairro = document.querySelector("#bairro");
        let complemento = document.querySelector("#complemento");

        cidade.value = consultaCEPConvertida.localidade;
        logradouro.value = consultaCEPConvertida.logradouro;
        estado.value = consultaCEPConvertida.uf;
        bairro.value = consultaCEPConvertida.bairro;
        complemento.value = consultaCEPConvertida.complemento;

        console.log(consultaCEPConvertida);
        return consultaCEPConvertida;
    } catch (erro) {
        console.log(erro);
        console.log("Erro");
    }
};

let cep = document.querySelector("#cep");
cep.addEventListener("focusout", () => buscaEndereco(cep.value));

