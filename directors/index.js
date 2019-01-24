
import axios  from "axios";
export function serverMethod(target, key, descriptor) {
  const fn = descriptor.value;
  return {
    ...descriptor,
    value() {
      if (window == null) {
        //server
        console.log("at server");
        debugger; 
        return fn.apply(this, arguments);
      } else {
        debugger; 
        let state = this.state;
        let method = key;
        axios.get(`http://localhost:3000/xhr?state=${JSON.stringify(state)}&&method=${method}`).then(function(a){
          console.log(a)
        })
        console.log("at brower",target, key)
         return null;
      }
    }
  };
}

export function clientMethod(target, key, descriptor) {
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
