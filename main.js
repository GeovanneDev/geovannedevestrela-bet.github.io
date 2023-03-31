// Selecionando elementos da página
const texto = document.getElementById("texto");
const data = document.getElementById("data");

// Função para atualizar a data
function atualizarData() {
  const agora = new Date();
  const dia = agora.getDate();
  const mes = agora.getMonth() + 1;
  const ano = agora.getFullYear();
  const hora = agora.getHours();
  const minutos = agora.getMinutes();

  // Atualizando o texto da data
  data.textContent = `Atualizado em: ${dia}/${mes}/${ano} às ${hora}:${minutos}`;
}

// Chamando a função para atualizar a data
atualizarData();

// Mudando o texto da caixa
texto.textContent = "Nenhum Incidente Ativo!";

// Chamando a função para atualizar a data novamente
atualizarData();