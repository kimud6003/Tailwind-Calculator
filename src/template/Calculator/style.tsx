import tw from 'tailwind-styled-components';

export const CalWrapper = tw.div`
  h-calHeight
  w-calWidth
  rounded-xl
  drop-shadow-2xl

  flex
  flex-col
  justify-start
  items-center

  text-black
  bg-white

  absolute
  left-1/2
  top-1/2 
  -translate-y-2/4
  -translate-x-2/4
`;
