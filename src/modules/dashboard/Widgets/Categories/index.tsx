import React, { useState } from 'react';
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles } from '@material-ui/core';
import List from '@material-ui/core/List';
import CategoryItem from './CategoryItem';
import { isBreakPointDown } from '../../../../@crema/utility/Utils';
import AppCard from '../../../../@crema/core/AppCard';
import { useIntl } from 'react-intl';
import { CategoriesData } from '../../../../types/models/dashboards/Widgets';

const useStyles = makeStyles(() => ({
  listHalf: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    paddingTop: 0,

    '& li': {
      width: '50%',
      padding: '0px 20px',
      '& .MuiListItemIcon-root': {
        minWidth: 0
      }
    }
  },
  pointer: {
    cursor: 'pointer'
  }
}));

const getData = (data: CategoriesData[]) => {
  if (isBreakPointDown('xl')) {
    return data.slice(0, 10);
  } else {
    return data;
  }
};

interface CategoriesProps {
  data: CategoriesData[];
}

const Categories: React.FC<CategoriesProps> = ({ data }) => {
  const classes = useStyles();
  const { messages } = useIntl();
  const categories = getData(data);

  const [categoryList, handleList] = useState(categories);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    category: CategoriesData
  ) => {
    category.isChecked = e.target.checked;
    const list = categoryList.map((item: CategoriesData) =>
      item.id === category.id ? category : item
    );
    handleList(list);
  };

  return (
    <AppCard
      title={messages['dashboard.categories']}
      contentStyle={{ paddingLeft: 0, paddingRight: 0 }}
      action={<CloseIcon className={classes.pointer} />}
      height="1"
    >
      <List className={classes.listHalf}>
        {categoryList.map((item: CategoriesData) => {
          return (
            <CategoryItem
              key={item.id}
              item={item}
              handleChange={handleChange}
            />
          );
        })}
      </List>
    </AppCard>
  );
};

export default Categories;
