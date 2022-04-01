import {Link} from 'react-router-dom'
import CSV from '../../../../../img/CSV.png'
import Excel from '../../../../../img/Excel.png'
import Print from '../../../../../img/Print.png'
import Data from '../../../../../img/Data.png'
import Pdf from '../../../../../img/PDF.png'
import Edit from '../../../../../img/Edit.png'
import Delete from '../../../../../img/Delete.png'
import './haridlarRoyxati.css'
import {connect} from "react-redux";
import {useEffect, useState} from "react";
import XaridReducer, {
    deleteXarid,
    editXarid,
    getXarid,
    getXarid2,
    getXarid3,
    getXarid4,
    saveXarid
} from "../reducer/XaridReducer";
import TaminotReducer, {getTaminot} from "../../Hamkorlar/reducer/TaminotReducer";
import users from "../../../../../reducer/users";
import branchreducer, {getbranch} from "../../../../../reducer/branchreducer";
import tolovreducer, {gettolovholati} from "../../../../../reducer/tolovreducer";

function HaridlarRoyxati({getXarid,getTaminot,getXarid3,getXarid4,gettolovholati,tolovreducer, branchreducer,getbranch,getXarid2, deleteXarid, saveXarid,XaridReducer,TaminotReducer,users}) {

    const [input, setInput] = useState(
        {
            baza: '',
            diller: '',
            xaridstatus: '',
            tulovstatus: '',
            sana: '',
            view: '',
            search: '',
        }
    )

    function baza(e) {
        input.baza = e.target.value
        let a = {...input}
        setInput(a)
    }
    function diller(e) {
        input.diller = e.target.value
        let a = {...input}
        setInput(a)
        if (input.diller !== 'barcasi'){
            getXarid3(input.diller)
        }
        else{
            getXarid3(users.businessId)
        }
    }
    function xaridstatus(e) {
        input.xaridstatus = e.target.value
        let a = {...input}
        setInput(a)
    }
    function tulovstatus(e) {
        input.tulovstatus = e.target.value
        let a = {...input}
        setInput(a)
        if (input.tulovstatus !== 'to`langan'){
            getXarid4(input.tulovstatus)
        }else {
            getXarid4(users.businessId)
        }
    }
    function sana(e) {
        input.sana = e.target.value
        let a = {...input}
        setInput(a)
    }
    function view(e) {
        input.view = e.target.value
        let a = {...input}
        setInput(a)
    }

    function search(e) {
        input.search = e.target.value
        let a = {...input}
        setInput(a)
    }

    function deleteX(item) {
        deleteXarid(item.id)
            getXarid(users.businessId)
    }

    useEffect(() => {
        getXarid(users.businessId)
        getTaminot(users.businessId)
        getbranch(users.businessId)
        gettolovholati(users.businessId)
        getXarid4(users.businessId)
    },[XaridReducer.current])

    return (
        <div className="col-md-12 mt-2">
            <div className="textHeaderHarid">
                <h2>Haridlar</h2>
            </div>
            <div className="rowStyleHarid">
                <div className="qoshish">
                    <h5>Filtirlash</h5>
                </div>
                <div className="row cont">
                    <div className="col-md-6">
                        <h6>Baza:</h6>
                        <select name="" value={input.baza} onChange={baza} id="">
                            {
                                branchreducer.branch.map(item=><option value="barcasi">{item.name}</option>)
                            }
                        </select>
                    </div>
                    <div className="col-md-6">
                        <h6>Diller:</h6>
                        {console.log(TaminotReducer.taminot)}
                        <select name="" id="" value={input.diller} onChange={diller}>
                            <option value="barcasi">Barchasi</option>
                            {
                                TaminotReducer.taminot.map(item=> <option value={item.id}>{item.name}</option>)
                            }
                        </select>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <h6>Harid status:</h6>
                        <select name="" id="" value={input.xaridstatus} onChange={xaridstatus}>
                            <option value="">Barchasi</option>
                        </select>
                    </div>
                    <div className="col-md-6">
                        <h6>To'lov status:</h6>
                        <select name="" value={input.tulovstatus} onChange={tulovstatus} id="">
                            {
                                tolovreducer.tolovholati.map(item=><option value={item.id}>{item.status}</option>)
                            }
                        </select>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="sana">
                            <h6>Sanani belgilang:</h6>
                            <input type="date" onChange={sana} value={input.sana}/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="rowStyleBH">
                <div className="qoshishBH">
                    <h5>Barcha haridlar</h5>
                    <Link to={'/headerthird/xaridQilish'}>
                        <button className='btn btn-primary'>+Qo'shish</button>
                    </Link>
                </div>
                <div className="izlashBH">
                    <div className="izlashBox1">
                        <p>Ko'rsatildi</p>
                        <select name="" id="" value={input.view} onChange={view}>
                            <option value="">25</option>
                            <option value="">50</option>
                        </select>
                        <button><img src={CSV} alt=""/> Export CSV</button>
                        <button><img src={Excel} alt=""/> Export Excel</button>
                        <button><img src={Print} alt=""/> Print</button>
                        <button><img src={Pdf} alt=""/>Export PDF</button>
                        <button><img src={Data} alt=""/>Malumotlarni kamaytirish</button>
                    </div>
                    <div className="izlashBox2">
                        <input type="text" placeholder='Izlash...' onChange={search} value={input.search}/>
                    </div>
                </div>
                <div className="table-responsive">
                    <table className='table table-striped table-bordered mt-4'>
                        <thead>
                        <tr>
                            <th>T/R</th>
                            <th>sana</th>
                            <th>Baza</th>
                            <th>Diller</th>
                            <th>Harid statusi</th>
                            <th>Dona narxi</th>
                            <th>Jami summa</th>
                            {/*<th>Qarz miqdori</th>*/}
                            <th>Qisqa eslatma</th>
                            <th>Amallar</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            XaridReducer.xaridlar.filter(val => {
                                if (input.search === '') {
                                    return val
                                } else if (val.name.toUpperCase().includes(input.search.toUpperCase())) {
                                    return val
                                }
                            }).map((item,index) => <tr key={item.id}>
                                <td>{index+1}</td>
                                <td>{item.date}</td>
                                <td>{item.branch.name}</td>
                                <td>{item.dealer.name}</td>
                                <td>{item.purchaseStatus.status}</td>
                                {/*<td></td>*/}
                                <td></td>
                                <td>{item.totalSum}</td>
                                <td>{item.description}</td>
                                <td>
                                    <Link to={'/headerthird/xaridQilish/'+item.id}>
                                        <button className='taxrirlash'><img src={Edit} alt=""/> Taxrirlash</button>
                                    </Link>
                                    <button className='ochirish' onClick={()=>deleteX(item)}><img src={Delete} alt=""/> O'chirish</button>
                                </td>
                            </tr>)
                        }
                        </tbody>
                    </table>
                </div>

                <p>Ko'rsatildi 1 ta sahifa 1 va yana 1 ta sahifa bor</p>
                <div className='sahifalar'>
                    <button>Ortga</button>
                    <button>1</button>
                    <button>Oldinga</button>
                </div>
            </div>
        </div>
    )
}

export default connect((TaminotReducer,XaridReducer,users,branchreducer,tolovreducer),{getXarid,getbranch,gettolovholati,getXarid4,getTaminot,getXarid2,getXarid3,saveXarid,editXarid,deleteXarid}) (HaridlarRoyxati)
