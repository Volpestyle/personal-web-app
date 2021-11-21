import { withSSRContext } from "aws-amplify";
import { useToasts } from "react-toast-notifications";

export const authCurrentUser = async (context: any) => {
  const { Auth } = withSSRContext(context);
  try {
    const user = await Auth.currentAuthenticatedUser();
    console.log("user: ", user);
    return {
      props: {
        authenticated: true,
        username: user.username,
      },
    };
  } catch (err) {
    console.error(err);
    return {
      props: {
        authenticated: false,
      },
    };
  }
};
