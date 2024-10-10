const url = ‘https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json’

async function visualizarInformacoesGlobais() {
const res = await fetch(url)
const dados = await res.json()
const pessoasConectadas = (dados.total._pessoas_conectadas / 1e9)
const pessoasNoMundo = (dados.total_pessoas_mundo / 1e9)
const horas = parseInt(dados.temp_medio)
const minutos = Math.round ((dados.tempo_medio- horas) * 100)
const porcentagemConectada = ((pessoasConectadas / pessoasNoMundo ) * 100).toFixed(2)

  const paragrafo = document.createElement('p')
  paragrafo.classList.add('graficos-container__texto')
 paragrafo.innerHTML = “Você sabia que o mundo tem<span>${pessoasNoMundo} bilhões</span> de pessoas e que aproximadamente <span>${pessoasConectadas} bilhões</span> estãoconectadas em alguma rede social e passam em média <span>${horas}horas</span> e <span>${minutos} minutos</span> conectadas.<br>Issosignifica que aproximadamente<span>${porcentagemConectada}%</span> de pessoas estão conectadasem alguma rede social.”

const container = document.getElemetById('graficos-container')
container.appendChild(paragrafo)
}

vizualizarInformacoesGlobais()
