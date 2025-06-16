import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './config'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Suspense fallback={"loading..."}>
      <RouterProvider router={router} />
    </Suspense>
  </StrictMode>,
)
