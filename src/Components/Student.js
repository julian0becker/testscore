import React from "react";
import Result from "./Result";

const Student = props => (
  <div className="card text-white bg-primary mb-3 m-2">
    <div className="card-header d-flex justify-content-between">
      <div>DaF 187</div>
      <div>
        <i
          onClick={() => props.handleOpenDeleteModal(props.student.studentId)}
          className="fas fa-times"
        />
      </div>
    </div>
    <div className="card-body d-flex flex-column justify-content-between">
      <h4 className="card-title">{props.student.name}</h4>
      <div className="card-text  ">
        <ul className="list-group">
          {props.student.results.map(result => (
            <Result
              key={result.testId}
              student={props.student}
              result={result}
              handleDeleteSingleTest={props.handleDeleteSingleTest}
              handleOpenEditModal={props.handleOpenEditModal}
              handleOpenInfoModal={props.handleOpenInfoModal}
              handleEditSingleScore={props.handleEditSingleScore}
              isEditingPoints={props.isEditingPoints}
            />
          ))}
        </ul>
      </div>
      <form
        className="mt-3 "
        onSubmit={event => props.handleAddTest(event, props.student.studentId)}
      >
        <div className="form-group">
          <fieldset className="container-fluid">
            <div className="row">
              <input
                type="text"
                name="inputField"
                className="form-control col "
              />
              <input
                type="submit"
                value="create"
                className="btn btn-outline-secondary btn-sm"
              />
            </div>
          </fieldset>
        </div>
      </form>
    </div>
  </div>
);

export default Student;
