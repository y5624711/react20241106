const a = "hell";
const b = 3.14;
const c = "world";
const f = "zzz";

export { a, b, f }; //named export

//파일 내에 하나만 존재함(여러개 존재할 수 없음)
// export default c; //default export (unName)
// export default d; 오류
export default "안녕"; //<- 값을 바로 써도 됨
