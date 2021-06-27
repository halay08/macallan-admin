export enum ICyoStatus {
  IN_REVIEW = 'in_review',
  APPROVED = 'approved',
  REJECTED = 'rejected'
}

export type IThumbnail = {
  url: string;
  width: number;
  height: number;
};

export type IContact = {
  email: string;
  name: string;
  age: number;
  country: string;
};

export type IArtworkEntity = {
  id?: string;
  createdAt?: Date;
  deletedAt?: Date;
  imgUrl: string;
  thumbnails?: IThumbnail;
  createdBy?: string;
  message?: string;
  contact?: Partial<IContact>;
  status: ICyoStatus;
};
