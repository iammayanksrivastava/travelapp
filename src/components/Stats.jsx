import { useState } from "react";

function Stats({ items }) {
  if (!items.length)
    return <p className="stats">Start adding Items to you list 🏁 </p>;
  const numItems = items.length;
  const itemsPacked = items.filter((item) => item.packed).length;
  const percentPacked = Math.round((itemsPacked / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentPacked === 100
          ? "You got Everything !! Ready to go 🚀"
          : `You have ${numItems} items and you have packed ${itemsPacked} items ( ${percentPacked}%)`}
      </em>
    </footer>
  );
}

export default Stats;
