function obterTemperaturaPorLocalizacao() {
  consultarLocalizacao();
}

function obterTemperaturaPorLocal() {
  const locationInput = document.getElementById('locationInput');
  const location = locationInput.value;
  obterCoordenadasPorLocal(location);
}

function consultarLocalizacao() {
  const weatherInfoElement = document.getElementById('weather-info');

  if (navigator.permissions) {
    navigator.permissions.query({ name: 'geolocation' })
      .then(permissionStatus => {
        if (permissionStatus.state === 'granted') {
          obterCoordenadas();
        } else if (permissionStatus.state === 'prompt') {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              obterCoordenadas(position.coords.latitude, position.coords.longitude);
            },
            (error) => {
              console.error('Erro ao obter localização:', error.message);
              weatherInfoElement.innerHTML = '<p>Erro ao obter localização.</p>';
            }
          );
        } else {
          console.error('Permissão de geolocalização negada pelo usuário.');
          weatherInfoElement.innerHTML = '<p>Permissão de geolocalização negada.</p>';
        }
      })
      .catch(error => {
        console.error('Erro na verificação de permissão:', error.message);
        weatherInfoElement.innerHTML = '<p>Erro na verificação de permissão.</p>';
      });
  } else {
    console.error('Verificação de permissão de geolocalização não suportada.');
    weatherInfoElement.innerHTML = '<p>Verificação de permissão de geolocalização não suportada.</p>';
  }
}

function obterCoordenadas(latitude, longitude) {
  const apiKey = '836de23f1ea02d9a6742b9e82ceaf570';
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&lang=pt&appid=${apiKey}`;

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Erro na solicitação: ${response.status} - ${response.statusText}`);
      }
      return response.json();
    })
    .then(data => {
      exibirDadosMeteorologicos(data);
    })
    .catch(error => {
      console.error(error.message);
      weatherInfoElement.innerHTML = '<p>Erro ao obter dados de previsão do tempo.</p>';
    });
}

function obterCoordenadasPorLocal(local) {
const apiKey = '836de23f1ea02d9a6742b9e82ceaf570';
const url = `https://api.openweathermap.org/data/2.5/weather?q=${local}&lang=pt&appid=${apiKey}`;

const weatherInfoElement = document.getElementById('weather-info');

fetch(url)
.then(response => {
if (!response.ok) {
throw new Error(`Erro na solicitação: ${response.status} - ${response.statusText}`);
}
return response.json();
})
.then(data => {
exibirDadosMeteorologicos(data);
})
.catch(error => {
console.error(error.message);
weatherInfoElement.innerHTML = '<p>Erro ao obter dados de previsão do tempo.</p>';
});
}



function exibirDadosMeteorologicos(data) {
  const weatherInfoElement = document.getElementById('weather-info');

  if (data.main && data.weather && data.weather.length > 0) {
    const temperaturaKelvin = data.main.temp;
    const descricao = data.weather[0].description;
    const temperaturaCelsius = temperaturaKelvin - 273.15;

    let imagemSrc = '';
    let imagemClass = 'weather-image'; // Classe padrão para todas as imagens

    // Verifica a descrição do clima para definir a imagem
    if (descricao.includes('sol')) {
      imagemSrc = 'sol.png';
      imagemClass = 'sol-image';
    } else if (descricao.includes('chuva')) {
      imagemSrc = 'chuva.png';
      imagemClass = 'chuva-image';
    } else if (descricao.includes('nublado')) {
      imagemSrc = 'nublado.png';
      imagemClass = 'nublado-image';
    } else if (descricao.includes('nuvens quebradas')) {
      imagemSrc = 'nublado.png';
      imagemClass = 'nuvens-quebradas-image';
    } else if (descricao.includes('céu limpo')) {
      imagemSrc = 'sol.png';
      imagemClass = 'ceu-limpo-image';
    }

    const conteudo = `<p>Temperatura: ${temperaturaCelsius.toFixed(2)}°C</p>
                      <p>Descrição: ${descricao}</p>
                      <img src="${imagemSrc}" alt="Condição meteorológica" class="${imagemClass}">`;

    weatherInfoElement.innerHTML = conteudo;
  } else {
    throw new Error('Os dados da previsão do tempo não estão disponíveis.');
  }
}

// Chame a função para consultar a localização ao carregar a página
consultarLocalizacao();