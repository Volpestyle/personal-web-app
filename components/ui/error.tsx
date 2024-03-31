import React from "react";
import { Error } from "types/error";

const CustomError = ({ error }: { error?: Error }) => {
  if (!error) return <></>;
  return <>{error?.message}</>;
};

export default CustomError;
