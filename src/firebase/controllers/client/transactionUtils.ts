import { get } from 'http';
import { TTransaction } from '@/models/Transaction';
import { getDocByIdFromClientSide } from './firestoreUtils';
export async function getPayment(transactionId: string): Promise<TTransaction | null> {

    const transaction = await getDocByIdFromClientSide('Transactions', transactionId);

    if (transaction.exists()) {
        return transaction.data() as TTransaction;
    } else {
        return null;
    }
}
