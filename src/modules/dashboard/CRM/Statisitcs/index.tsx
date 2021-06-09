import React from 'react';
import GraphTabs from './GraphTabs';
import AppCard from '../../../../@crema/core/AppCard';
import { StatisticData } from '../../../../types/models/dashboards/CRM';

interface StatisticsProps {
  projectData: StatisticData[];
  clientsData: StatisticData[];
  incomeData: StatisticData[];
}

export const Statistics: React.FC<StatisticsProps> = ({
  clientsData,
  incomeData,
  projectData
}) => {
  return (
    <AppCard height="100%">
      <GraphTabs
        clientsData={clientsData}
        incomeData={incomeData}
        projectData={projectData}
      />
    </AppCard>
  );
};

export default Statistics;
