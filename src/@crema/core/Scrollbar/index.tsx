import React, { ReactNode, useEffect, useRef } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { useLocation } from 'react-router-dom';

interface ScrollbarProps {
  children: ReactNode;
  className?: string;
  scrollToTop?: boolean;

  [x: string]: any;
}

const Scrollbar: React.FC<ScrollbarProps> = React.forwardRef((props, ref) => {
  const { children, scrollToTop = true, className = '', ...others } = props;
  let _scrollBarRef = useRef<HTMLElement>(null);
  const { pathname } = useLocation();

  useEffect(() => {
    if (scrollToTop && _scrollBarRef) {
      // @ts-ignore
      _scrollBarRef._container.scrollTop = 0;
    }
  }, [_scrollBarRef, pathname, scrollToTop]);

  return (
    <PerfectScrollbar
      ref={ref => {
        // @ts-ignore
        _scrollBarRef = ref;
      }}
      {...others}
      className={className}
    >
      {children}
    </PerfectScrollbar>
  );
});

export default Scrollbar;
