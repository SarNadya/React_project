import React from 'react';
import { useForm } from "react-hook-form";
import './Form.css';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup, Tooltip, CircleMarker, Polygon } from 'react-leaflet';

const center = [59.939098, 30.315868];
const centerPolygon = [
  [
    [59.934386, 30.317523],
    [59.932275, 30.352628],
    [59.927658, 30.334990],
    [59.932770, 30.316123]
  ]
]
const colorOptions = {color: 'green'}

function Form() {
  const { register, formState: { errors }, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);
  return (
    <div>
      <div className='wrap'>
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
      <MapContainer
          center={center}
          zoom={10}
          style={{
            width:'100%',
            height:'500px'
          }}
        >
          <TileLayer
            url='https://api.maptiler.com/maps/basic-v2/{z}/{x}/{y}.png?key=ZsfEtlSXSbs4KA15V7Lt'
            attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
          />
          <CircleMarker
            center={[59.908494, 30.513564]}
            pathOptions={{color:'black'}}
            radius={8}
          />
          <Marker position={center}>
            <Popup>Мы находимся здесь</Popup>
            <Tooltip>Нажми</Tooltip>
          </Marker>

          <Polygon positions={centerPolygon} pathOptions={colorOptions}/>
        </MapContainer>
    </div>
  )
}

export default Form