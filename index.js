function Telefone(ddd, num){
    this.ddd = ddd
    this.num = num

    this.getDdd = function(){return this.ddd}
    this.setDdd = function(novoDdd){this.ddd = novoDdd}
    this.getNumero = function(){return this.num}
    this.setNumero = function(novoNumero){this.num = novoNumero}
}

function Endereço(estado, cidade, bairro, rua, numero){
    this.estado = estado
    this.cidade = cidade
    this.bairro = bairro
    this.rua = rua
    this.numero = numero

    this.getEstado = function(){return this.estado}
    this.setEstado = function(novoEstado){this.estado = novoEstado}
    this.getCidade = function(){return this.cidade}
    this.setCidade = function(novaCidade){this.cidade = novaCidade}
    this.getBairro = function(){return this.bairro}
    this.setBairro = function(novoBairro){this.bairro = novoBairro}
    this.getRua = function(){return this.rua}
    this.setRua = function(novaRua){this.rua = novaRua}
    this.getNumero = function(){return this.numero}
    this.setNumero = function(novoNumero){this.numero = novoNumero}
}

function Cliente(nome, telefone, endereco){
    this.nome = nome
    this.telefone = telefone
    this.endereco = endereco
    this.getNome = function(){ return this.nome}
    this.setNome = function(novoNome){ return this.nome = novoNome}
    this.getNomeUpper = function() { return this.nome.toUpperCase() }
    this.getNomeLower = function() { return this.nome.toLowerCase() }

    this.getInfo = function(){
        return '---------------------\n'
        + 'Informações do Cliente:\n'
        + this.nome + '\n'
        + '---------------------\n'
        + '---------------------\n'
        + 'Telefone:\n'
        + 'DDD:'  + this.telefone.getDdd() + '\n'
        + 'Número: ' + this.telefone.getNumero() + '\n'
        + '---------------------\n'
        + '---------------------\n'
        + 'Endereço: \n'
        + 'Rua: ' + this.endereco.getRua() + '\n'
        + 'Número: ' + this.endereco.getNumero() + '\n'
        + 'Cidade: ' + this.endereco.getCidade() + '\n'
        + 'Estado: ' + this.endereco.getEstado() + '\n'
        + '---------------------'
    }
}

function criarCliente(nome, ddd, telefone, rua, numero, cidade, estado){
    let tel = new Telefone(ddd, telefone)
    let end = new Endereço(estado, cidade, '', rua, numero)
    return new Cliente(nome, tel, end)
}

function ordemNome(cliArr) {
    return cliArr.slice().sort((a, b) => a.getNome().localeCompare(b.getNome()))
}

let cliente1 = criarCliente('João', '11', '99999-9999', 'Rua A', '123', 'São Paulo', 'SP')
let cliente2 = criarCliente('Maria', '21', '98888-8888', 'Rua B', '456', 'Rio de Janeiro', 'RJ')
let cliente3 = criarCliente('Ana', '31', '97777-7777', 'Rua C', '789', 'Belo Horizonte', 'MG')
let cliente4 = criarCliente('Carlos', '41', '96666-6666', 'Rua D', '321', 'Curitiba', 'PR')

let clientes = [cliente1, cliente2, cliente3, cliente4]
let clientesOrdenados = ordemNome(clientes)


clientesOrdenados.forEach(cliente => console.log(cliente.getInfo()))