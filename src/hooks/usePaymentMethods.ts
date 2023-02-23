import misGastosApi from '../api/misGastosApi';

export const usePaymentMethods = () => {

    const getPaymentMethods = async () => {
        try {
          const { data } = await misGastosApi.get('payment-methods');
          return data;
        } catch (error) {
          console.log(error);
        }
    };

    return {
        getPaymentMethods
    }
}
