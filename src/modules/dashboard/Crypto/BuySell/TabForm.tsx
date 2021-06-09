import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import IntlMessages from '../../../../@crema/utility/IntlMessages';
import Box from '@material-ui/core/Box';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { Fonts } from '../../../../shared/constants/AppEnums';
import { BuySellDataProps } from '../../../../types/models/dashboards/Crypto';

const useStyles = makeStyles(theme => ({
  textRes: {
    fontSize: 14
  },
  inputText: {
    fontWeight: Fonts.MEDIUM,
    width: '100%'
  }
}));

interface TabFormProps {
  data: BuySellDataProps;
}

const TabForm: React.FC<TabFormProps> = ({ data }) => {
  const classes = useStyles();
  const [inputValue, setValue] = useState(data.value);
  const [inputPrice, setPrice] = useState(data.price);
  const [inputAmount, setAmount] = useState(data.amount);

  return (
    <Box>
      <form noValidate autoComplete="off">
        <Box mb={5}>
          <Box
            mb={2}
            color="grey.400"
            textAlign="right"
            className={classes.textRes}
          >
            <IntlMessages id="dashboard.btc" />
          </Box>
          <TextField
            fullWidth
            variant="outlined"
            label={<IntlMessages id="common.volume" />}
            value={inputValue}
            onChange={e => setValue(e.target.value)}
            InputProps={{
              className: classes.inputText
            }}
          />
        </Box>
        <Box mb={5}>
          <Box
            mb={2}
            color="grey.400"
            textAlign="right"
            className={classes.textRes}
          >
            <IntlMessages id="dashboard.btc" />
          </Box>
          <TextField
            fullWidth
            variant="outlined"
            label={<IntlMessages id="common.price" />}
            value={inputPrice}
            onChange={e => setPrice(e.target.value)}
            InputProps={{
              className: classes.inputText
            }}
          />
        </Box>
        <Box mb={5}>
          <Box
            mb={2}
            color="grey.400"
            textAlign="right"
            className={classes.textRes}
          >
            <IntlMessages id="dashboard.btc" />
          </Box>
          <TextField
            fullWidth
            variant="outlined"
            label={<IntlMessages id="common.amount" />}
            value={inputAmount}
            onChange={e => setAmount(e.target.value)}
            InputProps={{
              className: classes.inputText
            }}
          />
        </Box>
      </form>
    </Box>
  );
};

export default TabForm;
