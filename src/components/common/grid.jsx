import React from 'react';
import { PropTypes } from 'prop-types';
import { GridContainer, GridItem } from '../../assets/styles/index';

const Grid = ({ component, data }) => (
  <GridContainer>
    {data.map(d => (
      <GridItem key={d.id}>
        {React.createElement(component, { ...component.mapToModelView(d) })}
      </GridItem>
    ))}
  </GridContainer>
);

Grid.propTypes = {
  component: PropTypes.func.isRequired,
  data: PropTypes.oneOfType([
    // TestCard PropTypes
    PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        verified: PropTypes.bool.isRequired,
        question: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
        dislikes: PropTypes.number.isRequired
      })
    )
  ]).isRequired
};

export default Grid;
