import React, { useState } from 'react';
import ColorItem from './ColorItem';
import { isBreakPointDown } from '../../../../@crema/utility/Utils';
import AppList from '../../../../@crema/core/AppList';
import AppCard from '../../../../@crema/core/AppCard';
import { useIntl } from 'react-intl';
import Scrollbar from '../../../../@crema/core/Scrollbar';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { ColorsList } from '../../../../types/models/dashboards/Widgets';

const useStyles = makeStyles(theme => ({
  scrollbarRoot: {
    height: 362,
    [theme.breakpoints.up('xl')]: {
      height: 316
    }
  }
}));

const getData = (data: ColorsList[]) => {
  if (isBreakPointDown('xl')) {
    return data;
  } else {
    return data.slice(0, 9);
  }
};

interface ColorsProps {
  data: ColorsList[];
}

const Colors: React.FC<ColorsProps> = ({ data }) => {
  const colors = getData(data);
  const classes = useStyles();
  const [colorsList, handleList] = useState(colors);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    color: ColorsList
  ) => {
    color.isChecked = e.target.checked;
    const list = colorsList.map((item: ColorsList) =>
      item.id === color.id ? color : item
    );
    handleList(list);
  };
  const { messages } = useIntl();
  return (
    <AppCard
      height="1"
      title={messages['dashboard.colors']}
      contentStyle={{ paddingRight: 0, paddingLeft: 0 }}
    >
      <Scrollbar className={classes.scrollbarRoot}>
        <AppList
          data={data}
          renderRow={item => {
            return (
              <ColorItem
                key={item.id}
                item={item}
                handleChange={handleChange}
              />
            );
          }}
        />
      </Scrollbar>
    </AppCard>
  );
};

export default Colors;
