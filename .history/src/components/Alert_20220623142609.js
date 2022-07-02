import React from 'react'

export default function Alert(props) {
    const capitalise = (word) =>{
        const lower= word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
  return (
    <div style={{
        height:'50px'
      }}>
      
      { props.alert  && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        {/* this is the and operator which when used in javascript evaluates the second argument only when first has become true. If, anyhow first is false, then the second one wont be evaluated. If it wont have been used the second argument which initally was the only argument would be evaluated and since the inital value of the props.alert is null it would return nothing and the evaluation would end there itself but now since there is an props.alert in the first argument.So, the second wont be evaluated till the first one is null */}
    <strong>{capitalise(props.alert.type)}</strong>  :    {props.alert.msg}
    
        
    
    </div>}
    </div>
    )
    }
