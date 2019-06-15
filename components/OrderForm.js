import styled from 'styled-components';
import Geosuggest from 'react-geosuggest';

const OrderFormBody = styled.form`
  fieldset {
    display: flex;
    flex-direction: column;
    width: 450px;
    padding: 5px 20px 10px 20px;
    border: 3px solid black;

    legend {
      width: auto;
      padding: 5px 10px;
    }

    label {
      display: flex;
      flex-direction: column;
      font-weight: bold;
      margin-bottom: 0;

      input {
        border: none;
        width: 220px;
        margin: 10px 0;
        padding: 5px 10px;
        border-bottom: 3px solid ${({ theme }) => theme.border};
        transition: 225ms;

        &:active,
        &:focus {
          outline: none;
          border-bottom-color: ${({ theme }) => theme.mainColor};
        }
      }
    }
  }
`;

const OrderForm = () => (
  <OrderFormBody>
    <fieldset>
      <legend>
        <strong>Personal info</strong>
      </legend>
      <label htmlFor="email">
        E-mail
        <input type="email" name="email" id="email" placeholder="Email" />
      </label>
      <label htmlFor="firstName">
        First Name
        <input
          type="text"
          name="firstName"
          id="firstName"
          placeholder="First Name"
        />
      </label>
      <label htmlFor="lastName">
        Last Name
        <input
          type="text"
          name="lastName"
          id="lastName"
          placeholder="Last Name"
        />
      </label>
    </fieldset>
    <fieldset>
      <legend>
        <strong>Address</strong>
      </legend>
      <label htmlFor="postalCode">
        City
        <Geosuggest placeholder="Search for a city" initialValue="Gouda" />
      </label>
      <label htmlFor="postalCode">
        Postal Code
        <input
          type="text"
          name="postalCode"
          id="postalCode"
          placeholder="Postal Code"
        />
      </label>
      <label htmlFor="houseNumber">
        House #
        <input
          type="text"
          name="houseNumber"
          id="houseNumber"
          placeholder="House #"
        />
      </label>
      <label htmlFor="additional">
        Additional info
        <input
          type="text"
          name="additional"
          id="additional"
          placeholder="add"
        />
      </label>
      <label htmlFor="street">
        Street
        <input type="text" name="street" id="street" placeholder="Street" />
      </label>
    </fieldset>
  </OrderFormBody>
);

export default OrderForm;
