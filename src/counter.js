import React, { useState, useEffect } from "react";

export default function Counter() {
 const [value, setValue] = useState(0);

 useEffect(() => {
 let timer = setInterval(() => {
 setValue(value + 1);
 }, 1000);

 return () => clearInterval(timer);
 }, [value]);

 return (
 <div>
 <h3>{value}</h3>
 </div>
 );
}