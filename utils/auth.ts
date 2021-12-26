import { getServerSession } from "next-auth/next";
import { GetServerSidePropsContext, PreviewData } from "next";
import { default as options } from "../pages/api/auth/[...nextauth]";
import { ParsedUrlQuery } from "querystring";

export const authUser = async (
  context: GetServerSidePropsContext<ParsedUrlQuery, PreviewData>
) => {
  const session = await getServerSession(context, options);
  if (!session) {
    return {
      redirect: {
        permanent: false,
        destination: `/login?callbackUrl=${context.resolvedUrl}`,
      },
    };
  }
  console.log("Session: ", session);
  return {
    props: { session },
  };
};
