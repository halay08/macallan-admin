import React from 'react';
import AppCard from '../../../../@crema/core/AppCard';
import AppList from '../../../../@crema/core/AppList';
import RequestItem from './RequestItem';
import { FriendRequestObj } from '../../../../types/models/apps/Wall';

interface FriendRequestsProps {
  friendRequests: FriendRequestObj[];
}

const FriendRequests: React.FC<FriendRequestsProps> = ({ friendRequests }) => {
  return (
    <AppCard
      title={`${friendRequests.length} friend requests`}
      contentStyle={{ paddingLeft: 0, paddingRight: 0 }}
    >
      <AppList
        animation="transition.slideRightBigIn"
        data={friendRequests}
        renderRow={(data, index) => <RequestItem key={index} request={data} />}
      />
    </AppCard>
  );
};

export default FriendRequests;
