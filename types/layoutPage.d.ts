export type LayoutPage<P = {}> = NextPage<P> & {
  getLayout?: (page: ReactElement) => ReactNode;
};
