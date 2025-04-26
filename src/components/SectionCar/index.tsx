import './style.css';
import Header from '../Header'
import CardCar from '../CardCar';
import SectionComment from '../SectionComment';
import Footer from '../Footer';


export default function SectionCar(){
    return (
        <>
            <Header></Header>
            <main className='section-main'>
                <div className='txt-top'>
                    <h3>Venha nos visitar</h3>
                </div>
                
                <section className='card-car-section'>
                    <CardCar></CardCar>
                    <CardCar></CardCar>
                </section>

                

                <section className='comments-section'>
                <div className='txt-top'>
                    <h3>Oque estão dizendo</h3>
                </div>
                    <SectionComment></SectionComment>
                    <SectionComment></SectionComment>
                    <SectionComment></SectionComment>
                    <SectionComment></SectionComment>
                </section>

                <footer>
                    <Footer></Footer>
                </footer>
            </main>
        </>
    )
}