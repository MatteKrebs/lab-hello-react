import imageOne from '../images/image1.png'
import imageTwo from '../images/image2.png'

function Navigation(){
    return (
        <div className='navigation'>
            <img src={imageOne} alt="ironhack-logo" />
            <img src={imageTwo} alt="right-nav" />
        </div>
    )
}

export default Navigation;