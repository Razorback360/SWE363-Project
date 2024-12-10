import Cookies from 'universal-cookie';

export const checkLogin = () => {
  const cookies = new Cookies();
  const user = cookies.get('user');
  const isHospital = cookies.get('isHospital');

  return {
    user,
    isHospital,
  };
};
