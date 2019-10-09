import React, { Component } from "react";
import SelectDelegate from "./SelectDelegate";
import { jwtdecode } from "./../_helpers/jwt";

class FormEditIncident extends Component {
  handleEdition = () => {
    var current = jwtdecode(localStorage.currentUser);
    if (current.user.role === "supervisor") {
      return true;
    }
    return false;
  };

  render() {
    return (
      <form onSubmit={this.props.onSubmit}>
        <div>
          <div className="col">
            <h3 className="h3 text-primary">Reportar Incidente</h3>
            <p className="lead">Editar información del incidente</p>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <div className="form-group">
              <label>
                <>Nombre del Incidente</>
              </label>
              <input
                type="text"
                className="form-control"
                name="title"
                maxLength="35"
                value={this.props.formValues.incident.title}
                readOnly
                required
              />
            </div>
          </div>

          <div className="col">
            <div className="form-group">
              <label>
                <>Categoría</>
              </label>
              <input
                type="text"
                className="form-control"
                name="category"
                maxLength="30"
                value={this.props.formValues.incident.category}
                readOnly
                required
              />
            </div>
          </div>
        </div>

        <div className="form-group">
          <label>Descripción</label>
          <textarea
            onChange={this.props.onChange}
            type="text"
            className="form-control"
            name="description"
            value={this.props.formValues.incident.description}
            readOnly
            required
          />
        </div>

        <div className="row">
          <div className="col">
            <div className="form-group">
              <label className="mr-sm-2">
                <>Fecha y Hora de Apertura</>
              </label>
              <input
                type="datetime-local"
                className="form-control"
                name="start_date"
                value={this.props.formValues.incident.start_date}
                readOnly
                required
              />
            </div>
          </div>

          <div className="col">
            <div className="form-group">
              <label className="mr-sm-2">
                <>Fecha y Hora de Clausura</>
              </label>
              <input
                onChange={this.props.onChange}
                type="datetime-local"
                className="form-control"
                name="end_date"
                value={this.props.formValues.incident.end_date}
              />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <label className="mr-sm-2">
              <>Impacto</>
            </label>
            <select
              onChange={this.props.onChange}
              type="text"
              className="form-control"
              name="impact"
              value={this.props.formValues.incident.impact}
              required
            >
              <option value="">Selecione...</option>
              <option value="bajo">Bajo</option>
              <option value="medio">Medio</option>
              <option value="alto">Alto</option>
            </select>
          </div>

          <div className="col">
            <label>
              <>Estado</>
            </label>
            <select
              onChange={this.props.onChange}
              type="text"
              className="form-control"
              name="state"
              value={this.props.formValues.incident.state}
              required
            >
              <option value="">Selecione...</option>
              <option value="abierto">Abierto</option>
              <option value="en_proceso">En proceso</option>
              <option value="suspendido">Suspendido</option>
              <option value="cerrado">Cerrado</option>
            </select>
          </div>
        </div>

        <div className="row">
          <div className="col" hidden={this.handleEdition()}>
            <div className="form-group">
              <label className="mr-sm-2">
                <>Responsable</>
              </label>
              <SelectDelegate
                onChange={this.props.onChange}
                className="form-control"
                name="assigned"
                delegate={this.props.formValues.supervisors}
              />
            </div>
          </div>

          <div className="col">
            <div className="form-group">
              <label className="mr-sm-2">
                <>Investigador</>
              </label>
              <SelectDelegate
                onChange={this.props.onChange}
                className="form-control"
                name="investigator"
                delegate={this.props.formValues.investigators}
              />
            </div>
          </div>
        </div>

        <button type="submit" className="btn btn-outline-primary float-right">
          Guardar Cambios
        </button>
      </form>
    );
  }
}

export default FormEditIncident;
