import React from 'react';
import Inspection from './Inspection';

export default function InspectionList({ inspections, clients, employees }) {

  const modifyInspections = () => {
    let match;
    let match_final;
    let matchingInspections = [];
    let matchingInspections_final = [];
    inspections.forEach(inspection => {
      clients.forEach(function(client, index) {
        if (client._id === inspection.client) {
          console.log("match")
          // Append a clientName property to the inspection object
          match = Object.assign({}, inspection, { clientName: client.name });

          console.log(match)
          matchingInspections.push(match);
        }
      });

    });
    matchingInspections.forEach(inspection => {
      employees.forEach(function(employee, index) {
        if (employee._id === inspection.employee) {
          console.log("match")
          // Append a employeeName property to the match object
          match_final = Object.assign({}, inspection, { employeeName: employee.name });

          console.log(match_final)
          matchingInspections_final.push(match_final)
        }
      });
    })
    return matchingInspections_final;
  }

  const renderInspections = () => {
    inspections = modifyInspections();
    // console.log(inspections)
    return inspections.map(inspection => {

      // return inspection ? (<Inspection key={inspection._id} inspection={inspection} />) : null

      if (inspection) {
        return (
          <div className="row">

            <div className="col s1 m3"></div>
            <div className="col s10 m6">

              <span key={inspection._id}>

              <div className="card grey darken-4">
                <span className="white-text">
                  <div className="card-content">
                    <div className="card-title">{inspection.client.name}</div>
                    <p>{inspection.employee.lastName}</p>
                    <p>{inspection.date}</p>
                    <p>{inspection.frequency}</p>
                    <p>{inspection.auditor}</p>
                  </div>
                </span>
              </div>

              </span>

            </div>

            <div className="col s1 m3"></div>

          </div>
        )
      } else {
        return null
      }

    })
  }




    return (
    <div>
      <h1>Inspection List</h1>
      { renderInspections() }
    </div>

  )
}
