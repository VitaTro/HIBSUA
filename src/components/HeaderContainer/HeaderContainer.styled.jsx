import styled from 'styled-components';

export const Header = styled.div`
  padding: 40px 60px;
  height: 92px;
  display: flex;
  justify-content: space-between;
  background: #fff;
`;
export const HeaderGeneral = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 20px;
`;
export const Logo = styled.img`
  width: 90px;
  height: 120px;
`;
export const GeneralContainer = styled.div`
  display: block;
`;
export const General = styled.h3`
  color: brown;
  text-shadow: rgb(67, 182, 208) 0px 0px 5px;
  font-family: 'El Messiri', sans-serif;
  font-weight: 800;
  font-size: 16px;
`;

export const Address = styled.address`
  flex-direction: column;
  gap: 13px;
  display: flex;
`;
export const PhoneLink = styled.a`
  font-family: 'Nunito', sans-serif;
  font-weight: 800;
  color: #007bff;
  text-decoration: none;
  font-size: 25px;
  &:hover {
    text-decoration: underline;
  }
`;
export const AddressLink = styled.a`
  font-family: 'Nunito', sans-serif;
  font-weight: 800;
  color: #007bff;
  text-decoration: none;
  font-size: 24px;
  &:hover {
    text-decoration: underline;
  }
`;
export const Icon = styled.span`
  margin-right: 10px;
`;
export const LanguageSwitcher = styled.div`
  flex-direction: column;
  gap: 5px;
  display: flex;
`;
export const FlagIcon = styled.a`
  //   cursor: pointer;
  //   font-size: 2em;
`;
export const FlagImage = styled.img`
  width: 32px;
  height: 18px;
`;
