import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import { DatePicker } from '@material-ui/pickers';
import { makeStyles } from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';
import { Fonts } from '../../../../shared/constants/AppEnums';
import { CremaTheme } from '../../../../types/AppContextPropsType';

const useStyles = makeStyles((theme: CremaTheme) => ({
  calendarRoot: {
    position: 'relative',
    '& .MuiPickersStaticWrapper-staticWrapperRoot': {
      height: '100%',
      minWidth: '100%'
    },
    '& .MuiPickersBasePicker-container': {
      height: '100%',
      border: `1px solid ${grey[300]}`,
      borderRadius: theme.overrides.MuiCard.root.borderRadius,
      flexDirection: 'column'
    },
    '& .MuiPickersToolbar-toolbar': {
      display: 'none'
    },
    '& .MuiPickersBasePicker-pickerView': {
      justifyContent: 'flex-start',
      minWidth: '100%',
      height: '100%'
    },
    '& .MuiPickersCalendarHeader-switchHeader .MuiTypography-body1': {
      fontWeight: Fonts.LIGHT
    },
    '& .MuiPickersCalendarHeader-dayLabel': {
      color: theme.palette.text.primary,
      textTransform: 'uppercase',
      fontWeight: Fonts.LIGHT,
      flex: 1,
      width: 30
    },
    '& .MuiPickersCalendar-transitionContainer,': {
      height: '100%'
    },
    '& .MuiPickersCalendar-transitionContainer > div': {
      height: '100%',
      display: 'flex',
      flexDirection: 'column'
    },
    '& .MuiPickersCalendar-week': {
      flex: 1,
      alignItems: 'center',
      '& > div': {
        flex: 1,
        textAlign: 'center'
      }
    },
    '& .MuiPickersCalendarHeader-daysHeader': {
      marginTop: 15
    },
    '& .MuiPickersDay-day': {
      width: 30,
      height: 30
    }
  }
}));

interface DateSelectorProps {}

const DateSelector: React.FC<DateSelectorProps> = () => {
  const [day, setDay] = useState(null);

  const handleChange = (day: any) => {
    setDay(day);
  };

  const classes = useStyles();

  return (
    <Box height={1} width={1} className={classes.calendarRoot}>
      <DatePicker
        autoOk
        orientation="landscape"
        variant="static"
        openTo="date"
        value={day}
        onChange={handleChange}
      />
    </Box>
  );
};

export default DateSelector;
