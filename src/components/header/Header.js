import React, {useEffect} from "react";
import Logo from '../../img/LOGO.png'
import './header.css'
import {useState} from "react";
import {ModalFooter,Modal,ModalBody,ModalHeader} from "reactstrap";
import {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";

function Header() {

    const {t,i18n} = useTranslation();
    const [onRegister, setRegister] = useState(false)

    function toggle() {

    }

    function ChangeLanguage(e){
        setLang(e.target.value)
        i18n.changeLanguage(e.target.value)
    }
    const [lang, setLang] = useState()


    useEffect(()=>{
        const storageLanguage = localStorage.getItem("i18nextLng")
        setLang(storageLanguage)
    },[])

    return(
            <div className={'header__ '}>
                <div className="homebody">
                    <div className="image__ ">
                        <a href=""><img src={Logo} alt=""/></a>
                    </div>
                    <div className="header-narx">
                            <a href="Narxlar">{t('Welcome.15')}</a>
                            <select value={lang} style={{cursor:"pointer"}} name="" id="" onChange={ChangeLanguage} >
                                <option value="uz">Uzbek</option>
                                <option value="ru">Русский</option>
                                <option value="ki">Крилл</option>
                                <option value="en">English</option>
                            </select>
                           <Link to={'register'}><button onClick={toggle}>{t('Welcome.16')}</button></Link>
                    </div>

                </div>
            </div>

    )
}
export default  Header
