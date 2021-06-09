import React, { ReactNode } from 'react';
import { Loader } from '../../index';

interface SuspenseProps {
  children: ReactNode;
}

const AppSuspense: React.FC<SuspenseProps> = ({ children }) => {
  return <React.Suspense fallback={<Loader />}>{children}</React.Suspense>;
};

export default AppSuspense;
