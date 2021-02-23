const parseDate = (date, parseOptions) => {
  const parsedDate = new Date(date);
  switch (parseOptions) {
    case parseDateOptions.GET_SHORT_DAY_AND_DATE: {
      const options = {
        weekday: 'short',
        day: 'numeric',
      };
      return Intl.DateTimeFormat('en-GB', options).format(parsedDate);
    }
    case parseDateOptions.GET_TIME: {
      const options = {
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
      };
      return Intl.DateTimeFormat('en-GB', options).format(date);
    }
    default:
      return parsedDate;
  }
};

export const parseDateOptions = {
  GET_SHORT_DAY_AND_DATE: 'GET_SHORT_DAY_AND_DATE',
  GET_TIME: 'GET_TIME',
};

export default parseDate;
