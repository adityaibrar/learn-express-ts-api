import express from 'express'
import authRoutes from './routes/auth.route'
import userRoutes from './routes/user.route'
import categoryRoutes from './routes/category.route'
import produrouter from './routes/product.route'

const app = express()

app.use(express.json())

app.use('/auth', authRoutes)
app.use('/user', userRoutes)
app.use('/category', categoryRoutes)
app.use('/product', produrouter)

export default app;