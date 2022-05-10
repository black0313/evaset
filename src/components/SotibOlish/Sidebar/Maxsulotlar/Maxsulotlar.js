import down from '../../../../img/arrow-right2.svg'
import mahsulot from '../../../../img/box.svg'
import {connect} from "react-redux";
import './mahsulotlar.css'
import {useState} from 'react'
import {active} from "../../../../reducer/functionreducer";
import {Switch, Route, Link} from 'react-router-dom'
import {getStyle} from "chart.js/helpers";

function Mahsulotlar({active}) {

    const [active2, setActive] = useState(false);
    const [classs,setClasss] = useState('');
    const [fill,setfill] = useState('');
    const [fontsiza,setfontsize] = useState('');

    function toggle() {
        if(classs===''){
            setClasss('right2')
            setfill('fill')
            setfontsize('fontsize')
            let style = document.getElementById('mahsulot')
            style.classList.add('mahsulot2')
        }
        else{
            setClasss('')
            setfill('')
            setfontsize('')
            let style = document.getElementById('mahsulot')
            style.classList.remove('mahsulot2')
        }
    }

    function sidebaractive(){
        const windowWidth = window.innerWidth;
        if(windowWidth <= 767){
            active()
        }
        ToggleSwitch()
        if (activeback2===true){
            setactiveback2(!activeback2)
        }else if (activeback3===true){
            setactiveback3(!activeback3)
        }
    }
    function sidebaractive2(){
        const windowWidth = window.innerWidth;
        if(windowWidth <= 767){
            active()
        }
        ToggleSwitch2()
        if (activeback===true){
            setactiveback(!activeback)
        }else if (activeback3===true){
            setactiveback3(!activeback3)
        }
    }
    function sidebaractive3(){
        const windowWidth = window.innerWidth;
        if(windowWidth <= 767){
            active()
        }
        ToggleSwitch3()
        if (activeback===true){
            setactiveback(!activeback)
        }else if (activeback2===true){
            setactiveback2(!activeback2)
        }
    }

    const [activeback,setactiveback] = useState(false)
    const [activeback2,setactiveback2] = useState(false)
    const [activeback3,setactiveback3] = useState(false)

    const ToggleSwitch = () =>{
        activeback? setactiveback(false) : setactiveback(true)
    }
    const ToggleSwitch2 = () =>{
        activeback2? setactiveback2(false) : setactiveback2(true)
    }
    const ToggleSwitch3 = () =>{
        activeback3? setactiveback3(false) : setactiveback3(true)
    }

    return (
        <div className={'row mahsulot'} id={'mahsulot'}>
            <div className="imgDiv" onClick={toggle}>
                <div className={'d-flex align-items-center'}>

                    <svg className={`sidebar-img ${fill}`} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.16992 7.44L11.9999 12.55L20.7699 7.46997" stroke="#3A3C40" stroke-width="1.5"
                              stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M12 21.61V12.54" stroke="#3A3C40" stroke-width="1.5" stroke-linecap="round"
                              stroke-linejoin="round"/>
                        <path
                            d="M9.9306 2.48L4.59061 5.45003C3.38061 6.12003 2.39062 7.80001 2.39062 9.18001V14.83C2.39062 16.21 3.38061 17.89 4.59061 18.56L9.9306 21.53C11.0706 22.16 12.9406 22.16 14.0806 21.53L19.4206 18.56C20.6306 17.89 21.6206 16.21 21.6206 14.83V9.18001C21.6206 7.80001 20.6306 6.12003 19.4206 5.45003L14.0806 2.48C12.9306 1.84 11.0706 1.84 9.9306 2.48Z"
                            stroke="#3A3C40" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M16.9998 13.24V9.58002L7.50977 4.09998" stroke="#3A3C40" stroke-width="1.5"
                              stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>

                    <h4 className={`sidebar-text ${fontsiza}`}>Maxsulotlar</h4>
                </div>
                <svg className={`sidebar-img  ${classs}`} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.91016 19.92L15.4302 13.4C16.2002 12.63 16.2002 11.37 15.4302 10.6L8.91016 4.07999" stroke="#3A3C40" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>            </div>

                <ul>
                    <li className={activeback?"b3":"b4"}  onClick={sidebaractive}><Link to={'/headerthird/mahsulotRuyxati'} className={'li-text'}>Maxsulotlar ruyxati</Link></li>
                    <li><Link to={'/headerthird/mahsulotRuyxati/barcaMahsulot/taxrirlash'} className={'mahqosh'}>Maxsulot qo`shish</Link></li>
                    {/*<li><Link to={'/mahsulotShtrix'} className={'mahqosh'}>Shtrix kodlar</Link></li>*/}
                    {/*<li><Link to={'/turliTavar'} className={'mahqosh'}>Turli Tavarlar</Link></li>*/}
                    <li><Link to={'/headerthird/mahsulotRuyxati/mahsulotImporti'} className={'mahqosh'}>Mahsulot Importi</Link></li>
                    {/*<li><Link to={'/mavjudImport'} className={'mahqosh'}>Mavjud miq import</Link></li>*/}

                    {/* <li  onClick={sidebaractive}><Link to={'/headerthird/sotuvNarxGuruhlanishi'} className={'mahqosh'}>Sotuv narxining guruhi</Link></li> */}
                    {/*<li  onClick={sidebaractive}><Link to={'/headerthird/sotuvNarxGuruhlanishi'} className={'mahqosh'}>Sotuv narxining guruhi</Link></li>*/}
                    {/*<li><Link to={'/ulcovBirliklar'} className={'mahqosh'}>O`lchov birliklar</Link></li>*/}
                    <li className={activeback2?"b3":"b4"} onClick={sidebaractive2}><Link to={'/headerthird/bolimlar'} className={'li-text'}>Bo`limlar</Link></li>
                    <li className={activeback3?"b3":"b4"} onClick={sidebaractive3}><Link to={'/headerthird/firmalar'} className={'li-text'}>Firmalar</Link></li>
                    {/*<li><Link to={'/kafolat'} className={'mahqosh'}>Kafolatlar</Link></li>*/}
                </ul>


        </div>
    )
}

export default connect(({functionreducer:{func}})=>({func}),{active}) (Mahsulotlar)
