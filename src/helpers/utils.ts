export const capitalizeFirstLetter = (value: string) =>
  value.charAt(0).toUpperCase() + value.slice(1);

export const generateKey = (data: string) => {
  return `${data}_${new Date().getTime()}`;
};
