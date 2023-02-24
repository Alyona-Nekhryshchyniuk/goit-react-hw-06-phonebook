import PropTypes from 'prop-types';
import { Input } from '../Input.styled';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { setFilterValue } from '../../redux/filterSlice';

// в пропсы приходили { value, onChange }
const Filter = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(state => state.filter);
  console.log(filterValue);
  return (
    <label>
      Find contacts by name <br />
      <Input
        // value={value}
        value={filterValue}
        onChange={e => {
          dispatch(setFilterValue(e.target.value));
          // onChange(e.target.value);
        }}
      />
    </label>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default Filter;
