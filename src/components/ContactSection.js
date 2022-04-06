import Logo from "./Logo";
import './ContactSection.scss';

function ContactSection() {
    return ( 
        <div id="aboutUsSection">
            <Logo />

            <div className="aboutUsSection_Links">
                <a href="#">Quienes somos</a>
                <a href="#">Polìtica de privacidad</a>
                <a href="#">Programa de fidelidad</a>
                <a href="#">Nuestras tiendas</a>
                <a href="#">Quiero ser franquiciado</a>
                <a href="#">Anuncie aquí</a>
            </div>

            <div className="aboutUsSection_form">
                <form action="" method="post">
                    <p>Hable con nosotros</p>
                    <input type="text" name="nombre" placeholder="Nombre"/>
                    <textarea name="mensaje" id="aboutUsSection_form--textarea" cols="30" rows="10" placeholder="Mensaje"></textarea>
                    <button type="submit">Enviar mensaje</button>
                </form>
            </div>
        </div>
     );
}

export default ContactSection;