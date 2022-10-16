import axios from "axios";
import classNames from "classnames";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { MapQuest } from "../../shared/MapQuest";
import { CatalogList } from "./components/CatalogList";
import { CatalogItem } from "./model";
import { useCatalog } from "./useCatalog";
export const CatalogPage: React.FC = () => {
    interface FormData{
        name:string;
        email:string;
        isCompany?:string;
    }

    const {catalogdata} = useCatalog();

    function validateEmail(email:string){
        var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        return re.test(email.toLocaleLowerCase());

    }


    //passando come secondo parametro della funzione use effect un array vuoto
    //indichiamo che la funzione (primo parametro) verrà invocata solo all'avvio del componente
    //se passiamo altri parametri o stati verrà invocata quando questi cambiano
    const [dirty,setDirty] = useState<boolean>(false);
    const [formData,setFormData] = useState<FormData>({name:'',email:"",isCompany:""});
    const isValid = formData.name.length > 3  ;
    const isEmailValid = validateEmail(formData.email) ;
    
  
    const isValidForm = isValid && isEmailValid ;
    const onChangeInput = (e:React.ChangeEvent<HTMLInputElement>)=> {

        setFormData({
            ...formData,
            [e.currentTarget.name]:e.currentTarget.value });
            if(!dirty) setDirty(true);




    }

    const onSubmitFormHandler = () => {
        window.alert(JSON.stringify(formData))

        if(dirty) setDirty(false);
    }
    

    return (
        <div className="page">
            <div className=" page-wrapper">
                <h2 className="title">Catalog</h2>


                <form onSubmit={onSubmitFormHandler}>
                    <input 
                    type="text"
                     name ="name" placeholder="insert name" value={formData.name}
                      onChange={onChangeInput} className={classNames("form-control",{"is-valid":isValid},{"is-invalid":!isValid && dirty})}  >
                    </input>

                    <input 
                    type="text"
                     name ="email" placeholder="insert email" value={formData.email}
                      onChange={onChangeInput} className={classNames("form-control",{"is-valid":isEmailValid},{"is-invalid":!isEmailValid && dirty})}  >
                    </input>




                    <button  type="submit" className="btn btn-primary" disabled={!isValidForm} >send</button>
                </form>



                <CatalogList items={ catalogdata} />

 


                <NavLink to="/">
                    <i className="fa fa-times close-button"></i>
                </NavLink>
            </div>


        </div>
    )
}