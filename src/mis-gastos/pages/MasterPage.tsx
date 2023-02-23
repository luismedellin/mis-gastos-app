import { MisGastosLayout, PaymentMethods } from '..';
import { useEffect } from 'react';
import { usePaymentMethods } from '../../hooks';

export const MasterPage = () => {

  const { getPaymentMethods } = usePaymentMethods();

  useEffect(() => {

    const getPaymentMethodsApi = async () => { 
        const paymentMethods = await getPaymentMethods();

        console.log(paymentMethods);
    }

    getPaymentMethodsApi();

}, []);
  

  return (
    <MisGastosLayout>
        <div className="d-flex">
          <div className="row">
            <h1>Maestros</h1>
          </div>

          <PaymentMethods />
        </div>
    </MisGastosLayout>
  )
}
