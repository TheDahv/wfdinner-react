import keymirror from 'keymirror';

let constants = keymirror({
  MEAL_UPDATE: null
});

constants.DAYS = [
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
  'saturday',
  'sunday'
];

constants.MEALS = [
  'breakfast',
  'lunch',
  'dinner'
];

export default constants;
