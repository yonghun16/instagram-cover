import React from "react";
import styled from "styled-components";

const ButtonRow = styled.div`
  display: flex;
  gap: 8px;
  padding: 0 16px;
  margin-top: 12px;
`;

const Button = styled.button`
  flex: 1;
  padding: 8px;
  border: 1px solid #ddd;
  background: white;
  border-radius: 6px;
  font-weight: 500;
`;

export default function ActionButtons() {
  return (
    <ButtonRow>
      <Button>Message</Button>
      <Button>Subscribe</Button>
      <Button>Contact</Button>
    </ButtonRow>
  );
}
