import React, { useCallback } from 'react';

import Input from '../../shared/components/FormElements/Input';
import './NewPlace.css';
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from '../../shared/Utils/validators';

const NewPlace = () => {
  const titleInputHandler = useCallback((id, value, isValid) => {}, []);
  const descriptionInputHandler = useCallback((id, value, isValid) => {}, []);

  return (
    <form className='place-form'>
      <Input
        id='title'
        type='text'
        label='Title'
        element='input'
        errorText='Please enter a valid title.'
        validators={[VALIDATOR_REQUIRE()]}
        onInput={titleInputHandler}
      />
      <Input
        id='description'
        label='Description'
        element='textarea'
        errorText='Please enter a valid description (at least 5 characters).'
        validators={[VALIDATOR_MINLENGTH(5)]}
        onInput={descriptionInputHandler}
      />
    </form>
  );
};

export default NewPlace;
