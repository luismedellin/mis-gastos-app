export interface IPaymentMethod {
    paymentMethodId?: number;
    userId?: string;
    description: string;
    deadLine?: string | null;
    createdDate?: string;
    updatedDate?: string | null;
}