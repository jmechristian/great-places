import React from 'react';

import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import './PlaceForm.css';
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from '../../shared/Utils/validators';
import { useForm } from '../../shared/hooks/form-hook';

const NewPlace = () => {
  const [formState, inputHandler] = useForm({
    inputs: {
      title: {
        value: '',
        isValid: false,
      },
      description: {
        value: '',
        isValid: false,
      },
    },
    isValid: false,
  });

  const placeSubmitHandler = event => {
    event.preventDefault();
    console.log(formState.inputs);
  };

  return (
    <form className='place-form' onSubmit={placeSubmitHandler}>
      <Input
        id='title'
        type='text'
        label='Title'
        element='input'
        errorText='Please enter a valid title.'
        validators={[VALIDATOR_REQUIRE()]}
        onInput={inputHandler}
      />
      <Input
        id='description'
        label='Description'
        element='textarea'
        errorText='Please enter a valid description (at least 5 characters).'
        validators={[VALIDATOR_MINLENGTH(5)]}
        onInput={inputHandler}
      />
      <Input
        id='address'
        label='Address'
        element='input'
        errorText='Please enter a valid address.'
        validators={[VALIDATOR_REQUIRE()]}
        onInput={inputHandler}
      />
      <Button type='submit' disabled={!formState.isValid}>
        ADD PLACE
      </Button>
    </form>
  );
};

export default NewPlace;
