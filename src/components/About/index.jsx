import "./About.modules.scss"

const About = () => {
    return (
        <section className="about-wrapper">
            <div className="about-image-container first" >
                <img className="image-about dark" src="./assets/images/image-about-dark.jpg" alt="" />
            </div>
            <div className="about-text">
                <h3 className="title-about">About our furniture</h3>
                <p className="description">Our multifunctional collection blends design and function to suit your individual taste. Make each room unique, or pick a cohesive theme that best express your interests and what inspires you. Find the furniture pieces you need, from traditional to contemporary styles or anything in between. Product specialists are available to help you create your dream space.</p>
            </div>
            <div className="about-image-container second">
                <img className="image-about light" src="./assets/images/image-about-light.jpg" alt="" />
            </div>
        </section>
    )
}

export default About;