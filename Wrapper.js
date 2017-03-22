class Wrapper {
  
  constructor(code) {
    
    this.code = code;
    
  }
  
  wrap() {
    
    var commands = this.code.split("|");
    commands.pop();
    
    for(var count = 0; count < commands.length; count++) {
      
      debug((this.run(commands[count])));
      
      debug("");
      
    }
    
    debug("Finished running level " + level + "'s script!'");
    debug("");
    debug("");
    debug("");
    
  }
  
  run(command) {
    
    command = command.replace(/\s/g, "");
    
    if(command == "") {
      
      return "Blank command: cancelling.";
      
    }
    
    debug("Running command \"" + command + "\".");
    
    var found_pair = false;
    
    for(var count1 = 0; count1 < command.length; count1++) {
      
      if(command[count1] == "@") {
        
        found_pair = true;
        break;
        
      }
      
    }
    
    if(found_pair) {
      
      var entity_type = command.substr(0, count1).replace(/\d/g, "");
      var index = command.substr(0, count1).replace(/\D/g, "");
      
      if(entity_type == "" || index == "") {
        
        if(entity_type == "") {
          
          return "(at char " + count1 + " in entity type / index parsing routine) Error: no entity type, must cancel current command.";
          
        } else {
          
          return "(at char " + count1 + " in entity type / index parsing routine) Error: no index, must cancel current command.";
          
        }
        
      }
      
      debug("Found entity type / index pair: \"" + entity_type + " / " + index + "\".");
      
    } else {
      
      return "(at char " + count1 + " in entity type / index parsing routine) Error: could not find a entity type / index pair, must cancel current command.";
      
    }
    
    var found_attribute = false;
    
    for(var count2 = count1; count2 < command.length; count2++) {
      
      if(command[count2] == ":") {
        
        found_attribute = true;
        break;
        
      }
      
    }
    
    if(found_attribute) {
      
      var attribute = command.substr(count1 + 1, count2 - count1 - 1);
      
      if(attribute == "") {
        
        return "(at char " + count2 + " in attribute parsing routine) Error: no attribute, must cancel command."; 
        
      }
      
      debug("Found attribute: \"" + attribute + "\".");
      
    } else {
      
      return "(at char " + count2 + " in attribute parsing routine) Error: could not find a attribute, must cancel current command.";
      
    }
    
    var parens_nums = [];
    var current_num = 0;
    var current_parens_num = [];
    
    var in_parens_num = false;
    var got_num = false;
    
    var current_letter = " ";
    
    for(var count3 = count2 + 1; count3 < command.length; count3++) {
      
      current_letter = command[count3];
      
      if(!in_parens_num) {
        
        if(current_letter == "(") {
          
          in_parens_num = true;
          
          got_num = false;
          
        } else {
          
          return "(at char " + count3 + " in parens_num parsing routine) Error: did not find parens_num initiator, instead, found \"" + current_letter + "\", must cancel command.";
          
        }
        
      } else {
        
        if(!isNaN(parseInt(current_letter))) {
          
          current_num *= 10;
          current_num += parseInt(current_letter);
          
          got_num = true;
          
        } else {
          
          if(got_num) {
            
            if(current_letter == ",") {
              
              current_parens_num.push(current_num);
              current_num = 0;
              
              got_num = false;
              
            } else {
              
              if(current_letter == ")") {
                
                current_parens_num.push(current_num);
                current_num = 0;
                
                parens_nums.push(current_parens_num);
                current_parens_num = [];
                
                in_parens_num = false;
                
              } else {
                
                return "(at char " + count3 + " in parens_num parsing routine) Error: found : \"" + current_letter + "\" when expecting a number or E.O.N. (E.nd O.f N.umber), must cancel command.";
                
              }
              
            }
            
          } else {
            
            return "(at char " + count3 + " in parens_num parsing routine) Error: found \"" + current_letter + "\" when expecting a number, must cancel command.";
            
          }
          
        }
        
      }
      
    }
    
    if(current_letter != ")") {
      
      return "(at char " + count3 + " in parens_num parsing routine) Error: found E.O.C. (E.nd O.f C.ommand) when expecting \")\", must cancel command"
      
    }
    
    var parens_nums_string = "";
    
    for(count1 = 0; count1 < parens_nums.length; count1++) {
      
      parens_nums_string += "("
      
      for(count2 = 0; count2 < parens_nums[count1].length; count2++) {
        
        parens_nums_string += parens_nums[count1][count2].toString();
        
        if(count2 < parens_nums[count1].length - 1) {
          
          parens_nums_string += ", ";
          
        }
        
      }
      
      parens_nums_string += ")"
      
      if(count1 < parens_nums.length - 1) {
        
        parens_nums_string += " ";
        
      }
      
    }
    
    debug("Found parens_nums: " + parens_nums_string + ".");
    
    window[entity_type.toLowerCase() + "s"][index].modify_attribute(attribute, parens_nums, parens_nums_string);
    
    return "Ran command \"" + command + "\" successfully!";
    
  }
  
}