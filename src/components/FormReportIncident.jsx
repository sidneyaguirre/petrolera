import React, { Component } from "react";
import TimePickers from "./TimePicker";

class FormReportIncident extends Component {
  
  render() {
    return (
      <form onSubmit={this.props.onSubmit}>
        <div>
          <div className="col">
            <h3 className="h3 text-primary">Registrar Incidente</h3>
            <p className="lead">
              Registra un nuevo incidente en la base de datos
            </p>
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
                maxLength="20"
                value={this.props.formValues.title}
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
                onChange={this.props.onChange}
                type="text"
                className="form-control"
                name="category"
                maxLength="20"
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
              <option value="Bajo">Bajo</option>
              <option value="Medio">Medio</option>
              <option value="Alto">Alto</option>
            </select>
          </div>

          <div className="col">
            <label>
              <>Estado</>
            </label>
            <input
              onChange={this.props.onChange}
              type="password"
              className="form-control"
              name="state"
              maxLength="20"
              value={this.props.formValues.state}
              required
            />
          </div>
        </div>

        <div className="form-group">
          <div className="row">
            <div className="col">
              <label className="mr-sm-2">
                <>Fecha de Apertura</>
              </label>
              <TimePickers />
            </div>

            <div className="col">
              <label className="mr-sm-2">
                <>Fecha de Clausura</>
              </label>
              <TimePickers />
            </div>
          </div>
        </div>
        <button
          type="submit"
          onClick={console.log("button clicked")}
          className="btn btn-outline-primary float-center"
        >
          Guardar Reporte
        </button>
      </form>
    );
  }
}

export default FormReportIncident;
