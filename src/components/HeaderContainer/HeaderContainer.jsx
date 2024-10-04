import SearchBar from 'components/SearchBar/SearchBar';
import { FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import {
  Address,
  AddressLink,
  FlagIcon,
  FlagImage,
  General,
  GeneralContainer,
  Header,
  HeaderGeneral,
  Icon,
  LanguageSwitcher,
  Logo,
  PhoneLink,
} from './HeaderContainer.styled';
const HeaderContainer = () => {
  //   const [searchParams, setSearchParams] = useSearchParams();

  //   const actualQuery = searchParams.get('query');
  // Логіка для зміни мови
  const changeLanguage = lang => {
    console.log(`Зміна мови на: ${lang}`);
  };
  return (
    <Header>
      <HeaderGeneral>
        <Logo
          src={require('./logo.png')}
          alt="Logo image"
          width={90}
          height={120}
        />
        <GeneralContainer>
          <General>HIGHER </General>
          <General> INTERNATIONAL </General>
          <General> BUSINESS</General>
          <General> SCHOOL</General>
        </GeneralContainer>
      </HeaderGeneral>
      <SearchBar
      //   onSubmit={e => setSearchParams({ query: e })}
      />
      <Address>
        <PhoneLink href="tel:+380443310630">
          <Icon>
            <FaPhone />
          </Icon>
          +38 (044) 331 06 30
        </PhoneLink>
        <AddressLink
          href="https://maps.google.com/?q=03055,+КиЇв,+вул.Шулявска,5"
          target="_blank"
        >
          <Icon>
            <FaMapMarkerAlt />
          </Icon>
          Київ, вул.Шулявська 5
        </AddressLink>
      </Address>
      <LanguageSwitcher>
        <FlagIcon onClick={() => changeLanguage('uk')}>
          <FlagImage src={require('./ua.png')} />
        </FlagIcon>
        <FlagIcon onClick={() => changeLanguage('en')}>
          <FlagImage src={require('./gb.png')} />
        </FlagIcon>
        <FlagIcon onClick={() => changeLanguage('de')}>
          <FlagImage src={require('./de.png')} />
        </FlagIcon>
        <FlagIcon onClick={() => changeLanguage('pl')}>
          <FlagImage src={require('./pl.png')} />
        </FlagIcon>
      </LanguageSwitcher>
    </Header>
  );
};

export default HeaderContainer;
