
import axios  from "axios";
export function serverMethod(target, key, descriptor) {
  const fn = descriptor.value;
  return {
    ...descriptor,
    value() {
      if (typeof window == "undefined") {
        //server
        console.log("at server");
        return fn.apply(this, arguments)
      } else {
        let state = this.state;
				let method = key;
				let me =this;
        axios.get(`http://localhost:3000/?type=xhr&&state=${JSON.stringify(state)}&&method=${method}`).then((a)=>{
					debugger;
          me.setState(a.data);
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
      if (typeof window == "undefined") {
        console.log("at server");
        //需要想客户端发送action
        return fn.apply(this, arguments)
      } else {
        console.log("at client");
        return fn.apply(this, arguments)
      }
    }
  };
}
