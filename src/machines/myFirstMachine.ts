import { createMachine } from "xstate";


export const myMachine = createMachine({
  /** @xstate-layout N4IgpgJg5mDOIC5QAoC2BDAxgCwJYDswBKAOnwHsAXACXIDcwAnSAYgFkB5AVQGUBRDgDU+AJQDaABgC6iUAAdysXJVzl8skAA9EAJgCMEgDQgAnogAcAZhIB2AKwBfB8bRY8hUtnpNWnXgK4AFUkZJBAFJRU1DW0EfQAWEj0dOwk09IzLYzMEAFo7PRIUp2cQCgg4DVccAmINCOVVdTDYyx1bO2zEXL1Lc1t4gE5B83M7ccGJcx0nFwwajzIqWgZmCHrFRuiWiwkOroQ9ADYSR1Lq92ISL1XIDcimmMRLO3a9Gz1zewPj05KHIA */
  initial:"notHovered",
  states:{
    notHovered: {
      on: {
        MOUSEOVER: {
          target:"hovered"
        }
      }
    },
    hovered: {
      on: {
        MOUSEOUT: {
          target: "notHovered"
        }
      }
    }
  }
})