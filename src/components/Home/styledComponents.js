import styled from 'styled-components/macro'

export const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f5d0fe;
`

export const ResponsiveContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  height: 30vh;
  width: 50%;
  border: none;
  border-radius: 8px;
`

export const Heading = styled.h1`
  color: #000000;
  font-size: 32px;
  font-weight: 600;
  font-family: 'Roboto';
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 50vw;
`

export const Input = styled.input`
  height: 6vh;
  width: 60%;
  color: #323f4b;
  padding: 10px;
  border: 1px solid #323f4b;
  border-radius: 4px;
`

export const Text = styled.p`
  color: #323f4b;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 500;
`

export const SaveButton = styled.button`
  color: #cbd2d9;
  font-family: 'Roboto';
  font-size: 14px;
  background-color: #d946ef;
  border: none;
  outline: none;
  cursor: pointer;
  text-align: center;
  border-radius: 4px;
  margin: 10px;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 14px;
  padding-bottom: 14px;
`
