import { DependencyList, EffectCallback, useEffect, useRef } from 'react';

export const useOnUpdateEffect = (
  effect: EffectCallback,
  dependencyList: DependencyList
) => {
  const isInitialMount = useRef(true);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      effect();
    }
  }, dependencyList);
};
