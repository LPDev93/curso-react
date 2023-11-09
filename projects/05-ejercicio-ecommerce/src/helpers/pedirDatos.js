import data from "../data/data.json";

export const pedirDatos = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
      reject("Algo ha fallado.");
    }, 500);
  });
};

export const pedirDatosPorId = (id) => {
  return new Promise((resolve, reject) => {
    const item = data.find((element) => element.id === id);
    setTimeout(() => {
      if (item) {
        resolve(item);
      } else {
        reject("Algo ha fallado.");
      }
    }, 500);
  });
};
