import React, { ReactNode } from "react";
import useSeerbitPayment from "./useSeerbit";
import { seerbitPayTypes } from "helpers";

interface ButtonTypes extends seerbitPayTypes {
  callback: () => void;
  close: () => void;
  text?: string;
  className?: string;
  children?: ReactNode;
}

const SeerbitButton = ({
  callback,
  close,
  text,
  className,
  children,
  ...res
}: ButtonTypes): JSX.Element => {
  const initializePayment = useSeerbitPayment(res, callback, close);
  return (
    <button onClick={initializePayment} className={className}>
      {text || children}
    </button>
  );
};

export default SeerbitButton;
