function w3_open() {
  document.getElementById("mySidebar").style.width = "100%";
  document.getElementById("mySidebar").style.display = "block";
}

function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
}

init()
function init(){
  var inNome = document.getElementById("nome")
  var inCpf = document.getElementById("cpf")
  var inSenha = document.getElementById("senha")
  var inRsenha = document.getElementById("rsenha")
  var inEmail = document.getElementById("email")
  var inData = document.getElementById("data")
  var inEstado = document.getElementById("estado")
  var inCidade = document.getElementById("cidade")
  var inBairro = document.getElementById("bairro")
  var inCep = document.getElementById("cep")
  var inRua = document.getElementById("rua")
  var inN = document.getElementById("n")
  var inComplemento = document.getElementById("complemento")
  
}

function salvar(){
  var nome = document.getElementById("nome").value 
  var cpf = document.getElementById("cpf").value
  var senha = document.getElementById("senha").value 
  var rsenha = document.getElementById("rsenha").value
  var email = document.getElementById("email").value 
  var data = document.getElementById("data").value
  var estado = document.getElementById("estado").value 
  var cidade = document.getElementById("cidade").value
  var bairro = document.getElementById("bairro").value 
  var cep = document.getElementById("cep").value
  var rua = document.getElementById("rua").value 
  var n = document.getElementById("n").value
  var complemento = document.getElementById("complemento").value 

  localStorage.setItem("Nome", nome)
  localStorage.setItem("Cpf", cpf)
  localStorage.setItem("Senha", senha)
  localStorage.setItem("RSenha", rsenha)
  localStorage.setItem("Email", email)
  localStorage.setItem("Data", data)
  localStorage.setItem("Estado", estado)
  localStorage.setItem("Cidade", cidade)
  localStorage.setItem("Bairro", bairro)
  localStorage.setItem("Cep", cep)
  localStorage.setItem("Rua", rua)
  localStorage.setItem("N", n)
  localStorage.setItem("Complemento", complemento)

  alert("Cadastro bem-sucedido!");
  
}

