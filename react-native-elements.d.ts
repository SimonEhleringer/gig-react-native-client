import * as rne from 'react-native-elements';

type RecursivePartial<T> = { [P in keyof T]?: RecursivePartial<T[P]> };

declare module 'react-native-elements' {
  export interface Colors {
    text: string;
  }

  export interface FullTheme {
    colors: RecursivePartial<Colors>;
  }
}