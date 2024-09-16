function calcular() {
    // Obter valores dos inputs
    const horasDormir = document.getElementById('hours').value.padStart(2, '0');
    const minutosDormir = document.getElementById('minutes').value.padStart(2, '0');
    const horasAcordar = document.getElementById('horasacordar').value.padStart(2, '0');
    const minutosAcordar = document.getElementById('minutosacordar').value.padStart(2, '0');
  
    // Verificar se os valores estão no formato correto
    if (!validateTime(horasDormir, minutosDormir) || !validateTime(horasAcordar, minutosAcordar)) {
      alert("Por favor, insira os horários no formato correto.");
      return;
    }
  
    // Converter horários para minutos
    const minutosDormirTotal = parseInt(horasDormir) * 60 + parseInt(minutosDormir);
    let minutosAcordarTotal = parseInt(horasAcordar) * 60 + parseInt(minutosAcordar);
  
    // Ajustar o horário máximo de acordar se necessário
    if (minutosAcordarTotal < minutosDormirTotal) {
      minutosAcordarTotal += 24 * 60; // Adiciona 24 horas em minutos
    }
  
    // Calcular horários ideais
    const horariosIdeais = [];
    let tempo = minutosDormirTotal + 90;
    
    // Inclui o horário máximo para garantir que ele esteja na lista
    while (tempo <= minutosAcordarTotal) {
      let horas = Math.floor(tempo / 60) % 24;
      let minutos = tempo % 60;
      horariosIdeais.push(`${String(horas).padStart(2, '0')}:${String(minutos).padStart(2, '0')}`);
      tempo += 90;
    }
  
    // Exibir resultados no div
    const resultadosDiv = document.getElementById('resultados');
    if (horariosIdeais.length > 0) {
      resultadosDiv.innerHTML = "<h3>Melhores horários para você acordar:</h3><ul>" + 
        horariosIdeais.map(horario => `<li>${horario}</li>`).join('') + 
        "</ul>";
    } else {
      resultadosDiv.innerHTML = "<p>Não há horários ideais para acordar dentro do intervalo especificado.</p>";
    }
  }
  
  function validateTime(horas, minutos) {
    return /^([01]\d|2[0-3])$/.test(horas) && /^[0-5]\d$/.test(minutos);
  }
  