import React from 'react';
import { makeStyles } from '@material-ui/core';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import { Fonts } from '../../../../shared/constants/AppEnums';
import { isBreakPointDown } from '../../../../@crema/utility/Utils';
import AppCard from '../../../../@crema/core/AppCard';
import { useIntl } from 'react-intl';
import { FormatList } from '../../../../types/models/dashboards/Widgets';

const useStyles = makeStyles(theme => ({
  radioLabelGroup: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    marginLeft: '-25px',
    marginRight: '-15px'
  },

  radioLabel: {
    width: '50%',
    display: 'flex',
    alignItems: 'center',
    paddingLeft: '15px',
    paddingRight: '15px',
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 2,

    '& .MuiTypography-body1': {
      fontSize: 14,
      fontFamily: `${Fonts.MEDIUM} !important`,
      color: '#A8A8A8',
      marginLeft: 10,
      marginBottom: 6
    }
  }
}));
const getData = (data: FormatList[]) => {
  if (isBreakPointDown('xl')) {
    return data.slice(0, 6);
  } else {
    return data;
  }
};

interface FormatsProps {
  data: FormatList[];
}

const Formats: React.FC<FormatsProps> = ({ data }) => {
  const classes = useStyles();

  const formats = getData(data);
  const { messages } = useIntl();

  return (
    <AppCard height="1" title={messages['dashboard.formats']}>
      <RadioGroup className={classes.radioLabelGroup}>
        {formats.map(item => {
          return (
            <FormControlLabel
              key={item.id}
              value={item.name}
              control={<Radio />}
              label={item.name}
              className={classes.radioLabel}
            />
          );
        })}
      </RadioGroup>
    </AppCard>
  );
};

export default Formats;
