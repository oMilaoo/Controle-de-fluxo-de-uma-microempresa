function toggleCardInput() {
  var paymentMethod = document.getElementById('paymentMethod').value;
  var cardNumberInput = document.getElementById('cardNumberInput');
  
  if (paymentMethod === 'credit' || paymentMethod === 'debit') {
      cardNumberInput.style.display = 'block';
      formatCardNumberInput(); // Formatar o número do cartão se estiver visível
  } else {
      cardNumberInput.style.display = 'none';
  }
}

// Função para formatar o número do cartão
function formatCardNumberInput() {
  var cardNumberInput = document.getElementById('cardNumber');
  cardNumberInput.addEventListener('input', function() {
      var value = cardNumberInput.value.replace(/\D/g, '');
      value = value.replace(/(\d{4})(?=\d)/g, '$1 ');
      cardNumberInput.value = value;
  });
}

// Função para formatar o CPF
function formatCPFInput() {
  console.log("Formatando CPF...");
  var cpfInput = document.getElementById('cpf');
  var value = cpfInput.value.replace(/\D/g, ''); // Remove caracteres não numéricos
  var newValue = value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4'); // Formata o CPF
  cpfInput.value = newValue;
}

// Função para formatar o número do cartão
function formatCardNumberInput() {
  console.log("Formatando número do cartão...");
  var cardNumberInput = document.getElementById('cardNumber');
  var value = cardNumberInput.value.replace(/\D/g, ''); // Remove caracteres não numéricos
  var newValue = value.replace(/(\d{4})(?=\d)/g, '$1 '); // Adiciona espaço a cada 4 caracteres
  cardNumberInput.value = newValue;
}

// Função para verificar se o número do cartão possui o formato correto
function isValidCardNumber() {
  console.log("Validando número do cartão...");
  var cardNumberInput = document.getElementById('cardNumber');
  var pattern = /^[0-9]{4} [0-9]{4} [0-9]{4} [0-9]{4}$/;
  return pattern.test(cardNumberInput.value);
}

// Função para verificar se o CPF possui o formato correto
function isValidCPF() {
  console.log("Validando CPF...");
  var cpfInput = document.getElementById('cpf');
  var pattern = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
  return pattern.test(cpfInput.value);
}

// Event listeners para chamar as funções de formatação e validação ao digitar nos campos
document.getElementById('cpf').addEventListener('input', formatCPFInput);
document.getElementById('cardNumber').addEventListener('input', formatCardNumberInput);

// Event listener para validar o formulário antes de enviar
document.getElementById('productForm').addEventListener('submit', function(event) {
  var paymentMethod = document.getElementById('paymentMethod').value;
  if ((paymentMethod === 'credit' || paymentMethod === 'debit') && !isValidCardNumber()) {
      event.preventDefault(); // Impede o envio do formulário se o número do cartão for inválido
  }

  if ((paymentMethod === 'credit' || paymentMethod === 'debit') && !isValidCPF()) {
      event.preventDefault(); // Impede o envio do formulário se o CPF for inválido
  }
});