export const calculateCircumference = (r) => {
  return 2 * r * Math.PI;
};

export const calculateProgress = (circumference, percentage) => {
  return circumference - (circumference / 100) * percentage;
};

export const calculateUvIndex = (circumference, value) => {
  return circumference - (circumference / 10) * value;
}

export const calculateWindDirection = (windDirection) => {
  return -99 + windDirection;
}