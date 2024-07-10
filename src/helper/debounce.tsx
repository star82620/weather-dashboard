export type CallbackFunc = (...args: any) => void;
export type Timeout = ReturnType<typeof setTimeout> | null;
export type Args = unknown[];

export const debounce = (
  callback: CallbackFunc,
  delay: number,
  callOnBeginning = false
) => {
  let timeout: Timeout = null;

  const executeFunc = (...args: Args) => {
    const funcCallLater = () => {
      timeout = null;

      if (!callOnBeginning) callback(...args);
    };
    const isBeginningRound = callOnBeginning && !timeout;
    if (timeout) clearTimeout(timeout);

    timeout = setTimeout(funcCallLater, delay || 200);
    if (isBeginningRound) callback(...args);
  };

  return executeFunc;
};
