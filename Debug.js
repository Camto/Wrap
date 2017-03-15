function set_debug(value) {
  
  debug_mode = value;
  
  return debug_mode;
  
}

function toggle_debug() {
  
  debug_mode = !debug_mode;
  
  return debug_mode;
  
}

function debug(message) {
  
  if(debug_mode) {
    
    console.log(message);
    
    return true;
    
  } else {
    
    return false;
    
  }
  
}