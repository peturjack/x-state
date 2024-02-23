import { createMachine } from "xstate";

export const TodoMachine = createMachine({
  /** @xstate-layout N4IgpgJg5mDOIC5QBUD2FUAICyBDAxgBYCWAdmAHQAyquEZUmaGsAxM6rJjXZANoAGALqJQAB07EALsVSlRIAB6IAtAEYBaigE4ArADZ9AZgAsugExqTADhNHrAGhABPRGv3WKJ8ye3XNxroA7N7mAL5hThw4BCTk1LT0pIwcbDxJKeicmABiuMQANvzCChKw0rLySEqqPuYUan7W5uYCljZ2ji6I5tae2j5+AUbB3hGRIKTocArReERkYKWSMnIKyggq5toCDU0tbVa2Jk6uCP46g-7uIyEtEVFZMQvx6QxMWfDVZRVr1RtbcxGLwmDQCPTtWz2U49HxeK7DUb3CZzWKLCipbiJSDLcqrKqgDa9Ci6XTWbQ7ExBay6NQGcy6GEIFomeG+a6BO7hFFPeZxShvZIfFiYACiACdxahxbjfgSapsgfoKEYgc1WpDOkyRlpvOzEXdxmEgA */
  

  id: "Todo Machine",
  initial: "Loading Todos",
  schemas:{
    events: {} as 
    | {type: "Todos Loaded"; todo:string[]}
    | {type: "Loading Todos Failed"; errorMessage: string}
  },
  states: {
    "Loading Todos": {
      on: {
        "Todos Loaded": {
          target:"Todos Loaded",
          actions: "consoleLogTodos",
        },
        "Loading Todos Failed":{
          target: "Loading Todos Error",
          
        } 
      }
    },

    "Todos Loaded": {},
    "Loading Todos Error": {}
  }
}, {
  actions: {
    consoleLogTodos: (context, event) => {
      alert(JSON.stringify(event))
    }
  }
})