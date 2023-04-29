import pattern from './info-section.module.css';
import useScript from '../hooks/UseScript';

const InfoSection = (props) => {
    useScript(`${process.env.PUBLIC_URL}/AppearOnScroll.js`);

    return (
        <>
            <div className="flex flex-col">
                <header className="container pt-8 pb-20">
                    <div className="flex flex-col items-center">
                        <p>Bienvenido a</p>
                        <h1 title="Canasta"><img className="w-[385px]" src={process.env.PUBLIC_URL + '/canasta-vector.svg'} alt="Canasta" /></h1>
                        <a href="#AuthSection" onClick={props.onSwap} className="md:hidden font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                            Registrarse
                        </a>
                    </div>
                </header>
                <main>
                    <section className="container grid grid-cols-2">
                        <div className='reveal-on-scroll invisible'>
                            <img className="z-[2] relative" src={process.env.PUBLIC_URL + 'cabin.jpg'} alt="Cabin" />
                        </div>
                        <div>
                        <h3>Cabin</h3>
                                <p>Illa argumenta propria videamus, cur omnia sint paria peccata. Quamquam te quidem video minime esse deterritum. Beatus sibi videtur esse moriens. In qua quid est boni praeter summam&nbsp;voluptatem.</p>
                        </div>
                        <div>
                        <h3>Cabin2</h3>
                                <p>Illa argumenta propria videamus, cur omnia sint paria peccata. Quamquam te quidem video minime esse deterritum. Beatus sibi videtur esse moriens. In qua quid est boni praeter summam&nbsp;voluptatem.</p>
                        </div>
                        <div className='reveal-on-scroll invisible'>
                            <img className="z-[2]" src={process.env.PUBLIC_URL + 'cabin.jpg'} alt="Cabin" />
                        </div>
                        <div className='reveal-on-scroll invisible'>
                            <img className="z-[2]" src={process.env.PUBLIC_URL + 'cabin.jpg'} alt="Cabin" />
                        </div>
                        <div>
                        <h3>Cabin</h3>
                                <p>Illa argumenta propria videamus, cur omnia sint paria peccata. Quamquam te quidem video minime esse deterritum. Beatus sibi videtur esse moriens. In qua quid est boni praeter summam&nbsp;voluptatem.</p>
                        </div>
                        <div>
                        <h3>Cabin2</h3>
                                <p>Illa argumenta propria videamus, cur omnia sint paria peccata. Quamquam te quidem video minime esse deterritum. Beatus sibi videtur esse moriens. In qua quid est boni praeter summam&nbsp;voluptatem.</p>
                        </div>
                        <div className='reveal-on-scroll invisible'>
                            <img className="z-[2]" src={process.env.PUBLIC_URL + 'cabin.jpg'} alt="Cabin" />
                        </div>
                    </section>
                    <section className="container flex justify-center">
                        <p className="h2">Rent the whole place for $3,670/night.</p>
                        <p>Maximum of 40 people.</p>
                    </section>
                </main>
                <footer>
                    <div className="container flex justify-center">
                        <p>© Camp Chippewa</p>
                    </div>
                </footer>
            </div>
        </>
    )
}

export default InfoSection;