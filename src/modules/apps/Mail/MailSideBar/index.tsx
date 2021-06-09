import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import IntlMessages from '../../../../@crema/utility/IntlMessages';
import Scrollbar from '../../../../@crema/core/Scrollbar';
import { useSelector } from 'react-redux';
import ComposeMail from '../ComposeMail';
import ConnectionListItem from './ConnectionListItem';
import AppsSideBarFolderItem from '../../../../@crema/core/AppsSideBarFolderItem';
import LabelItem from './LabelItem';
import { makeStyles } from '@material-ui/core/styles';
import { Fonts } from '../../../../shared/constants/AppEnums';
import AppList from '../../../../@crema/core/AppList';
import AppAnimate from '../../../../@crema/core/AppAnimate';
import ListEmptyResult from '../../../../@crema/core/AppList/ListEmptyResult';
import SidebarPlaceholder from '../../../../@crema/core/Skeleton/SidebarListSkeleton';
import { CremaTheme } from '../../../../types/AppContextPropsType';
import { AppState } from '../../../../redux/store';

const useStyles = makeStyles((theme: CremaTheme) => ({
  btnRoot: {
    width: '100%',
    fontSize: 16,
    textTransform: 'capitalize',
    fontWeight: Fonts.MEDIUM
  },
  listRoot: {
    marginBottom: 8,
    [theme.breakpoints.up('xl')]: {
      marginBottom: 20
    }
  }
}));

const MailSidebar = () => {
  const { labelList, connectionList, folderList } = useSelector<
    AppState,
    AppState['mailApp']
  >(({ mailApp }) => mailApp);

  const [isComposeMail, setComposeMail] = useState<boolean>(false);

  const onOpenComposeMail = () => {
    setComposeMail(true);
  };

  const onCloseComposeMail = () => {
    setComposeMail(false);
  };

  const classes = useStyles();

  return (
    <>
      {labelList && connectionList && folderList ? (
        <>
          <Box
            px={{ xs: 4, md: 5 }}
            pt={{ xs: 4, md: 5 }}
            pb={{ xs: 2, xl: 5 }}
          >
            <AppAnimate>
              <Button
                variant="contained"
                color="secondary"
                className={classes.btnRoot}
                onClick={onOpenComposeMail}
              >
                <IntlMessages id="common.compose" />
              </Button>
            </AppAnimate>
          </Box>

          <Scrollbar
            style={{
              height: 'calc(100% - 80px)'
            }}
          >
            <Box
              px={{ xs: 4, md: 5, lg: 6, xl: 8 }}
              pb={{ xs: 4, md: 5, lg: 6, xl: 8 }}
              pt={0}
            >
              <List
                className={classes.listRoot}
                component="nav"
                aria-label="main mailbox folders"
              >
                <AppList
                  data={folderList}
                  ListEmptyComponent={
                    <ListEmptyResult
                      loading={true}
                      placeholder={<SidebarPlaceholder />}
                    />
                  }
                  renderRow={item => (
                    <AppsSideBarFolderItem
                      key={item.id}
                      item={item}
                      path={`/apps/mail/folder/${item.alias}`}
                    />
                  )}
                />
              </List>

              <Box
                component="h5"
                fontSize={16}
                mt={{ xs: 4, xl: 5 }}
                fontWeight={Fonts.MEDIUM}
              >
                <IntlMessages id="common.labels" />
              </Box>

              <List
                className={classes.listRoot}
                component="nav"
                aria-label="main mailbox folders"
              >
                <AppList
                  data={labelList}
                  ListEmptyComponent={
                    <ListEmptyResult
                      loading={true}
                      placeholder={<SidebarPlaceholder />}
                    />
                  }
                  renderRow={label => (
                    <LabelItem key={label.id} label={label} />
                  )}
                />
              </List>

              <Box
                component="h5"
                fontSize={16}
                mt={{ xs: 4, xl: 5 }}
                fontWeight={Fonts.MEDIUM}
              >
                <IntlMessages id="common.connections" />
              </Box>

              <List>
                <AppList
                  data={connectionList}
                  ListEmptyComponent={
                    <ListEmptyResult
                      loading={true}
                      placeholder={<SidebarPlaceholder />}
                    />
                  }
                  renderRow={connection => (
                    <ConnectionListItem
                      connection={connection}
                      key={connection.id}
                    />
                  )}
                />
              </List>
            </Box>
          </Scrollbar>
        </>
      ) : null}

      {isComposeMail ? (
        <ComposeMail
          isComposeMail={isComposeMail}
          onCloseComposeMail={onCloseComposeMail}
        />
      ) : null}
    </>
  );
};

export default MailSidebar;
