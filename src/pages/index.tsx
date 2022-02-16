import CalcualotrContainer from '../containers/Calculator/CalcualotrContainer';
import {CalContextProvider} from '../Context/inedx';

export default function Home() {
  return (
    <>
      <CalContextProvider>
        <CalcualotrContainer />
      </CalContextProvider>
    </>
  );
}
