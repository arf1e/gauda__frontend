import StyledRadioButtons from './styled/StyledRadioButtons.js';
const RadioButtons = () => (
    <StyledRadioButtons>
       <div className="containerOuter">
          <div className="containerRadio">
              {/* Ascending */}
            <input type="radio" className="hidden " id="sort-asc" name="inputs"/>
            <label className="entry" htmlFor="sort-asc">
              <div className="circle"></div>
              <div className="entry-label entry-label-bolder" id="Ascending">Ascending</div>
            </label>
              {/* Descending */}
            <input type="radio" className="hidden" id="sort-desc" name="inputs"/>
            <label className="entry" htmlFor="sort-desc">
              <div className="circle"></div>
              <div className="entry-label" id ="Descending">Descending</div>
            </label>
              {/* Rating */}
            <input type="radio" className="hidden" id="sort-rating" name="inputs"/>
            <label className="entry" htmlFor="sort-rating">
              <div className="circle"></div>
              <div className="entry-label" id ="Rating">Rating</div>
            </label>

            <div className="highlight"></div>
            <div className="overlay"></div>
          </div>
        </div>
    </StyledRadioButtons>

);
export default RadioButtons;