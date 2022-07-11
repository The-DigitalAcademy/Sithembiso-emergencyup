const storage = {
    // check if storage exists
    exist: (key) => {
      if (localStorage.getItem(key)) {
        return true
      }
  
      return false
    },
  
    // get parsed json from local storage
    get: (key) => {
      return localStorage.getItem(key) ? localStorage.getItem(key) : null
    },
  
    // save data into local storage
    set: (key, value) => {
      if (typeof value === 'string') {
        localStorage.setItem(key, value)
        return
      }
  
      localStorage.setItem(key, JSON.stringify(value))
    },
  
    clear: () => {
      localStorage.clear()
    },
  }
  
  export default storage