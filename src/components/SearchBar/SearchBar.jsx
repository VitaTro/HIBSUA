// import PropTypes from 'prop-types';
import { Button, Form, Input } from './SearchBar.styled';

const SearchBar = props => {
  //   const handleSubmit = e => {
  //     e.preventDefault();
  //     const query = e.target.query.value;
  //     props.onSubmit(query);
  //   };

  return (
    <Form
    //  onSubmit={handleSubmit}
    >
      <Input
        name="query"
        type="text"
        autoComplete="off"
        autofocus
        placeholder="Search"
      />
      <Button type="submit">🔍</Button>
    </Form>
  );
};

// SearchBar.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };
export default SearchBar;
