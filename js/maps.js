function sendToWhatsApp(event) {
  event.preventDefault(); // Impede o envio do formulário

  // Coleta os dados do formulário
  const date = document.getElementById('inputDate').value;
  const name = document.getElementById('inputName').value;
  const time = document.getElementById('inputTime').value;
  const email = document.getElementById('inputEmail').value;
  const number = document.getElementById('inputNumber').value;
  const cell = document.getElementById('inputCel').value;

  // Cria a mensagem formatada para enviar via WhatsApp
  const message = `*Reserva de Autódromo Potenza*\n\n*Data:* ${date}\n*Nome:* ${name}\n*Horário:* ${time}\n*Email:* ${email}\n*Número de Convidados:* ${number}\n*Celular:* ${cell}`;

  // Cria a URL do WhatsApp
  const phoneNumber = "5532991562422"; // Altere para o número do WhatsApp de destino
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  // Redireciona para o WhatsApp
  window.open(whatsappUrl, '_blank');
}



document.getElementById('inputTime').addEventListener('change', function () {
  const time = this.value;
  if (time < '07:00' || time > '18:00') {
      alert('Por favor, selecione um horário entre 07:00 e 18:00.');
      this.value = ''; // Limpa o campo se estiver fora do intervalo
  }
});
