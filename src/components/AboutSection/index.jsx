import "./AboutSection.modules.scss"

const AboutSection = () => {
    return (
        <section className="about-section-container">
           <div className="image-dark" 
           role="img"
           aria-label="Cadeira dobrável preta com estrutura de metal vista de perfil"
           ></div>
           <div className="about-text container-padding">
            <h2>ABOUT OUR FURNITURE</h2>
            <p>Our multifunctional collection blends design and function to suit your individual taste. Make each room unique, or pick a cohesive theme that best express your interests and what inspires you. Find the furniture pieces you need, from traditional to contemporary styles or anything in between. Product specialists are available to help you create your dream space. </p>
           </div>
           <div className="image-light"
           role="img"
           aria-label="Cadeira branco com um fundo e luzes brancas"
           ></div>
          
        </section>
    )
}

export default AboutSection;