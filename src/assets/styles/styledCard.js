import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${props => props.theme.grid.bgColor};
  color: ${props => props.theme.grid.color};
  width: 260px;
  height: 275px;
  border-radius: 4px;
  text-align: left;
  box-shadow: 2px -3px 4px 0px rgba(0, 0, 0, 0.2);
`;

export const CardHeader = styled.div`
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
  border-bottom-right-radius: 0px;
  border-bottom-left-radius: 0px;
  font-size: 18px;
  text-align: right;
  height: 20px;
  padding-right: 10px;
  /*'✔️' '✖️'*/
  ::after {
    ${props => (props.verified ? 'content: "Verified ✔️"' : 'content: "Not verified ✖️"')}
  }
`;

export const CardBody = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 16px;
`;

export const CardQuestion = styled.div`
  margin-bottom: 20px;
  font-size: 30px;
  flex-grow: 1;
`;

export const CardAttr = styled.div`
  height: 20px;
  font-size: 18px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: inline-block;
  white-space: nowrap;
`;

export const CardAuthor = styled(CardAttr)`
  ::before {
    content: 'Author: ';
  }
`;

export const CardViews = styled(CardAttr)`
  ::before {
    content: 'Views: ';
  }
`;

export const CardFooter = styled.div`
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-bottom-right-radius: inherit;
  border-bottom-left-radius: inherit;
  height: 12px;
`;

export const Rate = styled.div`
  height: 100%;
  border-radius: inherit;
  width: 100%;
  background: ${props =>
    `linear-gradient(to right, green 0% ${props.percent}, red ${props.percent} 100%)`};
`;
