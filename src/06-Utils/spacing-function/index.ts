const Φ = 1.618;

const sizes = {
  small: 4,
  medium: 6,
  big: 12,
};

const makeSpace = (size:string):string => `${Φ * sizes[size]}px`;

export default makeSpace;
