// PETALAS
for (let i = 0; i < 30; i++) {
  const petala = document.createElement('div');
  petala.classList.add('petala');
  petala.style.left = Math.random() * 100 + 'vw';
  petala.style.animationDuration = (5 + Math.random() * 5) + 's';
  document.body.appendChild(petala);
}

// ABRIR CONVITE
function abrirConvite() {
  document.querySelector('.envelope').classList.add('aberto');
  document.getElementById('carta').classList.add('mostrar');
}

// WHATSAPP
function confirmarPresenca() {
  const numero = "5521965137656";
  const mensagem = encodeURIComponent(
    "Olá! Estou confirmando minha presença no casamento de Gabriel e Ana Carolina 💍"
  );
  window.open(`https://wa.me/${numero}?text=${mensagem}`, '_blank');
}

// CONTADOR
function atualizarContador() {
  const dataEvento = new Date('2026-10-03T18:00:00');
  const agora = new Date();
  const diff = dataEvento - agora;

  if (diff <= 0) {
    document.getElementById('contador').innerText = 'Chegou o grande dia! 💍';
    return;
  }

  const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((diff / (1000 * 60)) % 60);
  const segundos = Math.floor((diff / 1000) % 60);

  document.getElementById('contador').innerText =
    `Faltam ${dias}d ${horas}h ${minutos}m ${segundos}s 💚`;
}

setInterval(atualizarContador, 1000);
atualizarContador();