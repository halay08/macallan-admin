import React from 'react';
import AppCard from '../../../../@crema/core/AppCard';
import TransactionTable from './TransactionTable';
import AppSelect from '../../../../@crema/core/AppSelect';
import { useIntl } from 'react-intl';
import { TransactionData } from '../../../../types/models/dashboards/Analytics';

interface Props {
  transactionData: TransactionData[];
}

const OrderNTransaction: React.FC<Props> = ({ transactionData }) => {
  const handleSelectionType = (data: any) => {
    console.log('data: ', data);
  };
  const { messages } = useIntl();
  return (
    <AppCard
      height={1}
      contentStyle={{ paddingLeft: 0, paddingRight: 0 }}
      title={messages['dashboard.analytics.ordersTransaction']}
      action={
        <AppSelect
          menus={[
            messages['dashboard.thisWeek'],
            messages['dashboard.lastWeeks'],
            messages['dashboard.lastMonth']
          ]}
          defaultValue={messages['dashboard.thisWeek']}
          onChange={handleSelectionType}
        />
      }
    >
      <TransactionTable transactionData={transactionData} />
    </AppCard>
  );
};

export default OrderNTransaction;
