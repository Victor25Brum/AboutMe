//react-icons.github.io/react-icons/icons?name=di

//importando icones
import {
    DiHtml5,
    DiCss3,
    DiJsBadge,
    DiJava,
    DiMysql,
    DiReact,
    DiWindows,
    DiPhotoshop,
    DiOnedrive,
    DiDatabase,
    DiGroovy,
    DiGitPullRequest
} from 'react-icons/di'

//importando estilo
import '../styles/components/technologiescontainer.sass';

//array de icones
const technologies = [
    { id: "html", name: "HTML5", nivel: "Intermediário", icon: <DiHtml5/> },
    { id: "css", name: "CSS3", nivel: "Intermediário", icon: <DiCss3/> },
    { id: "js", name: "JavaScript", nivel: "Básico", icon: <DiJsBadge/> },
    { id: "java", name: "Java", nivel: "Básico", icon: <DiJava/> },
    { id: "mysql", name: "MySQL", nivel: "Avançado", icon: <DiMysql/> },
    { id: "react", name: "ReactJS", nivel: "Básico", icon: <DiReact/> },
    { id: "win", name: "Windows", nivel: "Avançado", icon: <DiWindows/> },
    { id: "ps", name: "Photoshop", nivel: "Intermediário", icon: <DiPhotoshop/> },
    { id: "cloud", name: "Cloud", nivel: "Intermediário", icon: <DiOnedrive/> },
    { id: "migra", name: "Migração", nivel: "Intermediário", icon: <DiDatabase/> },
    { id: "groovy", name: "Groovy", nivel: "Intermediário", icon: <DiGroovy/> },
    { id: "json", name: "JSON", nivel: "Intermediário", icon: <DiGitPullRequest/> },
];

const TechnologiesContainer = () => {
    return(
        <section className='technologies-container'>
            <h2>Tecnologias</h2>
            <div className="technologies-grid">
                {/*percorrendo o array de tecnologias atraves da variavel tech*/}
                {
                    technologies.map(
                        (tech) => (
                            <div className="technology-card" id={tech.id} key={tech.id}>
                                {/*componente do icone acessado como objeto por tech*/}
                                {tech.icon}
                                <div className="technolgy-info">
                                    <h3>
                                        {/*nome do icone acessado como objeto por tech*/}
                                       {tech.name} 
                                    </h3>
                                    <p>
                                        {tech.nivel}
                                    </p>
                                </div>
                            </div>
                        )
                    )
                }
            </div>
        </section>
    )
}

export default TechnologiesContainer;