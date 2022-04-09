import Logo from "./Logo";
import './ContactSection.scss';
import translations from '../texts.json';
import { useSelector } from "react-redux";

function ContactSection() {
    const lenguage = useSelector(state => state.lenguage);

    return ( 
        <div id="aboutUsSection">
            <Logo />

            <div className="aboutUsSection_Links">
                <a href="#">{translations.ContactSection.links.WhoWeAre[lenguage]}</a>
                <a href="#">{translations.ContactSection.links.privacyPolicy[lenguage]}</a>
                <a href="#">{translations.ContactSection.links.fidelityProgram[lenguage]}</a>
                <a href="#">{translations.ContactSection.links.ourStores[lenguage]}</a>
                <a href="#">{translations.ContactSection.links.iWannaBeFranchisee[lenguage]}</a>
                <a href="#">{translations.ContactSection.links.advertiseHere[lenguage]}</a>
            </div>

            <div className="aboutUsSection_form">
                <form action="" method="post">
                    <p>{translations.ContactSection.form.talkToUs[lenguage]}</p>
                    <input type="text" name="nombre" placeholder={translations.ContactSection.form.name[lenguage]}/>
                    <textarea name="mensaje" id="aboutUsSection_form--textarea" cols="30" rows="10" placeholder={translations.ContactSection.form.message[lenguage]}></textarea>
                    <button type="submit">{translations.ContactSection.form.sendMessage[lenguage]}</button>
                </form>
            </div>
        </div>
     );
}

export default ContactSection;