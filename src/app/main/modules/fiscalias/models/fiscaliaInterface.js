export const FiscaliaInterface = (fiscalia = {}) => {
  let data = {
    nombre: fiscalia.nombre || '',
    estado: fiscalia.estado ?? '-1',
    departamento_id: fiscalia.departamento
      ? {
          value: fiscalia.departamento.id,
          label: fiscalia.departamento.descripcion,
        }
      : {
          value: -1,
          label: 'Sin selección',
        },
    municipio_id: fiscalia.municipio
      ? { value: fiscalia.municipio.id, label: fiscalia.municipio.descripcion }
      : {
          value: -1,
          label: 'Sin selección',
        },
    direccion: fiscalia.direccion || '',
    descripcion: fiscalia.descripcion || '',
  }
  if(fiscalia.id){
    data.id=fiscalia.id
  }
  return data;
};

export const FiscaliaEditarInterface = (fiscalia = {}) => {
  return {
    nombre: fiscalia.nombre || '',
    estado: fiscalia.estado ?? '-1',
    departamento_id: fiscalia.departamento || {
      value: -1,
      label: 'Sin selección',
    },
    municipio_id: fiscalia.municipio || {
      value: -1,
      label: 'Sin selección',
    },
    direccion: fiscalia.direccion || '',
    descripcion: fiscalia.descripcion || '',
  };
};

export const FiscaliaPostInterface = (fiscalia = {}) => {
  return {
    id: fiscalia.id,
    nombre: fiscalia.nombre,
    estado: fiscalia.estado,
    departamento_id: fiscalia.departamento_id.value,
    municipio_id: fiscalia.municipio_id.value,
    direccion: fiscalia.direccion,
    descripcion: fiscalia.descripcion,
  };
};
