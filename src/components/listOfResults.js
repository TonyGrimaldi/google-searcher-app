import React from 'react';

const ListOfResults = (props) => {
  return (
    <div>
      <ul>
        {props.results.items ? props.results.items.map(el => <li><a href={el.link} target="_blank">{el.snippet}</a></li>) : <div></div>}
      </ul>
    </div>
  );
};

  export default ListOfResults;

