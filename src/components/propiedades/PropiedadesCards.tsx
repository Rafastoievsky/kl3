import React, { type FC } from "react";
import {markerHouse, metersHouse, roomsHouse, watermarkkl13, wcHouse, 
    propFlipping, propRemate, propTraspaso, propVenta} from '../../assets'

import './cards.css'

interface Props {
  data: {
    id: number;
    descripcion: string;
    portada: ImageMetadata;
    pictures?: [ImageMetadata];
    colonia: string;
    direccion: string;
    size: string;
    habitaciones: string;
    wc: string;
    costo: number;
    servicio: string;
  };
}

const PropiedadesCards:FC<Props> = ({data}) => {
    const formatearComoMoneda = (numero:number)=>{

        return numero.toLocaleString('es-MX', {
            style: 'currency',
            currency: 'MXN'
        })
    }
  return (
    <div className="bg-white shadow-xl p-8 flex flex-col justify-center ">
      <div className="flex flex-col items-center">
        <a href="#">
          <div className="watermark-container">
            <img
              className="w-full h-[200px]"
              src={data.portada.src}
              alt={"casa"}
            />
            <img
              className="watermark"
              src={watermarkkl13.src}
              alt={"watermark"}
            />
          </div>
        </a>
      </div>
      <div className="flex flex-row my-2 ">
        <img
          className="h-6 items-start w-6 mr-4"
          src={markerHouse.src}
          alt={"marker"}
        />
        <p className="text-xl font-bold  text-mainBlue">{data.colonia}</p>
      </div>
      <p className="text-mainBlue my-1 h-14">{data.direccion}</p>
      <div className="grid grid-cols-3 mb-2">
        <div className="flex items-center my-2 col-span-1">
          <p className="bg-mainBlue p-1 px-2  w-[185px] h-8 text-white text-center font-bold">
            {formatearComoMoneda(data.costo)}
          </p>
        </div>
        <div className="flex flex-col col-span-2">
          <div className="flex justify-end mb-2">
            <p className="text-md text-mainBlue  pt-1 text-right font-semibold mr-4">
              {`${data.size} m`}
              <sup>2</sup>
            </p>
            <img className="imgIcon h-6 w-6" src={metersHouse.src} alt={"meters"} />
          </div>

          <div className="flex justify-end mb-2">
            <p className="text-md text-right pt-1 text-mainBlue font-semibold mr-4">
              {`${data.habitaciones} habitaciones`}
            </p>
            <img className="imgIcon h-6 w-6" src={roomsHouse.src} alt={"rooms"} />
          </div>
          <div className="flex justify-end mb-2">
            <p className="text-md text-right pt-1 text-mainBlue font-semibold mr-4">{`${
              data.wc
            } ${data.wc == "1" ? "baño" : "baños"}`}</p>
            <img className="imgIcon h-6 w-6" src={wcHouse.src} alt={"rooms"} />
          </div>
          <div className="flex justify-end mb-2 items-center">
            <p className="text-md text-right pt-1 text-mainBlue font-semibold mr-4">{`Por medio de ${data.servicio}`}</p>
            <img
              className="imgIcon h-6 w-6"
              src={
                data.servicio == "Flipping Inmobiliario"
                  ? propFlipping.src
                  : data.servicio == "Remates Bancarios"
                  ? propRemate.src
                  : data.servicio == "Venta con Crédito"
                  ? propVenta.src
                  : propTraspaso.src
              }
              alt={"rooms"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropiedadesCards;
