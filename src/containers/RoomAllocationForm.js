import React, { useState } from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';

import {
  TOTAL_ROOM,
  ROOM_DETAIL,
  initialRoomFormData,
  getInitialFormData,
  getRoomAllocationFormInfo,
} from '@/constants/RoomFormInfo';

import FormFactory from './FormFactory';
import { StyledRoomForm } from '@/styles/Form.styles';

const RoomAllocationForm = (props) => {
  const {
    guest,
    room,
    onChange,
  } = props;

  const [formData, setFormData] = useState(getInitialFormData({
    guest,
    room,
  }));

  const handleAddRoomDetail = (value) => {
    setFormData((prev) => ({
      ...prev,
      [ROOM_DETAIL]: [
        ...prev[ROOM_DETAIL],
        initialRoomFormData,
      ],
    }));
  };

  const handleRemoveRoomDetail = (value) => {
    setFormData((prev) => ({
      ...prev,
      [ROOM_DETAIL]: prev[ROOM_DETAIL].slice(0, -1),
    }));
  };

  const handleRoomChange = (fieldName) => (value) => {
    setFormData((prev) => ({
      ...prev,
      [fieldName]: value,
    }));
  };

  const handleTotalChange = (fieldName) => (value) => {
    let currentRoomDetail = get(formData, ROOM_DETAIL, []);
    if (fieldName === TOTAL_ROOM) {
      while (currentRoomDetail.length < value) {
        currentRoomDetail = [
          ...currentRoomDetail,
          initialRoomFormData,
        ];
      }
      while (currentRoomDetail.length > value) {
        currentRoomDetail = currentRoomDetail.slice(0, -1);
      }
    }

    onChange();
    setFormData((prev) => ({
      ...prev,
      [fieldName]: value,
      ...(fieldName === TOTAL_ROOM && {
        [ROOM_DETAIL]: currentRoomDetail,
      }),
    }));
  };

  const handleDetailChange = ({ roomIndex, fieldName }) => (value) => {
    setFormData((prev) => ({
      ...prev,
      [ROOM_DETAIL]: [
        ...prev[ROOM_DETAIL].slice(0, roomIndex),
        {
          ...prev[ROOM_DETAIL][roomIndex],
          [fieldName]: value,
        },
        ...prev[ROOM_DETAIL].slice(roomIndex + 1),
      ],
    }));
  };

  const handleBlur = (fieldName) => (value) => {
    setFormData((prev) => ({
      ...prev,
      [fieldName]: value,
    }));
  };

  const roomAllocationFormInfo = getRoomAllocationFormInfo({
    formData,
    handleAddRoomDetail,
    handleRemoveRoomDetail,
    handleTotalChange,
    handleRoomChange,
    handleDetailChange,
    handleBlur,
  });

  return (
    <StyledRoomForm>
      {roomAllocationFormInfo.map((item) => (
        <FormFactory
          fieldInfo={item}
        />
      ))}
    </StyledRoomForm>
  );
};

RoomAllocationForm.propTypes = {
  guest: PropTypes.number,
  room: PropTypes.number,
  onChange: PropTypes.func,
};

RoomAllocationForm.defaultProps = {
  guest: 0,
  room: 0,
  onChange: () => {},
};

export default RoomAllocationForm;
