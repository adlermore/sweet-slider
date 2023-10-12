
import '../../assets/scss/_hoverAnimation.scss'

const HoverAnimation = () => {


    return (
        <div className="gsap_section welcome_btn">
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" class="goo">
                    <defs>
                        <filter id="filter-goo-1" >
                            <feGaussianBlur in="SourceGraphic"  stdDeviation="10" result="blur" />
                            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
                            <feComposite in="SourceGraphic" in2="goo" />
                        </filter>
                    </defs>
                </svg>

                <span className="button--bubble__container" id="component-1">
                    <a href="#campaign" className="button button--bubble">
                    Get Started
                    </a>
                    <span className="button--bubble__effect-container button__container">
                        <span className="circle top-left"></span>
                        <span className="circle top-left"></span>
                        <span className="circle top-left"></span>

                        <span className="button effect-button"></span>

                        <span className="circle bottom-right"></span>
                        <span className="circle bottom-right"></span>
                        <span className="circle bottom-right"></span>
                    </span>
                </span>
            </div>
        </div>
    )
}

export default HoverAnimation;