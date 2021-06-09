import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import AppsContainer from '../../../../@crema/core/AppsContainer';
import BoardDetailView from './BoardDetailView';
import { useHistory, useLocation } from 'react-router-dom';
import {
  onGetBoardDetail,
  onNullifyBoardDetail
} from '../../../../redux/actions';
import { AppState } from '../../../../redux/store';
import { BoardObj } from '../../../../types/models/apps/ScrumbBoard';

const useStyles = makeStyles(() => ({
  pointer: {
    cursor: 'pointer'
  }
}));

const BoardDetail = () => {
  const history = useHistory();
  const { boardDetail }: { boardDetail: BoardObj } = useSelector<
    AppState,
    AppState['scrumboardApp']
  >(({ scrumboardApp }) => scrumboardApp);
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  useEffect(() => {
    const path = pathname.split('/');
    const id = path[path.length - 1];
    dispatch(onGetBoardDetail(+id));
    return () => {
      dispatch(onNullifyBoardDetail());
    };
  }, [dispatch, pathname]);

  const onGoToBoardList = () => {
    history.goBack();
  };

  const classes = useStyles();
  if (!boardDetail) {
    return null;
  }

  return (
    <AppsContainer
      cardStyle={{ backgroundColor: 'transparent' }}
      fullView
      title={
        <>
          <Box
            mr={2}
            component="span"
            color="primary.main"
            className={classes.pointer}
            onClick={onGoToBoardList}
          >
            Scrum Board
          </Box>
          {boardDetail.name}
        </>
      }
    >
      <BoardDetailView boardDetail={boardDetail} />
    </AppsContainer>
  );
};

export default BoardDetail;
