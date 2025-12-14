import "./SliderControls.modules.scss"
import iconPrev from "/assets/images/icon-angle-left.svg"
import iconNext from "/assets/images/icon-angle-right.svg"


const SliderControls = ({handlePrev, handleNext}) => {

    

    return (
        <section className='slider-controls-container'>
            <button  type="button" onClick={handlePrev} aria-label="Slide Anterior" >
                <img src={iconPrev} alt="Imagem de uma seta para a esquerda" />
            </button>
            <button  type="button" onClick={handleNext} aria-label="Próximo Slide" >
                <img src={iconNext} alt="Imagem de uma seta para a direita" />
            </button>
        </section>
    )
}


export default SliderControls