import SocialNetworks from './SocialNetworks';
import InformationContainer from './InformationContainer';

//chamando imagem como se fosse um componente
import Avatar from '../img/me.jpg'

import '../styles/components/sidebar.sass'

const SideBar = () => {
    return(
        //trabalhando com laterais que podem ficar fora de contexto no site
       <aside id="sidebar">
           {/*chamando imagem como componente */}
           <img src={Avatar} alt="Victor Brum"></img>
           <p className="title">Programador</p>
           <SocialNetworks/>
           <InformationContainer/>
           {/*<a href="https://drive.google.com/file/d/1Gu0qRIKaFDH35aK3VWK51wKVG8ud7rgv/view" className="btn" download="CurriculoVictor.pdf">
               Download currículo
            </a>*/}
       </aside>
    )
}

export default SideBar;