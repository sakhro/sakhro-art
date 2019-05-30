import { createGlobalStyle } from 'styled-components'
import { reboot } from './reboot'

export const GlobalStyles = createGlobalStyle`  
  ${reboot()}
`
