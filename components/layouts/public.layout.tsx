import { NextPage } from "next";
import Nav from "components/topNav/nav";
import Footer from "components/footer";

type Props = {
  children: React.ReactNode;
};

export const PublicLayout: NextPage<Props> = ({ children }) => {
  return (
    <>
      <Nav />
      <main>{children}</main>
    </>
  );
};

export default PublicLayout;
