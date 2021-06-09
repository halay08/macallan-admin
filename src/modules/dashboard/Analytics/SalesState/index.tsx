import React from 'react';
import Box from '@material-ui/core/Box';
import { Fonts } from '../../../../shared/constants/AppEnums';
import GridContainer from '../../../../@crema/core/GridContainer';
import Grid from '@material-ui/core/Grid';
import AppCard from '../../../../@crema/core/AppCard';
import { isBreakPointDown } from '../../../../@crema/utility/Utils';
import AppSelect from '../../../../@crema/core/AppSelect';
import { useIntl } from 'react-intl';
import AppList from '../../../../@crema/core/AppList';
import Avatar from '@material-ui/core/Avatar';
import {
  ChartData,
  SalesStateData
} from '../../../../types/models/dashboards/Analytics';
import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

interface SalesStateProps {
  salesState: SalesStateData[];
  chartData: ChartData[];
}

const SalesState: React.FC<SalesStateProps> = ({ salesState, chartData }) => {
  const handleSelectionType = (data: any) => {
    console.log('data: ', data);
  };
  const getData = (data: SalesStateData[]) => {
    if (isBreakPointDown('md')) {
      return data.slice(0, 4);
    } else if (isBreakPointDown('xl')) {
      return data.slice(0, 3);
    } else {
      return data;
    }
  };
  const { messages } = useIntl();
  return (
    <AppCard
      title={messages['dashboard.analytics.drState']}
      height={1}
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
      <Box
        textAlign={{ xs: 'center', sm: 'left' }}
        component="p"
        color="text.secondary"
        mt={-3}
        mb={2}
      >
        1343 {messages['dashboard.analytics.salesThisWeek']}
      </Box>

      <GridContainer>
        <Grid item xs={12} sm={5}>
          <Box
            width={1}
            height={1}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems={{ xs: 'center', sm: 'flex-start' }}
          >
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={chartData}
                  cx={125}
                  cy={125}
                  labelLine={false}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {chartData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </Box>
        </Grid>

        <Grid item xs={12} sm={7}>
          <Box
            width={1}
            ml={2}
            display="flex"
            flexDirection="column"
            alignItems="flex-start"
          >
            <AppList
              animation="transition.slideRightBigIn"
              delay={200}
              duration={400}
              data={getData(salesState)}
              renderRow={item => (
                <Box
                  key={'drState-' + item.id}
                  pl={{ xl: 6 }}
                  py={2}
                  display="flex"
                  alignItems="center"
                >
                  <Avatar
                    src={item.icon}
                    alt="icon"
                    style={{ height: 48, width: 48 }}
                  />

                  <Box position="relative" ml={4}>
                    <Box
                      component="h3"
                      display="inline-block"
                      fontWeight={Fonts.BOLD}
                      mb={0.5}
                      fontSize={16}
                    >
                      ${item.amount}
                    </Box>
                    <Box component="p" color="text.secondary" fontSize={14}>
                      {item.type}
                    </Box>
                  </Box>
                </Box>
              )}
            />
          </Box>
        </Grid>
      </GridContainer>
    </AppCard>
  );
};
export default SalesState;
