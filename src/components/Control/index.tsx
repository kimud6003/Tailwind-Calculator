import React from 'react';
import {CtrlWrapper} from './style';
import Button from '../../components/Button';

type Props = {
  calculateFunc: (e: any) => void;
};

const Control = (props: Props) => {
  const {calculateFunc} = props;
  return (
    <CtrlWrapper>
      <Button onClick={calculateFunc} color="bg-mediumGrey" content="C" />
      <Button onClick={calculateFunc} color="bg-mediumGrey" content="+/-" />
      <Button onClick={calculateFunc} color="bg-mediumGrey" content="%" />
      <Button onClick={calculateFunc} color="bg-lightOrange" content="/" />
      <Button onClick={calculateFunc} content="7" />
      <Button onClick={calculateFunc} content="8" />
      <Button onClick={calculateFunc} content="9" />
      <Button onClick={calculateFunc} color="bg-lightOrange" content="*" />
      <Button onClick={calculateFunc} content="4" />
      <Button onClick={calculateFunc} content="5" />
      <Button onClick={calculateFunc} content="6" />
      <Button onClick={calculateFunc} color="bg-lightOrange" content="-" />
      <Button onClick={calculateFunc} content="3" />
      <Button onClick={calculateFunc} content="2" />
      <Button onClick={calculateFunc} content="1" />
      <Button onClick={calculateFunc} color="bg-lightOrange" content="+" />
      <Button onClick={calculateFunc} content="0" />
      <Button onClick={calculateFunc} content="." />
      <Button onClick={calculateFunc} content="&#8592;" />
      <Button onClick={calculateFunc} color="bg-mediumOrange" content="=" />
    </CtrlWrapper>
  );
};

export default React.memo(Control);
