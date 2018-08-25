export const capitalizeTransformer: (value: string) => string = (value: string) => value && value.length ? `${value.substr(0,1).toUpperCase()}${value.substr(1,value.length-1)}` : value;
