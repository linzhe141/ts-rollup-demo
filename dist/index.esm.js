var fn = function (data, y) {
    console.log('测试,watch');
    console.log('测试,watch');
    console.log('测试,watch');
    console.log(data, y);
};
// const test = () => {
//   console.log('test');
// };

fn(1, 't');
var foo = function (data) {
    console.log(data);
};
foo('1');

export { foo };
