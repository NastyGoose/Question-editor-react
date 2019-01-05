import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 18px;
  height: 20px;
  padding-right: 10px;
  padding-left: 10px;
  padding-top: 5px;
`;

export const CardEdit = styled(FontAwesomeIcon).attrs(props => ({
  icon: props.icon
}))`
  height: 20px;
  color: ${props => props.theme.icon.color};

  &:hover {
    color: ${props => props.theme.icon.hoverColor};
  }
`;

export const CardVerifyText = styled.div`
  font-size: 14px;
  margin-right: 6px;
`;

export const CardVerifyIcon = styled(FontAwesomeIcon).attrs(props => ({
  icon: props.icon
}))`
  height: 20px;

  color: ${({ icon }) => (icon === 'check' ? 'green' : 'red')};
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
