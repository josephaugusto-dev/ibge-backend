import express from "express"
import cors from "cors"
import ibgeRoutes from "./routes/ibge.routes.js"

const app = express()

const allowedOrigins = [
  "http://localhost:3000",
  process.env.FRONTEND_URL
].filter(Boolean)

app.use(cors({
  origin: allowedOrigins,
}))

app.use(express.json())

app.use("/api/ibge", ibgeRoutes)


const PORT = process.env.PORT || 3333

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`)
})