import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { usePaymentMethods } from '../../../hooks';
import { IPaymentMethod } from '../../../interfaces/interfaces';

export const PaymentMethods = () => {

    const { paymentMethods, postPaymentMethod, deletePaymentMethod } = usePaymentMethods();

    return (
        <div>
            <div className="card">
                <div className="card-header">
                Medios de Pago
                </div>
                <div className="card-body">
                    <Formik
                        initialValues={{
                            paymentMethod: ''
                        }}
                        onSubmit={(values, { resetForm }) => {
                            const newPayment: IPaymentMethod = {
                                description: values.paymentMethod
                            };

                            postPaymentMethod(newPayment);
                            resetForm();
                        }}
                        validationSchema={ Yup.object({
                            paymentMethod: Yup.string()
                                            .required('Ingrese un método de pago')
                                            .min(2, 'Ingrese mínimo 2 caracteres')
                        })}
                    >
                        { ({handleReset}) => (
                            <Form>
                                <label htmlFor="paymentMethod">Ingrese un método de pago</label>
                                <Field name="paymentMethod" type="text" className="form-control" />
                                <ErrorMessage name="paymentMethod" component="span" className="text-danger" />
                                <hr/>
                                <button type="submit" className="btn btn-primary btn-sm text-center">
                                    <i className="fa-solid fa-plus"></i> 
                                </button>
                            </Form>
                        ) }
                    </Formik>
                    <ul>
                        {
                            paymentMethods.map((payment: IPaymentMethod) => (
                                <li 
                                    key={ payment.paymentMethodId }
                                    onDoubleClick={ e => deletePaymentMethod(payment.paymentMethodId || 0) }
                                >{ payment.description }</li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}
