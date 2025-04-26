import './style.css'
import carImg from '../../assets/car-card 1 (1).png'

export default function CardCar(){
    return (
        <>
            <div className="ct-card">
                <img src={carImg} alt="Carro" />
                <h1>Lorem ipsum dolor</h1>
            </div>
        </>
    )
}