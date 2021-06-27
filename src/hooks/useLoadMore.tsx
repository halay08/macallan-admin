import { useEffect, useState } from 'react';

const isBottomOfPage = () => {
  const windowHeight =
    'innerHeight' in window
      ? window.innerHeight
      : document.documentElement.offsetHeight;
  const body = document.body;
  const html = document.documentElement;
  const docHeight = Math.max(
    body.scrollHeight,
    body.offsetHeight,
    html.clientHeight,
    html.scrollHeight,
    html.offsetHeight
  );
  const windowBottom = Math.round(windowHeight + window.pageYOffset);

  return windowBottom >= docHeight;
};

const useLoadMore = (handleLoadMore: Function, setData: Function) => {
  const [lastDocumentId, setLastDocumentId] = useState<string>('');
  const [isStop, setIsStop] = useState<boolean>(false);

  useEffect(() => {
    if (!isStop) window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lastDocumentId, isStop]);

  const handleScroll = async () => {
    console.log(isBottomOfPage());
    if (isBottomOfPage()) await handleLoadMore(lastDocumentId);
  };

  const handleAfterGet = data => {
    const { items = [], pagination = {} } = data;
    if (!pagination.totalItemOfPage) {
      setIsStop(true);
      return;
    }
    setData(prevState => [...prevState, ...items]);
    setLastDocumentId(pagination.lastRef || '');
    setIsStop(false);
  };

  return [handleAfterGet];
};

export { useLoadMore };
