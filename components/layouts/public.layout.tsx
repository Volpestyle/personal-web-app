import { NextPage } from "next";
import Nav from "components/topNav/nav";
import Footer from "components/footer";

type Props = {
  children: React.ReactNode;
  showFooter?: boolean;
};

export const PublicLayout: NextPage<Props> = ({
  children,
  showFooter = true,
}) => {
  return (
    <>
      <Nav />
      <main>{children}</main>
      {showFooter && <Footer />}
    </>
  );
};

export default PublicLayout;
