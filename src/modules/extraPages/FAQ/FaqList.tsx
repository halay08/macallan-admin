import React from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import { Fonts } from '../../../shared/constants/AppEnums';
import { CremaTheme } from '../../../types/AppContextPropsType';
import { GeneralFaq } from '../../../@crema/services/db/extraPages/faqList/general';

const useStyles = makeStyles((theme: CremaTheme) => ({
  expansionPanel: {
    borderRadius: theme.overrides.MuiCard.root.borderRadius,
    color: theme.palette.text.secondary,
    marginBottom: 2,
    padding: '10px 20px',

    '&:before': {
      display: 'none'
    },

    '&:first-child, &:last-child': {
      borderRadius: theme.overrides.MuiCard.root.borderRadius
    }
  },
  expansionPanelSummary: {
    fontWeight: Fonts.MEDIUM,
    color: theme.palette.text.primary,
    fontSize: 16,
    padding: 0
  },
  expansionPanelDetailsRoot: {
    padding: '0 0 10px'
  }
}));

interface FaqListProps {
  faqList: GeneralFaq[];
}

const FaqList: React.FC<FaqListProps> = ({ faqList }) => {
  const classes = useStyles();
  return (
    <Box height="100%">
      {faqList.map(item => {
        return (
          <Accordion className={classes.expansionPanel} key={item.id}>
            <AccordionSummary
              className={classes.expansionPanelSummary}
              expandIcon={<ExpandMoreIcon />}
            >
              <Box>{item.ques}</Box>
            </AccordionSummary>
            <AccordionDetails className={classes.expansionPanelDetailsRoot}>
              <Box>{item.ans}</Box>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </Box>
  );
};

export default FaqList;
