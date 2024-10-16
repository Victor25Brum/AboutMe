//importando icones
import { FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa'

import '../styles/components/socialnetworks.sass';

//array de objetos (icones)
const socialNetworks = [
    { name: "linkedin", icon: <FaLinkedinIn/>, url: "https://www.linkedin.com/in/victor-brum-ab536b165" },
    { name: "github", icon: <FaGithub/>, url: "https://github.com/Victor25Brum" },
    { name: "instagram", icon: <FaInstagram/>, url: "https://www.instagram.com/brum_7" },
];

const SocialNetworks = () => {
    return (
        <section id="social-networks">
            {socialNetworks.map((network) => (
                <a href={network.url} className="social-btn" id={network.name} key={network.name} target="_blank" rel="noopener noreferrer">
                    {network.icon}
                </a>
            ))}
        </section>
    );
}

export default SocialNetworks;