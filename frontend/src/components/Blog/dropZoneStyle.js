import styled from "styled-components";
import { Close } from "@styled-icons/material";

export const Dropzone = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 80px;
  color: #707070;
  border: 1px dashed #bdbdbd;
  font-size: 14px;
  cursor: pointer;

  input {
    display: none;
  }
`;

export const SelectedFileContainer = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
`;

export const SelectedFile = styled.span`
  font-size: 1rem;
`;

export const ClearFile = styled(Close)`
  border: 0;
  background: transparent;
  color: red;
  width: 1.5rem;
  cursor: pointer;
`;
