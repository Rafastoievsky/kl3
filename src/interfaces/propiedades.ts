export interface IPropiedades {
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
}