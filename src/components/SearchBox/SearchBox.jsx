import s from "./SearchBox.module.css";

const SearchBox = ({ value, onChangeValue }) => {
  return (
    <label className={s.searchField}>
      <span>Find contacts by name:</span>
      <input
        type="text"
        value={value}
        onChange={(e) => onChangeValue(e.target.value)}
      />
    </label>
  );
};

export default SearchBox;
