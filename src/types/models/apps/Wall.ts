export interface FriendRequestObj {
  id: number;
  profilePic: string;
  name: string;
  date: any;
}

export interface ImageObj {
  id: number;
  thumb: string;
}

export interface RecentNewsObj {
  id: number;
  user: {
    name: string;
    profilePic: string;
  };
  title: string;
  desc: string;
}

export interface WhoToFollowObj {
  id: number;
  name: string;
  profilePic: string;
}

export interface SuggestionObj {
  id: number;
  name: string;
  desc: string;
  thumb: string;
}

export interface AttachmentObj {
  id: number;
  path: string;
  preview: string;
  metaData: {
    type: string;
    size: number;
  };
}

export interface CommentObj {
  id: number;
  author: {
    name: string;
    profilePic: string;
    id: number;
  };
  liked: boolean;
  comment: string;
  date: any;
}

export interface WallData {
  id: number;
  name: string;
  profilePic: string;
  videoCall: {
    users: {
      id: number;
      name: string;
      profilePic: string;
    }[];
    title: string;
  };
  friendRequests: FriendRequestObj[];
  photos: ImageObj[];
  recentNews: RecentNewsObj[];
  whoToFollow: WhoToFollowObj[];
  suggestions: SuggestionObj[];
}

export interface UserObj {
  name: string;
  profilePic: string;
  id: number;
}

export interface PostObj {
  id: number;
  owner: UserObj;
  date: any;
  attachments: AttachmentObj[];
  message?: string;
  liked: boolean;
  likes: number;
  shares: number;
  views: number;
  comments: CommentObj[];
  content?: string;
}
