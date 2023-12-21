import React, { useEffect, useState } from "react";
import { propiedadesList } from "../../constants";
import PropiedadesCards from "./PropiedadesCards";

const AllPropiedades = () => {
  const [list, setList] = useState<any[]>([]);
  const [service, setService] = useState<string>('Todas las Propiedades KL3')
  useEffect(() => {
    setList(propiedadesList);
  }, []);

  const filterList = (value: string) => {
    if (value !== "") {
      const filtered = propiedadesList.filter((item: any) => {
        return item.servicio == value;
      });
      setService(value)
      setList(filtered);
    } else {
        setService('Todas las Propiedades KL3')
        setList(propiedadesList);
    }
  };

  return (
    <div className="my-8 ">
      <div className="bg-white md:px-[15rem] grid grid-cols-3 gap-4">
        <h1 className="text-4xl text-mainBlue font-medium col-span-2">
          BUSCA LA PROPIEDAD QUE NECESITAS
        </h1>

        <div className="mb-4 inline-block relative">
          <select
            id="services"
            name="services"
            placeholder={"Servicios"}
            className="cursor-pointer w-full bg-gray-50 rounded-full border 
                border-gray-700 focus:border-mainBlue focus:ring-2 focus:ring-mainBlue 
                text-base outline-none text-darkBlue py-2 px-4 leading-8 transition-colors duration-200 
                ease-in-out"
            onChange={(e) => filterList(e.target.value)}
          >
            <option value="">{"Todos los Servicios"}</option>
            <option value="Flipping Inmobiliario">
              {"Flipping Inmobiliario"}
            </option>
            <option value="Remates Bancarios">{"Remates Bancarios"}</option>
            <option value="Traspaso">{"Traspaso"}</option>
            <option value="Venta con Crédito">{"Venta con Crédito"}</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-8 text-gray-700"></div>
        </div>

        <div className="bg-mainBlue h-2 mb-4 col-span-3"></div>
      </div>
      <div className="bg-[#E8EBEF] ">
        <h1 className="md:px-[8rem] pt-10 text-4xl text-mainBlue font-medium col-span-2">
          {service}
        </h1>
        <div className="md:px-[8rem] pb-24 pt-10 grid grid-cols-3 gap-4">
          {list.map((propiedad: any) => (
            <a href={`/propiedades/${propiedad.id}`}>
                <PropiedadesCards data={propiedad} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllPropiedades;
