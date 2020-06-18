import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from '../../shared/hooks/form-hook';

import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import Card from '../../shared/components/UIElements/Card';
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from '../../shared/Utils/validators';
import './PlaceForm.css';

const DUMMY_PLACES = [
  {
    id: 'p1',
    title: 'Empire State Building',
    description: 'One of the most famous building in the world',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Empire_State_Building_%28aerial_view%29.jpg/480px-Empire_State_Building_%28aerial_view%29.jpg',
    address: '20 W 34th St, New York, NY, NY 10001',
    location: {
      lat: 40.7484405,
      lng: -73.9878584,
    },
    creator: 'u1',
  },
  {
    id: 'p1',
    title: 'Empire State Building',
    description: 'One of the most famous building in the world',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Empire_State_Building_%28aerial_view%29.jpg/480px-Empire_State_Building_%28aerial_view%29.jpg',
    address: '20 W 34th St, New York, NY, NY 10001',
    location: {
      lat: 40.7484405,
      lng: -73.9878584,
    },
    creator: 'u2',
  },
];

const UpdatePlace = () => {
  const [isLoading, setIsLoading] = useState(true);
  const placeId = useParams().placeId;
  const [formState, inputHandler, setFormData] = useForm(
    {
      title: {
        value: '',
        isValid: false,
      },
      description: {
        value: '',
        isValid: false,
      },
    },
    true
  );

  const identifiedPlace = DUMMY_PLACES.find(p => p.id === placeId);

  useEffect(() => {
    if (identifiedPlace) {
      setFormData(
        {
          title: {
            value: identifiedPlace.title,
            isValid: true,
          },
          description: {
            value: identifiedPlace.description,
            isValid: true,
          },
        },
        true
      );
    }
    setIsLoading(false);
  }, [setFormData, identifiedPlace]);

  if (!identifiedPlace) {
    return (
      <div className='center'>
        <Card>
          <h2>Could not find place.</h2>
        </Card>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className='center'>
        <h2>Loading....</h2>
      </div>
    );
  }

  const updatePlaceSubmitHandler = event => {
    event.preventDefault();
    console.log(formState.inputs);
  };

  return (
    <form className='place-form' onSubmit={updatePlaceSubmitHandler}>
      <Input
        id='title'
        type='text'
        label='Title'
        element='input'
        errorText='Please enter a valid title.'
        validators={[VALIDATOR_REQUIRE()]}
        onInput={inputHandler}
        initialValue={formState.inputs.title.value}
        initialValid={true}
      />
      <Input
        id='description'
        label='Description'
        element='textarea'
        errorText='Please enter a valid description (at least 5 characters).'
        validators={[VALIDATOR_MINLENGTH(5)]}
        onInput={inputHandler}
        initialValue={formState.inputs.description.value}
        initialValid={true}
      />
      <Button type='submit' disabled={!formState.isValid}>
        UPDATE PLACE
      </Button>
    </form>
  );
};

export default UpdatePlace;
