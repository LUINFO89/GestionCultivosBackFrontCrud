import React from "react";
import MaterialTable from 'material-table'

function BasicSearch() {
    return (

    <div className="container">
      <MaterialTable
        title="Ver Configuración de Cultivo "
        columns={[
          { title: "id", field: "name" },
          { title: "Surname", field: "surname" },
          { title: "Birth Year", field: "birthYear", type: "numeric" },
          {
            title: "Birth Place",
            field: "birthCity",
            lookup: { 34: "İstanbul", 63: "Şanlıurfa" },
          },
        ]}
        data={[
          { name: "Mehmet", surname: "Baran", birthYear: 1987, birthCity: 63 },
          {
            name: "Zerya Betül",
            surname: "Baran",
            birthYear: 2017,
            birthCity: 34,
          },
        ]}
        options={{
          search: true,
        }}
      />
      </div>
    );
  };
 
export default BasicSearch ;