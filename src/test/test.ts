export type X = string | number;
type Y = string | number | boolean;
export const fn = (data: X, y: Y) => {
  console.log('测试,watch');
  console.log('测试,watch');
  console.log('测试,watch');
  console.log(data, y);
};

// const test = () => {
//   console.log('test');
// };
