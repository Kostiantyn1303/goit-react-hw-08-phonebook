import { FilterContainer, FilterLable, FilterInput } from './Filter.styled';
import { useDispatch } from 'react-redux';
import { getFilter } from 'redux/selectors';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { setFilter } from '../../redux/filterSlice';
export function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  const handleChange = evt => {
    const valueFilter = evt.currentTarget.value.trim();
    dispatch(setFilter(valueFilter));
  };

  return (
    <FilterContainer>
      <FilterLable>
        Find contacts by name <br />
        <FilterInput
          type="text"
          placeholder="Search..."
          value={filter}
          onChange={handleChange}
        />
      </FilterLable>
    </FilterContainer>
  );
}

export default Filter;
