// import createPersistedState from "use-persisted-state";
// const useAuthState = createPersistedState("auth");
// const useTokenState = createPersistedState("token");
// import usePersistedState from "use-persisted-state-hook";
// const useAuthState = usePersistedState("auth");
// const useTokenState = usePersistedState("token");

import { useState } from "react";

const useData = () => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  // const [user, setUser] = usePersistedState("");
  // const [token, setToken] = usePersistedState("");

  const signOut = () => {
    setUser("");
    setToken();
  };

  return {
    user,
    setUser,
    token,
    setToken,
    signOut,
  };
};

export default useData;
