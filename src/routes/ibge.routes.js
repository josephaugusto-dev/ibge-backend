import { Router } from "express"

import { getStates, getStatesWithMunicipios } from "../services/ibge.service.js"


const router = Router()

router.get("/states", async (req, res) => {
  try {
    const states = await getStates()
    res.json(states)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: "Erro ao buscar estados do IBGE" })
  }
})

router.get("/municipios", async (req, res) => {
  try {
    const statesWithMunicipios = await getStatesWithMunicipios()

    const result = statesWithMunicipios.map(({ estado, sigla, totalMunicipios }) => ({
      estado,
      sigla,
      totalMunicipios
    }))

    res.json(result)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: "Erro ao buscar municípios do IBGE" })
  }
})

router.get("/summary", async (req, res) => {
  try {
    const data = await getStatesWithMunicipios()
    res.json(data)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: "Erro ao buscar resumo do IBGE" })
  }
})

export default router