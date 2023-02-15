import misGastosApi from '../api/misGastosApi';

export const useMessage = () => {

  const getProtectedResource = async () => {
      try {
        const { data } = await misGastosApi.get('api/messages/protected');
        return data;
      } catch (error) {
        console.log(error);
      }
  };

  return {
      getProtectedResource
  }
}
