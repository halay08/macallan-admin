import React, { useState } from 'react';
import Chip from '@material-ui/core/Chip';
import Box from '@material-ui/core/Box';
import AddNewTag from './AddNewTag';
import { makeStyles } from '@material-ui/core/styles';
import { blue, green, orange, red, teal } from '@material-ui/core/colors';
import clsx from 'clsx';
import AppCard from '../../../../@crema/core/AppCard';
import { useIntl } from 'react-intl';
import { TagsList } from '../../../../types/models/dashboards/Widgets';
import { CremaTheme } from '../../../../types/AppContextPropsType';

const useStyles = makeStyles((theme: CremaTheme) => ({
  root: {
    fontSize: 14,
    margin: 8,
    padding: '8px 4px',
    color: theme.palette.primary.contrastText
  },
  roundedXl: {
    borderRadius: 4
  },
  greyColorRoot: {
    backgroundColor: theme.palette.grey[200]
  }
}));

const colorList = [
  { id: 9001, color: blue[600] },
  { id: 9002, color: red[600] },
  { id: 9003, color: green[600] },
  { id: 9004, color: orange[600] },
  { id: 9005, color: teal[600] },
  { id: 9006, color: blue[600] }
];

interface AddTagsPorps {
  data: TagsList[];
}

const AddTags: React.FC<AddTagsPorps> = ({ data }) => {
  const [tags, setTags] = useState(data);

  const handleDelete = (tagToDelete: TagsList) => () => {
    setTags(tags => tags.filter(tag => tag.id !== tagToDelete.id));
  };

  const onAddNewTag = (newTag: string) => {
    let tag: TagsList = {
      label: newTag,
      id: Math.floor(Math.random() * 10000),
      color: colorList[Math.floor(Math.random() * colorList.length)].color
    };
    setTags(tags => tags.concat(tag));
  };

  const classes = useStyles();
  const { messages } = useIntl();

  return (
    <AppCard height="1" title={messages['dashboard.addTags']}>
      <Box p={2} className={clsx(classes.roundedXl, classes.greyColorRoot)}>
        {tags.map(item => {
          return (
            <Chip
              key={item.id}
              style={{ backgroundColor: item.color }}
              label={item.label}
              className={classes.root}
              onDelete={handleDelete(item)}
            />
          );
        })}

        <AddNewTag onAddNewTag={onAddNewTag} />
      </Box>
    </AppCard>
  );
};

export default AddTags;
