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
      setUser(newUser.data);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if(error){
    return
    }else{
      getDataUsers(search);
    }
  };

  const handleChange = (event) => {
    const newSearch = event.target.value;
    updateSearch(newSearch);
  };
  
  return (
    <div className="container-login">
      <h3>Welcome</h3>
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

        <button type="submit">Search</button>
      </form>

      {error !== "" && <p style={{ color: "red" }}>{error}</p>}
      <p>Info here!</p>
      
      {user.length === 0 && <p>Without Results</p>}
      
      <main style={{ display: "flex", flexDirection: "column" }}>
        {user.map((e) => {
          return (
            <div key={e.id}>
              <ul>
                <li>
                 Email: {e.email} - Id: {e.id}.
                </li>
              </ul>
            </div>
          );
        })}
      </main>
    </div>
  );
}

export default Dashboard;
