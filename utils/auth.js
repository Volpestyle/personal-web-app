import { getSession } from "next-auth/client";

export const authUser = async (context) => {
  const session = await getSession(context);
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
