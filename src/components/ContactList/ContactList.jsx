import PropTypes from 'prop-types';
import { Button } from '../Button.styled';
import { List, ListItem } from './List.styled';
import { RiContactsLine, RiDeleteBin6Line } from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import { useSelector } from 'react-redux';

// в пропсы приходили { contacts, deleteContact }
const ContactList = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(state => state.filter);
  const loweredFilter = filterValue.toLowerCase();
  const contactList = useSelector(state => state.contact);

  const filteredList = contactList.filter(({ name }) =>
    name.toLowerCase().includes(loweredFilter)
  );
  // const loweredFilter = filter.toLowerCase();
  // contacts={contacts.filter(({ name }) => name.toLowerCase().includes(loweredFilter)
  //   name.toLowerCase().includes(loweredFilter)
  // )}

  // useSelector(contacts)
  // useSelector(filter)
  // const filteredList = check if contacts includes filteredValue => return filtered list

  return (
    <>
      <List>
        {/* перебираем filteredList */}
        {filteredList.map(({ name, id, number }) => {
          return (
            name && (
              <ListItem key={id}>
                <div>
                  <RiContactsLine color="color=#ffee7d" /> {name}: {number}
                </div>
                <Button
                  onClick={() => {
                    dispatch(deleteContact(id));
                    // dispatch(deleteContact('id')) !!!
                    // deleteContact(id);
                  }}
                >
                  {' '}
                  <RiDeleteBin6Line
                    style={{
                      fill: '#ffee7d',
                      width: '18px',
                      height: '18px',
                    }}
                  />{' '}
                  Delete
                </Button>
              </ListItem>
            )
          );
        })}
      </List>
    </>
  );
};
ContactList.defaultProps = {
  contacts: [],
};
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
  deleteContact: PropTypes.func,
};
export default ContactList;
