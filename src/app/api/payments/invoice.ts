
import { TProject } from '@/models/Project';
import { TTemplate } from '@/models/Template';
import { TTransaction } from '@/models/Transaction';
import { TUser } from '@/types';



type TInvoiceProps = {
    project: TProject;
    template: TTemplate;
    transaction: TTransaction;
    user: TUser;
    couponCode?: string;
}
type TInvoice = {
    invoiceNumber: string; client: {
        name: string; address: string; city: string; state: string; country: string; pricePerSession: number;
    };
    items: { item: string; description: string; quantity: number; amountSum: number; }[]; subtotal: number; paid: number; invoiceDate: Date;
};
export async function generateInvoice(props: TInvoiceProps) {
    return true;
}