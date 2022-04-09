import { useSelector } from "react-redux";
import texts from '../texts.json';
import './LoginPage.scss';

function LoginPage() {
    const lenguage = useSelector(state => state.lenguage);

    return ( 
        <div id="loginForm">
            <form action="/login">
                <h2>{texts.Login.login[lenguage]}</h2>
                <input type="email" name="email" placeholder={texts.Login.inputEmail[lenguage]}/>
                <input type="password" name="password" placeholder={texts.Login.inputPassword[lenguage]}/>
                <button type="submit">
                    {texts.Login.login[lenguage]}
                </button>
            </form>
        </div>
     );
}

export default LoginPage;