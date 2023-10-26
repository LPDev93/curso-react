import React from "react";
import "./App.css";
import TwitterFollowCard from "./TwitterFollowCard";

const App = () => {
  // Función anónima (arrow function) para concatenar "@ + userName".
  const formatUserName = (userName) => `@${userName}`;
  // Lista de usarios.
  const users = [
    {
      userName: "Blizzard_Ent",
      name: "Blizzard Entertainment",
      isFollowing: false,
    },
    {
      userName: "Steam",
      name: "Steam",
      isFollowing: true,
    },
    {
      userName: "bethesda",
      name: "Bethesda",
      isFollowing: true,
    },
    {
      userName: "LPDev93",
      name: "Luigui Parodi",
      isFollowing: true,
    },
  ];
  return (
    <section className="App">
      {
        // Pintamos los usuarios de la base de datos.
        users.map((user) => {
          // Extraemos los datos necesarios del objeto.
          const { userName, name, isFollowing } = user;
          return (
            <TwitterFollowCard
              key={userName}
              formattedUserName={formatUserName}
              userName={userName}
              initialFollowing={isFollowing}
            >
              {name}
            </TwitterFollowCard>
          );
        })
      }
    </section>
  );
};

export default App;
