const baseApi = process.env.NEXT_PUBLIC_API_BASE_ENDPOINT;
const apiKey = process.env.NEXT_PUBLIC_API_KEY;

export default (requestType, city) => {
  return `${baseApi}/${requestType}?city=${city}&key=${apiKey}`;
};
