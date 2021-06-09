import React from 'react';
import Box from '@material-ui/core/Box';
import ListHeader from './ListHeader';
import CardDetail from './CardDetail';
import Scrollbar from '../../../../../@crema/core/Scrollbar';
import AddCardButton from './AddCardButton';
import {
  CardListObj,
  CardObj
} from '../../../../../types/models/apps/ScrumbBoard';

interface ListProps {
  list: CardListObj;
  onEditCardDetail: (card: CardObj, list: CardListObj) => void;
  onClickAddCard: (list: CardListObj) => void;
  boardId: number;
}

const List: React.FC<ListProps> = ({
  list,
  onEditCardDetail,
  onClickAddCard,
  boardId
}) => {
  return (
    <Box
      p={2}
      key={list.id}
      display="flex"
      flexDirection="column"
      className="scrum-col"
    >
      <ListHeader list={list} boardId={boardId} />

      <Scrollbar className="scroll-scrum-item">
        {list.cards && list.cards.length > 0 ? (
          <>
            {list.cards.map(card => {
              return (
                <CardDetail
                  key={card.id}
                  card={card}
                  onEditCardDetail={onEditCardDetail}
                  list={list}
                />
              );
            })}
          </>
        ) : null}
      </Scrollbar>

      <AddCardButton onClickAddCard={onClickAddCard} list={list} />
    </Box>
  );
};

export default List;
