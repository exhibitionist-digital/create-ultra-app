export default () => {
  const body = JSON.stringify({ msg: "HERE COMES THE FUTURE" });
  return new Response(body);
};
