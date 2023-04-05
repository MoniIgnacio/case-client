import { useEffect, useRef, useState } from "react";
import { userService } from "../services/auth.services";

function useSearch() {
  const [search, updateSearch] = useState("");
  const [error, setError] = useState(null);
  const isFirstInput = useRef(true);

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search === "";
      return;
    }

    if (search === "") {
      setError("You have to insert a letter");
      return;
    }

    if (search.match(/^\d+$/)) {
      setError("You have not search with numbers");
      return;
    }

    if (search.length < 3) {
      setError("The search have to contain more than 3 carachters");
      return;
    }

    setError(null);
  }, [search]);

  return { search, updateSearch, error };
}

function Dashboard() {
  const { search, updateSearch, error } = useSearch();
  const [loading, setLoading] = useState(false);

  const [user, setUser] = useState([]);

  const [, setError] = useState(null);
  const previousSearch = useRef(search);

  const getDataUsers = async () => {
    if (search === previousSearch.current) return;

    try {
      setLoading(true);
      setError(null);
      previousSearch.current = search;
      const newUser = await userService(search);
      // console.log(newUser.data)
      setUser(newUser.data);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  console.log(user);

  const handleSubmit = (event) => {
    event.preventDefault();
    getDataUsers(search);
  };

  const handleChange = (event) => {
    const newSearch = event.target.value;
    updateSearch(newSearch);
  };

  return (
    <div className="container-login">
      <h3>Welcome 'user'</h3>
      <form className="form-login" onSubmit={handleSubmit}>
        <label> Search your friend </label>
        <input
          style={{
            border: "1px solid transparent",
            borderColor: error ? "red" : "transparent",
          }}
          onChange={handleChange}
          value={search}
          name="query"
          placeholder="user@example.com"
        />
        {error !== "" && <p style={{ color: "red" }}>{error}</p>}

        <button type="submit">Search</button>
      </form>

      <main>
        Info here!
      </main>
    </div>
  );
}

export default Dashboard;
