import React from 'react';
import { useForm } from "react-hook-form";
import './Form.css';

function Form() {
  const { register, formState: { errors }, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);
  return (
    <div className='conteiner'>
      <h1 className='title'>Заполните заявку на обратную связь</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type='text'
          {...register("lastName", {
            required: true,
            maxLength: 30,
            pattern: /^[А-Яа-я]+$/i
          })}
          aria-invalid={errors.lastName ? "true" : "false"}
          placeholder='Фамилия'
          className='item'
        />
        {errors.lastName?.type === 'required' &&
          <p role="alert" style={{color: 'red'}}>Поле "Фамилия" не заполнено</p>
        }
        {errors.lastName?.type === 'maxLength' &&
          <p role="alert" style={{color: 'red'}}>Поле "Фамилия" не может содержать больше 30 символов</p>
        }
        {errors.lastName?.type === 'pattern' &&
          <p role="alert" style={{color: 'red'}}>Поле "Фамилия" заполнено некорректно</p>
        }

        <input
          type='text'
          {...register("firstName", {
            required: true,
            maxLength: 30,
            pattern: /^[А-Яа-я]+$/i
          })}
          aria-invalid={errors.firstName ? "true" : "false"} 
          placeholder='Имя'
          className='item'
        />
        {errors.firstName?.type === 'required' &&
          <p role="alert" style={{color: 'red'}}>Поле "Имя" не заполнено</p>
        }
        {errors.firstName?.type === 'maxLength' &&
          <p role="alert" style={{color: 'red'}}>Поле "Имя" не может содержать больше 30 символов</p>
        }
        {errors.firstName?.type === 'pattern' &&
          <p role="alert" style={{color: 'red'}}>Поле "Имя" заполнено некорректно</p>
        }

        <input
        type='text'
          {...register("patronymic")}
          placeholder='Отчество'
          className='item'
        />

        <input
          type='email'
          {...register("email", {
            required: true,
            pattern: /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/i
          })}
          aria-invalid={errors.email ? "true" : "false"} 
          placeholder='Email'
          className='item'
        />
        {errors.email?.type === 'required' &&
          <p role="alert" style={{color: 'red'}}>Поле "Email" не заполнено</p>
        }
        {errors.email?.type === 'pattern' &&
          <p role="alert" style={{color: 'red'}}>Поле "Email" заполнено некорректно</p>
        }
        <input type="submit" className='btn btn-outline-primary'/>
      </form>
    </div>
  )
}

export default Form