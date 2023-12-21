import React, { type FC } from "react";

interface Props {
  data: {
    id: number;
    title: string;
    icon: ImageMetadata;
    selectedIcon: ImageMetadata;
    picture: ImageMetadata;
    subtitle: string;
    descripcion: string;
  };
}

const ServicesInfo: FC<Props> = ({ data }) => {
  return (
    <div className="grid md:grid-cols-2 md:px-[12rem] p-4 my-14 bg-[#E8EBEF]">
      <h1 className="text-mainBlue text-center md:hidden block text-4xl font-semibold mb-8">{data.title}</h1>
      <div className="flex justify-center items-center">
        <img
          className="items-start md:h-[500px] w-auto "
          src={data.picture.src}
          alt={"marker"}
        />
      </div>
      <div className="md:p-10 p-2">
        <h1 className="text-mainBlue text-left hidden md:block text-4xl font-semibold mb-8">{data.title}</h1>
        <div className="grid md:grid-cols-4 mb-8">
          <div className="col-span-1">
            <img
            className="items-start h-24 hidden md:block"
            src={data.selectedIcon.src}
            alt={"marker"}
            />

          </div>
          <div className="md:col-span-3 text-mainBlue text-justify text-2xl font-semibold md:w-3/4">
            <h2>{data.subtitle}</h2>
            <h2 className="text-secondBlue">{data.descripcion}</h2>
          </div>
        </div>
        <div className="flex justify-center items-center">
        <a href="/servicios" className="text-white bg-mainBlue border-white p-4 mt-20 text-center 
        rounded-3xl md:w-3/5 md:text-3xl text-xl border-8 font-semibold">
              Conocer más
        </a> 

        </div>
      </div>
    </div>
  );
};

export default ServicesInfo;
