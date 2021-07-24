import styled from "@emotion/styled";

export const List = styled.ul`
width: 400px;
list-style: none;
`
export const Item = styled.li`
display: flex;
justify-content: space-between;
padding-left: 15px;

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`