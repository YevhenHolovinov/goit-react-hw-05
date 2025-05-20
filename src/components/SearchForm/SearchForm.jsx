import css from './SearchForm.module.css';

export default function SearchForm({ handleChange, handleSearchMovie, query }) {
  const onHandleChange = (event) => {
    handleChange(event.target.value);
  };

  const onHandleSubmit = (event) => {
    event.preventDefault();
    handleSearchMovie({ query: event.target.elements.query.value });
  };
  return (
    <form className={css.searchForm} onSubmit={onHandleSubmit}>
      <input
        className={css.searchInput}
        value={query}
        onChange={onHandleChange}
        type="search"
        name="query"
      />
      <button
        className={css.searchButton}
        type="submit"
        aria-label="search button"
      >
        Search
      </button>
    </form>
  );
}
