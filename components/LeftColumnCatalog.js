import { Container, Row, Col, Button } from 'react-bootstrap';
import LeftColumnCatalogStyled from './styled/LeftColumnCatalogStyled';
import CheckBoxes from './Checkboxes.js';
import RadioButtons from './RadioButtons.js';
/*
import DoubleRangeSlider from '../components/DoubleRangeSlider.js';
<DoubleRangeSlider/>
<RadioButtons/>
*/
const LeftColumn = () => (
  <LeftColumnCatalogStyled>
    <div className="text-justify textCheeseFarm">
      <h3 className="text-center headerToSort">Sort By</h3>
      <CheckBoxes />
      <RadioButtons />
    </div>
  </LeftColumnCatalogStyled>
);
export default LeftColumn;
