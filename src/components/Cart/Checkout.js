import classes from "./Checkout.module.css";
import useInput from "../../hooks/use-input";

const Checkout = (props) => {
  const {
    value: enteredFirstName,
    isValid: enteredFirstNameIsValid,
    hasError: firstNameInputHasError,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstNameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredLastName,
    isValid: enteredLastNameIsValid,
    hasError: lastNameInputHasError,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastNameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredPhoneNumber,
    isValid: enteredPhoneNumberIsValid,
    hasError: phoneNumberInputHasError,
    valueChangeHandler: phoneNumberChangeHandler,
    inputBlurHandler: phoneNumberBlurHandler,
    reset: resetPhoneNumberInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredAddress,
    isValid: enteredAddressIsValid,
    hasError: addressInputHasError,
    valueChangeHandler: addressChangeHandler,
    inputBlurHandler: addressBlurHandler,
    reset: resetAddressInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredCity,
    isValid: enteredCityIsValid,
    hasError: cityInputHasError,
    valueChangeHandler: cityChangeHandler,
    inputBlurHandler: cityBlurHandler,
    reset: resetCityInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredProvince,
    isValid: enteredProvinceIsValid,
    hasError: provinceInputHasError,
    valueChangeHandler: provinceChangeHandler,
    inputBlurHandler: provinceBlurHandler,
    reset: resetProvinceInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredPostalCode,
    isValid: enteredpostalCodeIsValid,
    hasError: postalCodeInputHasError,
    valueChangeHandler: postalCodeChangeHandler,
    inputBlurHandler: postalCodeBlurHandler,
    reset: resetPostalCodeInput,
  } = useInput((value) => value.trim().length !== 6);

  const formIsValid =
    enteredFirstNameIsValid &&
    enteredLastNameIsValid &&
    enteredPhoneNumberIsValid &&
    enteredAddressIsValid &&
    enteredCityIsValid &&
    enteredProvinceIsValid &&
    enteredpostalCodeIsValid;

  const firstNameInputClasses = `${classes.control} ${
    firstNameInputHasError ? classes.invalid : ""
  }`;

  const lastNameInputClasses = `${classes.control} ${
    lastNameInputHasError ? classes.invalid : ""
  }`;

  const phoneNumberInputClasses = `${classes.control} ${
    phoneNumberInputHasError ? classes.invalid : ""
  }`;

  const addressInputClasses = `${classes.control} ${
    addressInputHasError ? classes.invalid : ""
  }`;

  const cityInputClasses = `${classes.control} ${
    cityInputHasError ? classes.invalid : ""
  }`;

  const provinceInputClasses = `${classes.control} ${
    provinceInputHasError ? classes.invalid : ""
  }`;

  const postalCodeInputClasses = `${classes.control} ${
    postalCodeInputHasError ? classes.invalid : ""
  }`;

  const confirmHandler = (event) => {
    event.preventDefault();
    if (!formIsValid) {
      return;
    }

    props.onConfirm({
      FirstName: enteredFirstName,
      LastName: enteredLastName,
      PhoneNumber: enteredPhoneNumber,
      Address: enteredAddress,
      City: enteredCity,
      Province: enteredProvince,
      PostalCode: enteredPostalCode,
    });

    resetFirstNameInput();
    resetLastNameInput();
    resetPhoneNumberInput();
    resetAddressInput();
    resetCityInput();
    resetProvinceInput();
    resetPostalCodeInput();
  };

  return (
    <form onSubmit={confirmHandler} className={classes.form}>
      <div className={firstNameInputClasses}>
        <label htmlFor="name">First Name </label>
        <input
          type="text"
          id="firstName"
          onChange={firstNameChangeHandler}
          onBlur={firstNameBlurHandler}
        />
        {firstNameInputHasError && <p> Please enter a valid first name.</p>}
      </div>

      <div className={lastNameInputClasses}>
        <label htmlFor="name">Last Name</label>
        <input
          type="text"
          id="lastName"
          onChange={lastNameChangeHandler}
          onBlur={lastNameBlurHandler}
        />
        {lastNameInputHasError && <p> Please enter a valid last name.</p>}
      </div>

      <div className={phoneNumberInputClasses}>
        <label htmlFor="name"> Phone Number </label>
        <input
          type="text"
          id="phone"
          onChange={phoneNumberChangeHandler}
          onBlur={phoneNumberBlurHandler}
        />
        {phoneNumberInputHasError && <p>Please enter a valid phone number.</p>}
      </div>

      <div className={addressInputClasses}>
        <label htmlFor="name"> Address </label>
        <input
          type="text"
          id="address"
          onChange={addressChangeHandler}
          onBlur={addressBlurHandler}
        />
        {addressInputHasError && <p>Please enter a valid address.</p>}
      </div>

      <div className={cityInputClasses}>
        <label htmlFor="name"> City </label>
        <input
          type="text"
          id="city"
          onChange={cityChangeHandler}
          onBlur={cityBlurHandler}
        />
        {cityInputHasError && <p> Please enter a valid city.</p>}
      </div>

      <div className={provinceInputClasses}>
        <label htmlFor="name"> Province </label>
        <input
          type="text"
          id="province"
          onChange={provinceChangeHandler}
          onBlur={provinceBlurHandler}
        />
        {provinceInputHasError && <p>Please enter a valid province.</p>}
      </div>

      <div className={postalCodeInputClasses}>
        <label htmlFor="name"> Postal Code </label>
        <input
          type="text"
          id="postal"
          onChange={postalCodeChangeHandler}
          onBlur={postalCodeBlurHandler}
        />
        {postalCodeInputHasError && <p> Please enter a valid postal code.</p>}
      </div>
      <div className={classes.actions}>
        <button onClick={props.onClose} type="button">
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
