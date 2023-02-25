import PropTypes from 'prop-types';
import { Input } from '../Input.styled';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { setFilterValue } from '../../redux/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();

  return (
    <label>
      Find contacts by name <br />
      <Input
        onChange={e => {
          dispatch(setFilterValue(e.target.value));
        }}
        // All state goes to useSelector(), not only filter!
        value={useSelector(state => state.filter)}
      />
    </label>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default Filter;
