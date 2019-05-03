//import {Container, Row, Col} from 'react-bootstrap';
import StyledCheckboxes from './styled/StyledCheckboxes.js';
const Checkboxes = () => (
    <StyledCheckboxes>
        <div className="containerOuter">
          <div className="containerOuter__checkBoxContainer">
            <input className="inputCheckGoods hidden" type="checkbox" id="checkCheese" />
            <label className="labelCheckGoods" htmlFor="checkCheese">
              <div className="square"></div>
              <div className="entry-label" id="goodCheese">Cheese</div>
            </label>
            <input className="inputCheckGoods hidden" type="checkbox" id="checkWine" />
            <label className="labelCheckGoods" htmlFor="checkWine">
              <div className="square"></div>
              <div className="entry-label" id="goodWine">Wine</div>
            </label>
            <input className="inputCheckGoods hidden" type="checkbox" id="checkButter" />
            <label className="labelCheckGoods" htmlFor="checkButter">
              <div className="square"></div>
              <div className="entry-label" id="goodButter">Butter</div>
            </label>
          </div>
        </div>
    </StyledCheckboxes>

);
export default Checkboxes;