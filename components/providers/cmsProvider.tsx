import React, { createContext, useContext } from "react";
import { SSOUser } from "../../utils/samlProviders";

type Props = {
  children: React.ReactNode;
  value: ICMSContext;
};

interface ICMSContext {
  user: SSOUser;
}

const defaultState = {};

const CMSContext = createContext<Partial<ICMSContext>>(defaultState);

export const CMSProvider = (props: Props) => {
  const { children, value } = props;

  return <CMSContext.Provider value={value}>{children}</CMSContext.Provider>;
};

export const useCMSContext = () => {
  return useContext(CMSContext);
};
