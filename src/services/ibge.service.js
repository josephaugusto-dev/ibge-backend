import axios from "axios"

const IBGE_BASE_URL = "https://servicodados.ibge.gov.br/api/v1"

export async function getStates() {
  const response = await axios.get(`${IBGE_BASE_URL}/localidades/estados`)

  return response.data.map((state) => ({
    id: state.id,
    nome: state.nome,
    sigla: state.sigla,
    regiao: state.regiao.nome
  }))
}

export async function getMunicipiosByState(sigla) {
  const response = await axios.get(
    `${IBGE_BASE_URL}/localidades/estados/${sigla}/municipios`
  )

  return response.data.length
}

export async function getMunicipiosNamesByState(sigla) {
  const response = await axios.get(
    `${IBGE_BASE_URL}/localidades/estados/${sigla}/municipios`
  )

  return response.data
    .map((municipio) => ({
      id: municipio.id,
      nome: municipio.nome
    }))
    .sort((a, b) => a.nome.localeCompare(b.nome, "pt-BR"))
}

export async function getStatesWithMunicipios() {
  const states = await getStates()

  const result = await Promise.all(
    states.map(async (state) => {
      const totalMunicipios = await getMunicipiosByState(state.sigla)

      return {
        estado: state.nome,
        sigla: state.sigla,
        regiao: state.regiao,
        totalMunicipios
      }
    })
  )

  return result
}