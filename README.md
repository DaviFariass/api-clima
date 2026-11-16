# Clima agora
 
Aplicação web que mostra a temperatura e as condições do tempo de qualquer cidade, ou do lugar onde você está. Feita com HTML, CSS e JavaScript puros, sem frameworks e sem etapa de build.
 
## Funcionalidades
 
- Busca por nome de cidade.
- Uso da localização atual do dispositivo (com permissão do navegador).
- Temperatura em °C, descrição do tempo, sensação térmica, umidade, vento e temperaturas mínima e máxima.
- Ilustração do clima (sol, nublado ou chuva).
- Fundo em degradê que muda conforme o tempo: sol, nublado, chuva e noite.
- Mensagens claras para cidade não encontrada, localização bloqueada e falha de conexão.
- Layout responsivo, do celular ao desktop, com foco visível para navegação por teclado e respeito à preferência de "reduzir animações".
## Tecnologias
 
- HTML5, CSS3 e JavaScript (ES6)
- [OpenWeatherMap API](https://openweathermap.org/current) (dados do tempo atual)
- Geolocation API do navegador
- Fonte [Bricolage Grotesque](https://fonts.google.com/specimen/Bricolage+Grotesque) via Google Fonts
## Como executar
 
1. Baixe ou clone o repositório.
2. Abra o arquivo `index.html` no navegador.
Não é preciso instalar nada. Para usar a localização atual, alguns navegadores exigem que a página rode em `https` ou em `localhost`. Nesse caso, use uma extensão como o Live Server do VS Code.
 
## Estrutura
 
```
api-clima/
├── index.html    # página, estilos e lógica
├── sol.png       # ilustração para céu limpo
├── nublado.png   # ilustração para nublado
├── chuva.png     # ilustração para chuva e tempestade
├── LICENSE
└── README.md
```
 
## Chave da API
 
O projeto usa uma chave da OpenWeatherMap definida na constante `API_KEY`, dentro do código. Para usar a sua:
 
1. Crie uma conta gratuita em [openweathermap.org](https://openweathermap.org/api).
2. Copie sua chave em *API keys*.
3. Substitua o valor de `API_KEY` no `index.html`.
> Como o código roda no navegador, a chave fica visível para quem abrir o projeto. Não use uma chave com plano pago ou dados sensíveis.
 
## Licença
 
Distribuído sob a licença descrita no arquivo [LICENSE](LICENSE).
 
