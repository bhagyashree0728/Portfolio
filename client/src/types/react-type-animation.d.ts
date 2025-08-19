declare module 'react-type-animation' {
  import * as React from 'react';

  export interface TypeAnimationProps {
    sequence: Array<string | number | (() => void)>;
    wrapper?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
    speed?: number;
    deletionSpeed?: number;
    repeat?: number | typeof Infinity;
    cursor?: boolean;
    style?: React.CSSProperties;
  }

  export const TypeAnimation: React.FC<TypeAnimationProps>;
  export default TypeAnimation;
}


