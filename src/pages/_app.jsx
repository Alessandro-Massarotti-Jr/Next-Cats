import '../styles/globals.css'

import MainContainer from '../components/MainContainer.jsx'

function MyApp({ Component, pageProps }) {
  return(
     <MainContainer>
       <Component {...pageProps} />
     </MainContainer>
     )
}

export default MyApp
