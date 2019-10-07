import React, { Component } from "react";

class FormReportIncident extends Component {
  render() {
    return (
      <form onSubmit={this.props.onSubmit}>
        <div>
          <div className="col">
            <h3 className="h3 text-primary">Reportar Incidente</h3>
            <p className="lead">Reporta un nuevo incidente</p>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <div className="form-group">
              <label>
                <>Nombre del Incidente</>
              </label>
              <input
                onChange={this.props.onChange}
                type="text"
                className="form-control"
                name="title"
                maxLength="35"
                value={this.props.formValues.title}
                required
              />
            </div>
          </div>

          <input hidden type="text" name="createdBy" value={this.props.createdBy} readOnly required></input>

          <div className="col">
            <div className="form-group">
              <label>
                <>Categoría</>
              </label>
              <input
                onChange={this.props.onChange}
                type="text"
                className="form-control"
                name="category"
                maxLength="30"
                value={this.props.formValues.category}
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
            value={this.props.formValues.description}
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
                onChange={this.props.onChange}
                type="datetime-local"
                className="form-control"
                name="start_date"
                value={this.props.formValues.start_date}
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
                value={this.props.formValues.end_date}
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
              value={this.props.formValues.impact}
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
              value={this.props.formValues.state}
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

        <button
          type="submit"
          // onClick={console.log("button clicked")}
          className="btn btn-outline-primary float-right"
        >
          Guardar Reporte
        </button>
      </form>
    );
  }
}

export default FormReportIncident;
