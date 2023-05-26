import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";
import addEmployeeAction from "../../redux/Actions/addEmployeeActions";
import EmployeeData from "../../data/EmployeeData";
/* import SelectInput from "../selectInput/selectInput"; */
import { states, departments } from "../../data/locationData";
import Modal from '../../components/modal/modal'
import SelectInput from 'pacquet_select'


const schema = Yup.object().shape({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  birthDate: Yup.string().required("birthDate is required"),
  startDate: Yup.string().required("startDate is required"),
  street: Yup.string().required("Last name is required"),
  city: Yup.string().required("birthDate is required"),
  zipCode: Yup.string().required("startDate is required"),
});

/**
 * Formulaire
 *
 * @returns {JSX.Element} Composant de formulaire
 */

function Form() {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  /**
   * Fonction de soumission du formulaire
   *
   * @param {Object} data - Données du formulaire soumises
   */
   const navigate = useNavigate();
  const onSubmit = (data) => {
    console.log(EmployeeData);
    dispatch(addEmployeeAction(data, EmployeeData));
    setIsOpen(true)
   
  };

  const [isOpen, setIsOpen] = useState(false);

  return (

   <div className="contenant_form">

 
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <h2> Formulaire contact </h2>
      
      <div className="form-control">
        <label>First Name</label>
        <input type="text" name="firstName" {...register("firstName")} />
        {errors.firstName && <span className="error">{errors.firstName.message}</span>}
      </div>
      <div className="form-control">
        <label>Last Name</label>
        <input type="text" name="lastName" {...register("lastName")} />
        {errors.lastName && <span className="error">{errors.lastName.message}</span>}
      </div>

      <div>
        <label htmlFor="birthDate">birth date </label>
        <Controller
          name="birthDate"
          control={control}
          /* {...register("birthDate")} */
          render={({ field }) => (
            <DatePicker
              {...field}
              selected={field.value}
              onChange={(date) => field.onChange(date)}
              dateFormat="dd/MM/yyyy"
            />
            
          )}
         
        />
         {errors.birthDate && <p className="error">{errors.birthDate.message}</p>}
        
      </div>

      <div>
        <label htmlFor="startDate">Start date</label>
        <Controller
          name="startDate"
          control={control}
          render={({ field }) => (
            <DatePicker
              type="date"
              dateFormat="dd/MM/yyyy"
              selected={field.value}
              onChange={(date) => {
                field.onChange(date);
                console.log(field.value);
              }}
              value={field.value ? field.value.toLocaleDateString("fr-FR") : ""}
            />
          )}
        />
        {errors.startDate && <p className="error">{errors.startDate.message}</p>}
      </div>

      <div className="adress_form">
        <div>Address</div>
        <div>
          <label htmlFor="street">Street</label>
          <input
            type="text"
            placeholder="21 Jump Street"
            {...register("street", { required: true })}
          />
          {errors.street && <p className="error">{errors.street.message}</p>}
        </div>

        <div>
          <label htmlFor="city">City</label>
          <input
            type="text"
            placeholder="Vancouver"
            {...register("city", { required: true })}
          />
          {errors.city && <p className="error">{errors.city.message}</p>}
        </div>

        <div>
          <label htmlFor="state">State</label>
          <SelectInput
            states={states}
            register={register}
           
          />
          {errors.state && <p className="error">{errors.state.message}</p>}
        </div>
        <div>
          <label htmlFor="zipCode">Zip code</label>
          <input type="number" placeholder="59000" {...register("zipCode")} />
          {errors.zipCode && <p className="error">{errors.zipCode.message}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="departement">Departements</label>
        <SelectInput
            departements={departments}
            register={register}
          />
        {errors.email && <p className="error">{errors.email.message}</p>}
      </div>

   
      <input type="submit" />
    </form>
    {isOpen ? <Modal isOpen={isOpen} /> : <Modal isOpen={isOpen}/> }
    </div> 

  );
}

export default Form;
