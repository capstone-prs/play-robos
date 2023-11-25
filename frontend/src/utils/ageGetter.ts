const getAge = (birthdate: Date, dateNow: Date) => {
  if (dateNow.getTime() < birthdate.getTime()) {
    throw new Error('invalid birthdate');
  }

  const age = dateNow.getFullYear() - birthdate.getFullYear();

  if (dateNow.getMonth() === birthdate.getMonth()) {
    return dateNow.getDate() < birthdate.getDate() ? age - 1 : age;
  } else if (dateNow.getMonth() < birthdate.getMonth()) {
    return age - 1;
  }

  return age;
};

export default getAge;
