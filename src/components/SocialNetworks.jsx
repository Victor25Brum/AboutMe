//importando icones
import { FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa'

import '../styles/components/socialnetworks.sass';

//array de objetos (icones)
const socialNetworks = [
    { name: "linkedin", icon: <FaLinkedinIn/>},
    { name: "github", icon: <FaGithub/>},
    { name: "instagram", icon: <FaInstagram/>},
];

const SocialNetworks = () => {
    return (
        <section id="social-networks">
        {/*percorrendo socialNetworks, pegando cada icone para ser exibido atraves da variavel network*/}
            {
                socialNetworks.map(
                    (network) => (
                        <a href="#" className="social-btn" id={network.name} key={network.name}>
                            {network.icon}
                        </a>
                    )
                )
            }
        </section>
    );
}

export default SocialNetworks;