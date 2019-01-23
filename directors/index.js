export default function serverMethod(target, key, descriptor) {
  const fn = descriptor.value;
  return {
    ...descriptor,
    value() {
      if (window == null) {
        //server
        console.log("at server")
        return fn.apply(this, arguments);
      } else {
        console.log("at brower")
        return fn.apply(this, arguments);
      }
    }
  };
}
