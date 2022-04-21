import {createSlice} from "@reduxjs/toolkit";
import {apiCall} from "../../../../../api";
// import {toast} from "react-toastify";
import {useEffect,useState} from "react";
import {toast} from "react-toastify";

const slice = createSlice({
    name: 'taminot',
    initialState: {
        taminot: [],
        current:false,
        taminotjami:0,

    },
    reducers: {
        getFrom: (state, action) => {
            console.log(action.payload)
            state.taminot = action.payload.object
            let amount=0
            action.payload.object.map(item=> {
                amount+=item.storeDebt
            })
            state.taminotjami=amount
                console.log(state.taminotjami)
        },
        savefrom: (state,action) => {
            toast.success('Diller saqlandi!')
            state.current=!state.current
        },
        savefrom2: (state,action) => {
            state.current=!state.current
            toast.success('Qarz o`chdi !')
        },
        editfrom: (state,action) => {
            toast.success('Diller tahrirlandi')
            state.current=!state.current
        },
        deletefrom:(state,action)=>{
            toast.success('Diller o`chirildi!')
            state.current=!state.current
        }
    }
});

export const getTaminot=(data)=>apiCall({
    url: '/supplier/get-by-business/'+data,
    method:'get',
    onSuccess: slice.actions.getFrom.type
});
export const getTaminot2=(data)=>apiCall({
    url: '/supplier/get-purchase-by-dealerId/'+data,
    method:'get',
    onSuccess: slice.actions.getFrom.type
});

export const saveTaminot=(data)=>apiCall({
    url: '/supplier',
    method:'post',
    data,
    onSuccess: slice.actions.savefrom.type
});

export const editTaminot=(data)=>apiCall({
    url: '/supplier/'+data.id,
    method: 'put',
    data,
    onSuccess: slice.actions.editfrom.type
});

export const deleteTaminot=(data)=>apiCall({
    url: '/supplier/'+data,
    method:'delete',
    data,
    onSuccess: slice.actions.deletefrom.type
})
export const qarzuzishTaminot=(data)=>apiCall({
    url: '/supplier/repayment/'+data.id,
    method:'post',
    data,
    onSuccess: slice.actions.savefrom2.type
});

export default slice.reducer