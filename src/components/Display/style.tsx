import tw from 'tailwind-styled-components';

const Wrapper = tw.div`
  flex
  flex-col
  justify-start

  w-full
  h-2/6

  rounded-t-xl
  bg-displayColor
`;

const CurrentNum = tw.div`
  pt-[10%]

  h-8
  w-[95%]

  text-3xl
  text-transparentWhite
  text-right
`;

const ResultNum = tw.div`
  pt-[10%]
  pb-[10%]

  h-12
  w-[95%]

  text-5xl
  text-lightGrey
  text-right
`;

export {Wrapper, CurrentNum, ResultNum};
