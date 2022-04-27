async function cepApi(){
    let cepNumber = document.getElementById('cep').value
    let displayDiv = document.querySelector('.div-info-cep')

    if(cepNumber.length < 8){
        alert('Digite um CEP válido!')
    }else{
        let result = await getCep(cepNumber)

        if(displayDiv.style.display !== 'flex'){
            displayDiv.style.display = 'flex'
        }

        let ruaWrapper = document.getElementById('name-rua')
        let bairroWrapper = document.getElementById('name-bairro')
        let cidadeWrapper = document.getElementById('name-cidade')
        let ufWrapper = document.getElementById('name-uf')

        ruaWrapper.innerHTML = result.logradouro
        bairroWrapper.innerHTML = result.bairro
        cidadeWrapper.innerHTML = result.localidade
        ufWrapper.innerHTML = result.uf
    }
}

async function getCep(cepNumber){
    return await fetch(`https://viacep.com.br/ws/${cepNumber}/json/`).then(resp => resp.json())
}