import {NextPageContext} from 'next';

export type ModePage<P = {}, IP = P> = {
  (props: P): JSX.Element | null;
  zone: any;
  defaultProps?: Partial<P>;
  displayName?: string;
  getInitialProps?(ctx: NextPageContext): Promise<IP>;
};
