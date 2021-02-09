export interface PayloadBase {
  onComplete?: () => void;
}

export const isPayloadBase = (payload: any): payload is PayloadBase => {
  console.log('checking');

  console.log((payload as PayloadBase).onComplete !== undefined);

  return (payload as PayloadBase).onComplete !== undefined;
};
