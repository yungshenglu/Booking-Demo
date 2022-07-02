import get from 'lodash/get';

import {
  INITIAL_GUEST,
  INITIAL_ROOM,
  INITIAL_ROOM_CAPACITY,
  DEFAULT_STEP_GUEST,
  DEFAULT_STEP_ROOM,
  DEFAULT_STEP_ROOM_CAPACITY,
  INITIAL_ROOM_ADULT,
  INITIAL_ROOM_CHILD,
} from './RoomConstants';
import {
  TITLE,
  ALERT,
  INPUT_NUMBER_FIELD,
  INPUT_FORM,
} from './ComponentType';

export const TOTAL_GUEST = 'guest';
export const TOTAL_ROOM = 'room';
export const ROOM_CAPACITY = 'roomCapacity';
export const ROOM_DETAIL = 'roomDetail';
export const ROOM_ADULT = 'roomAdult';
export const ROOM_CHILD = 'roomChild';

export const initialRoomFormData = {
  [ROOM_ADULT]: INITIAL_ROOM_ADULT,
  [ROOM_CHILD]: INITIAL_ROOM_CHILD,
};

export const getInitialFormData = ({
  guest = INITIAL_GUEST,
  room = INITIAL_ROOM,
}) => ({
  [TOTAL_GUEST]: guest,
  [TOTAL_ROOM]: room,
  [ROOM_CAPACITY]: INITIAL_ROOM_CAPACITY,
  [ROOM_DETAIL]: [],
});

const getRoomFormInfo = ({
  roomQuota,
  roomCapacity,
  roomIndex,
  formData,
  handleChange,
  handleBlur,
}) => {
  const roomAdult = get(formData, ROOM_ADULT, INITIAL_GUEST);
  const roomChild = get(formData, ROOM_CHILD, INITIAL_GUEST);
  const roomGuest = roomAdult + roomChild;
  const remainQuota = roomQuota - roomChild - roomAdult;
  const currentQuota = (remainQuota > roomCapacity)
    ? roomCapacity
    : remainQuota;

    console.log('currentQuota:', currentQuota);

  return ({
    factoryType: INPUT_FORM,
    inputFields: [{
      type: TITLE,
      componentProps: {
        content: `房間：${roomGuest} 人`,
      }
    }, {
      type: INPUT_NUMBER_FIELD,
      componentProps: {
        label: '大人',
        hint: '年齡 20+',
        value: roomAdult,
        step: DEFAULT_STEP_GUEST,
        min: INITIAL_GUEST,
        max: (roomAdult > currentQuota && roomAdult !== roomCapacity)
          ? roomAdult
          : currentQuota,
        disableMinus: roomAdult === 0,
        disablePlus: (currentQuota <= 0 || roomAdult === roomCapacity),
        onClickChange: handleChange({
          roomIndex,
          fieldName: ROOM_ADULT,
        }),
        onChange: handleChange({
          roomIndex,
          fieldName: ROOM_ADULT,
        }),
        onBlur: handleBlur({
          roomIndex,
          fieldName: ROOM_ADULT,
        })
      },
    }, {
      type: INPUT_NUMBER_FIELD,
      componentProps: {
        label: '小孩',
        value: roomChild,
        step: DEFAULT_STEP_GUEST,
        min: INITIAL_GUEST,
        max: (roomChild > currentQuota && roomAdult !== roomCapacity)
          ? roomChild
          : currentQuota,
        disableMinus: roomChild === 0,
        disablePlus: (currentQuota <= 0 || roomAdult === roomCapacity),
        onClickChange: handleChange({
          roomIndex,
          fieldName: ROOM_CHILD,
        }),
        onChange: handleChange({
          roomIndex,
          fieldName: ROOM_CHILD,
        }),
        onBlur: handleBlur({
          roomIndex,
          fieldName: ROOM_CHILD,
        })
      },
    }],
    showDivider: true,
  });
};

export const getRoomAllocationFormInfo = ({
  formData,
  handleAddRoomDetail,
  handleRemoveRoomDetail,
  handleTotalChange,
  handleRoomChange,
  handleDetailChange,
  handleBlur,
}) => {
  const totalGuest = get(formData, TOTAL_GUEST, INITIAL_GUEST);
  const totalRoom = get(formData, TOTAL_ROOM, INITIAL_ROOM);
  const roomCapacity = get(formData, ROOM_CAPACITY, INITIAL_ROOM_CAPACITY);
  const roomDetail = get(formData, ROOM_DETAIL, []);
  const remainGuest = roomDetail.reduce((prev, item) => {
    const currRoomAdult = get(item, ROOM_ADULT, INITIAL_GUEST);
    const currRoomChild = get(item, ROOM_CHILD, INITIAL_GUEST);
    return prev + currRoomAdult + currRoomChild;
  }, 0);

  return ([
    {
      factoryType: INPUT_FORM,
      inputFields: [{
        type: TITLE,
        componentProps: {
          content: `Booking Demo`,
        }
      }, {
        type: INPUT_NUMBER_FIELD,
        componentProps: {
          label: '住客人數',
          name: TOTAL_GUEST,
          value: totalGuest,
          step: DEFAULT_STEP_GUEST,
          min: totalRoom,
          disableMinus: totalGuest <= totalRoom,
          autoFocus: true,
          onClickChange: handleTotalChange(TOTAL_GUEST),
          onChange: handleTotalChange(TOTAL_GUEST),
          onBlur: handleBlur(TOTAL_GUEST),
        },
      }, {
        type: INPUT_NUMBER_FIELD,
        componentProps: {
          label: '房間容納人數',
          name: ROOM_CAPACITY,
          value: roomCapacity,
          step: DEFAULT_STEP_ROOM_CAPACITY,
          min: INITIAL_ROOM_CAPACITY,
          disableMinus: roomCapacity <= INITIAL_ROOM_CAPACITY,
          onClickChange: handleRoomChange(ROOM_CAPACITY),
          onChange: handleTotalChange(ROOM_CAPACITY),
          onBlur: handleBlur(ROOM_CAPACITY),
        },
      }, {
        type: INPUT_NUMBER_FIELD,
        componentProps: {
          label: '房間數量',
          hint: `${roomCapacity} 人房`,
          name: TOTAL_ROOM,
          value: totalRoom,
          step: DEFAULT_STEP_ROOM,
          min: INITIAL_ROOM,
          max: totalGuest,
          disableMinus: totalRoom <= INITIAL_ROOM,
          disablePlus: totalRoom >= totalGuest,
          onClickPlus: handleAddRoomDetail,
          onClickMinus: handleRemoveRoomDetail,
          onClickChange: handleRoomChange(TOTAL_ROOM),
          onChange: handleTotalChange(TOTAL_ROOM),
          onBlur: handleBlur(TOTAL_ROOM),
        },
      }],
      showDivider: true,
    },
    {
      factoryType: TITLE,
      content: `住客人數：${totalGuest} 人 / ${totalRoom} 房`,
    },
    {
      factoryType: ALERT,
      content: `尚未方配人數：${totalGuest - remainGuest} 人`,
    },
    ...(roomDetail.map((item, roomIndex) => {
      const otherRoomDetail = roomDetail.filter((_, index) => index !== roomIndex);
      const otherGuest = otherRoomDetail.reduce((prev, item) => {
        const currRoomAdult = get(item, ROOM_ADULT, INITIAL_GUEST);
        const currRoomChild = get(item, ROOM_CHILD, INITIAL_GUEST);
        return prev + currRoomAdult + currRoomChild;
      }, 0);
      return getRoomFormInfo({
        roomQuota: totalGuest - otherGuest,
        roomCapacity,
        roomIndex,
        formData: item,
        handleChange: handleDetailChange,
        handleBlur,
      });
    }))
  ]);
};