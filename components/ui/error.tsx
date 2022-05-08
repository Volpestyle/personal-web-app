import React from "react";
import { Error } from "types/error";

const Error = ({ error }: { error?: Error }) => {
  if (!error) return <></>;
  return <>{error?.message}</>;
};

export default Error;
