import React, { FC } from 'react';

// Styles
import {
  h2Styles,
  textStyles,
} from '../Styles/index.styles';

interface ICardProps {
  name: string;
  students: string[];
}

const Card: FC<ICardProps> = ({ name, students }) => (
  <article>
    <h2 className={h2Styles}>Class Name</h2>
    <h3 className={textStyles}>{name}</h3>
    <h2 className={h2Styles}>Students</h2>
    <ul>
      {students.map((student) => (
        <li key={student} className={textStyles}>{student}</li>
      ))}
    </ul>
  </article>
);

export default Card;
