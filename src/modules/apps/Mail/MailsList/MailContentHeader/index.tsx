import React from 'react';
import Checkbox from '@material-ui/core/Checkbox/index';
import RefreshIcon from '@material-ui/icons/Refresh';
import Tooltip from '@material-ui/core/Tooltip/index';
import { useSelector } from 'react-redux';
import { RouteComponentProps, useHistory, withRouter } from 'react-router-dom';
import IntlMessages from '../../../../../@crema/utility/IntlMessages';
import Box from '@material-ui/core/Box';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { Hidden } from '@material-ui/core';
import CheckedMailActions from './CheckedMailActions';
import MoreOptions from './MoreOptions';
import AppsPagination from '../../../../../@crema/core/AppsPagination';
import clsx from 'clsx';
import { AppState } from '../../../../../redux/store';
import { MailObj } from '../../../../../types/models/apps/Mail';

const useStyles = makeStyles(() => ({
  checkboxRoot: {
    marginRight: 8
  },
  pointer: {
    cursor: 'pointer'
  },
  iconBlock: {
    display: 'block'
  }
}));

interface MailContentHeaderProps extends RouteComponentProps {
  path: string;
  checkedMails: number[];
  setCheckedMails: (ids: number[]) => void;
  page: number;
  onPageChange: (
    event: React.MouseEvent<HTMLButtonElement> | null,
    value: number
  ) => void;
}

const MailContentHeader: React.FC<MailContentHeaderProps> = ({
  path,
  checkedMails,
  setCheckedMails,
  page,
  onPageChange
}) => {
  const history = useHistory();

  const { mailList, totalMails }: { mailList: MailObj[]; totalMails: number } =
    useSelector<AppState, AppState['mailApp']>(({ mailApp }) => mailApp);

  const classes = useStyles();

  const onHandleMasterCheckbox = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (event.target.checked) {
      const mailIds = mailList.map((mail: MailObj) => mail.id);
      setCheckedMails(mailIds);
    } else {
      setCheckedMails([]);
    }
  };

  const onRefreshPage = () => {
    history.push(path);
  };

  return (
    <>
      <Box display="flex" flexDirection="row" alignItems="center">
        <Checkbox
          color="primary"
          className={classes.checkboxRoot}
          indeterminate={
            checkedMails.length > 0 && checkedMails.length < mailList.length
          }
          checked={
            mailList.length > 0 && checkedMails.length === mailList.length
          }
          onChange={onHandleMasterCheckbox}
        />

        {checkedMails.length > 0 ? (
          <CheckedMailActions
            checkedMails={checkedMails}
            setCheckedMails={setCheckedMails}
          />
        ) : null}

        {checkedMails.length < 1 ? (
          <Tooltip title={<IntlMessages id="common.refresh" />}>
            <Box mr={4} component="span" color="text.disabled">
              <RefreshIcon
                className={clsx(classes.pointer, classes.iconBlock)}
                onClick={onRefreshPage}
              />
            </Box>
          </Tooltip>
        ) : null}

        <MoreOptions
          checkedMails={checkedMails}
          setCheckedMails={setCheckedMails}
          path={path}
        />
      </Box>
      <Hidden xsDown>
        {mailList.length > 0 ? (
          <Box component="span" ml={{ sm: 'auto' }}>
            <AppsPagination
              count={totalMails}
              page={page}
              onPageChange={onPageChange}
            />
          </Box>
        ) : null}
      </Hidden>
    </>
  );
};

export default withRouter(MailContentHeader);
