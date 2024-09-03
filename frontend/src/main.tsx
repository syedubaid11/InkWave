import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { Auth0Provider } from '@auth0/auth0-react'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <Auth0Provider
    domain="dev-7x6t7l46wa8j4i2r.au.auth0.com"
    clientId="iZJ5KReZX8negDjg8en1Nkds6BeQkPjM"
    authorizationParams={{
      redirect_uri:`http://localhost:5173/dashboard`
    }}
  >
  <StrictMode>
    <App />
  </StrictMode>
  </Auth0Provider>
)
