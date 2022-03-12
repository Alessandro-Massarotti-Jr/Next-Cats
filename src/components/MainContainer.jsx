import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'
import ImportScripts from './ImportScripts.jsx'

export default function MainContainer({children}){
    return(
        <>
        <Navbar/>
        <div> { children }</div>
        <Footer/>
        <ImportScripts/>

        </>
    )
}