import React, { Component } from "react";

class FormRegisterUser extends Component {
  handleClick = e => {
    /* prevent the button to submit info */
    console.log("button clicked");
  };

  render() {
    return (
      <form onSubmit={this.props.onSubmit}>
        <div>
          <div className="col">
            <h3 className="h3 text-primary">Registrar Nuevo Usuario</h3>
            <p className="lead">
              El nuevo usuario tendrá un perfil propio donde podrá registrar un
              incidente.
              <br />
              Todos los campos son requeridos
            </p>
          </div>
        </div>

        <div className="col">
          <div className="form-group">
            <div className="form-row">
              <div className="col">
                <div className="form-group">
                  <label>
                    <>Nombre Completo</>
                  </label>
                  <input
                    onChange={this.props.onChange}
                    type="text"
                    className="form-control"
                    name="userName"
                    maxLength="60"
                    value={this.props.formValues.userName}
                    required
                  />
                </div>
              </div>

              <div className="col">
                <div className="form-group">
                  <label>
                    <>Rol</>
                  </label>
                  <select
                    onChange={this.props.onChange}
                    type="text"
                    className="form-control"
                    name="role"
                    value={this.props.formValues.role}
                    required
                  >
                    <option value="">Selecione...</option>
                    <option value="admin">Administrador</option>
                    <option value="user">Usuario</option>
                    <option value="investigator">Investigador</option>
                    <option value="supervisor">Supervisor</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="form-group">
            <div className="form-row">
              <div className="col">
                <label className="mr-sm-2">
                  <>Tipo de Documento</>
                </label>
                <select
                  onChange={this.props.onChange}
                  type="text"
                  className="form-control"
                  name="documentType"
                  value={this.props.formValues.documentType}
                  required
                >
                  <option value="">Selecione...</option>
                  <option value="cc">Cédula de Ciudadanía</option>
                  <option value="ce">Cédula de Extrangería</option>
                </select>
              </div>

              <div className="col">
                <label className="mr-sm-2">
                  <>Número de Documento</>
                </label>
                <input
                  onChange={this.props.onChange}
                  type="number"
                  className="form-control"
                  name="documentNumber"
                  min="1"
                  maxLength="10"
                  value={this.props.formValues.documentNumber}
                  required
                />
              </div>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="form-group">
            <div className="form-row">
              <div className="col">
                <div className="form-group">
                  <label>
                    <>Correo</>
                  </label>
                  <input
                    onChange={this.props.onChange}
                    type="email"
                    className="form-control"
                    name="email"
                    value={this.props.formValues.email}
                    required
                  />
                </div>
              </div>

              <div className="col">
                <div className="form-group">
                  <label>
                    <>Nombre de la Empresa Proveedora</>
                  </label>
                  <select
                    onChange={this.props.onChange}
                    type="text"
                    className="form-control"
                    name="id_provider"
                    value={this.props.formValues.id_provider}
                    required
                  >
                    <option value="">Selecione...</option>
                    <option value="00">Petrolera Corp.</option>
                    <option value="01">Aseo CleanComp</option>
                    <option value="02">Transportur</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="form-group">
            <div className="form-row">
              <div className="col">
                <label>
                  <>Contraseña</>
                </label>
                <input
                  onChange={this.props.onChange}
                  type="password"
                  className="form-control"
                  name="password1"
                  maxLength="20"
                  value={this.props.formValues.password}
                  required
                />
              </div>

              <div className="col">
                <div className="form-group">
                  <label>
                    <>Confirmar Contraseña</>
                  </label>
                  <input
                    onChange={this.props.onChange}
                    type="password"
                    className="form-control"
                    name="password2"
                    maxLength="20"
                    value={this.props.formValues.password}
                    required
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={this.handleClick}
          className="btn btn-outline-primary float-right"
        >
          Guardar Usuario
        </button>
      </form>
    );
  }
}

export default FormRegisterUser;
