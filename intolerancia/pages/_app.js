import HeaderComponent from '../src/components/HeaderComponent'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
  
  <>
  <HeaderComponent/>
  
  <Component {...pageProps} />
  
  </>
  
  )
}

export default MyApp
