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
                    <section className="container grid grid-cols-2 gap-x-5 gap-y-8">
                        <div className='reveal-on-scroll invisible'>
                            <img className="z-[2] relative" src={process.env.PUBLIC_URL + 'org.jpg'} alt="Cabin" />
                        </div>
                        <div>
                        <h3 className='font-bold'>Organizaciones</h3>
                                <p>Brinda a tu equipo proyectos de llamados a la accion emergentes, visibiliza tu organizacion y seamos parte del cambio que necesitamos.</p>
                        </div>
                        <div>
                        <h3 className='font-bold'>Voluntarios</h3>
                                <p>Participa de modo activo en actos de servicio a tu comunidad en tu entorno inmediato o local y recibe reconocimiento como una persona multidisciplinaria.</p>
                        </div>
                        <div className='reveal-on-scroll invisible'>
                            <img className="z-[2]" src={process.env.PUBLIC_URL + 'volunteer.jpg'} alt="Cabin" />
                        </div>
                        <div className='reveal-on-scroll invisible'>
                            <img className="z-[2]" src={process.env.PUBLIC_URL + 'admin.jpg'} alt="Cabin" />
                        </div>
                        <div>
                        <h3 className='font-bold'>Administradores</h3>
                                <p>Espacio para desarrolladores, moderadoresy participacion pasiva de reportes, ideal para mentes activas.</p>
                        </div>
                        <div>
                        <h3 className='font-bold'>Centinelas</h3>
                                <p>¿Viste algo que podria cambiarse, reportarse o puedes ayudar? Este rol es perfecto para ti y todos los que querramos reportar un cambio inmediato.</p>
                        </div>
                        <div className='reveal-on-scroll invisible'>
                            <img className="z-[2]" src={process.env.PUBLIC_URL + 'sentinel.jpg'} alt="Cabin" />
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