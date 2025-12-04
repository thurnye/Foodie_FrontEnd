export function getRandomNumber(): number {
  return Math.floor(Math.random() * 1000) + 1;
}


export const convertToBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();

    fileReader.readAsDataURL(file);

    fileReader.onload = () => {
      // fileReader.result can be string or ArrayBuffer → cast safely to string
      resolve(fileReader.result as string);
    };

    fileReader.onerror = (error) => {
      reject(error);
    };
  });
};
