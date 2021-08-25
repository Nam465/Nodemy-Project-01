import { createContext } from 'react'

const AuthenticateContext = createContext(null)

export default AuthenticateContext

export const AuththenticateProvider = AuthenticateContext.Provider