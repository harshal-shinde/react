import React, { useState } from "react";

function Example() {
  const [count, setCount ] = useState(0);

  return (
    <div>
      <p>You Clicked {count} times</p>
    </div>
  );
}