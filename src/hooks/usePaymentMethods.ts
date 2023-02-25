import { useDispatch, useSelector } from 'react-redux';
import misGastosApi from '../api/misGastosApi';

import { 
  onLoadingPaymentMethods, 
  onGetInformation, 
  onSavingPaymentMethods, 
  onDeletingPaymentMethod 
} from '../store';
import { IPaymentMethod } from '../interfaces/interfaces';

export const usePaymentMethods = () => {
    const dispatch = useDispatch();

    const { paymentMethods, 
      isLoading } = useSelector((state: any) => state.paymentMethods );

    const postPaymentMethod = async (payment: IPaymentMethod) => {
      try {
        const { data } = await misGastosApi.post('payment-methods', payment);
      
        dispatch(onSavingPaymentMethods(data))
        return data;
      } catch (error) {
        console.log(error);
      }
    };

    const getPaymentMethods = async () => {
        try {
          dispatch(onGetInformation())

          const { data } = await misGastosApi.get('payment-methods');
        
          dispatch(onLoadingPaymentMethods(data))
          return data;
        } catch (error) {
          console.log(error);
        }
    };

    const deletePaymentMethod = async (paymentMethodId: number) => {
      try {
        dispatch(onGetInformation())

        const { data } = await misGastosApi.delete(`payment-methods/${paymentMethodId}`);
      
        dispatch(onDeletingPaymentMethod(paymentMethodId))
        return data;
      } catch (error) {
        console.log(error);
      }
  };

    return {
        paymentMethods,
        isLoading,

        getPaymentMethods,
        postPaymentMethod,
        deletePaymentMethod
    }
}
