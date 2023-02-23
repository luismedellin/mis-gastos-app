import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

export const PaymentMethods = () => {
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
                    onSubmit={(values) => {
                        console.log(values)
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
            </div>
        </div>
    </div>
  )
}
