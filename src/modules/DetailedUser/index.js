import "./index.css"
import { useParams } from "react-router-dom";
import { Button, Rate } from 'antd'
import { useState } from 'react'
import { getUserProfile } from "../../api/Users"


const DetailedUser = () => {
  const { id } = useParams();
  const profile = getUserProfile(id);
  const [buttonBlock, setButtonBlock] = useState(true);
  
  function addCalification() {
    if (1)
      return (
        <div className="row">
          {/*<Rate allowHalf defaultValue={2.5}/>*/}
          <span className="text-secondary">Usuario: 4.5/5</span>
        </div>
      );
  }
  
  function addBlockButton() {
    return (
      <div>
        <Button type="primary" style={{ background: buttonBlock? "red": "green"}}
                onClick={()=> {
                  setButtonBlock(!buttonBlock)
                  if (buttonBlock) {
                    // {Bloquear Realmente} Aca hay que hacer una llamada a API. 
                  } else {
                    // {Desbloquear Realmente}
                  }}}>
          {buttonBlock? "Bloquear Usuario": "Desbloquear Usuario"}
        </Button>
      </div>
    );
  }
  
  function addAdminButton() {
    return (
      <div>
        <Button type="primary" style={{ background: "green" }}>
          Dar Permisos de Administrador
        </Button>
      </div>
    );
  }
  
  function renderBottonLeftList() {
    return (
      <div className="card mt-3">
        <ul className="list-group list-group-flush">
            <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
              {addCalification()}
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
              {addAdminButton()}
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
              {addBlockButton()}
            </li>
        </ul>
      </div>
    );
  }

  function renderInfo(){
    return(
      <div className="card mb-3">
            <div className="card-body">
              <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0">Full Name</h6>
                </div>
                <div className="col-sm-9 text-secondary">
                  Test
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0">Email</h6>
                </div>
                <div className="col-sm-9 text-secondary">
                  fip@jukmuh.al
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0">Phone</h6>
                </div>
                <div className="col-sm-9 text-secondary">
                  (239) 816-9029
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0">Mobile</h6>
                </div>
                <div className="col-sm-9 text-secondary">
                  (320) 380-4539
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0">Address</h6>
                </div>
                <div className="col-sm-9 text-secondary">
                  Bay Area, San Francisco, CA
                </div>
              </div>                  
            </div>
          </div>
    )
  }

  function renderProfile(){
    return(
      <div className="card">
            <div className="card-body">
              <div className="d-flex flex-column align-items-center text-center">
                <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" className="rounded-circle" width={150} />
                <div className="mt-3">
                  <h4>Nacho</h4>
                  <p className="text-secondary mb-1">Full Stack Developer ojala</p>
                  <p className="text-muted font-size-sm">Bay Area, San Francisco, CA</p>
                </div>
              </div>
            </div>
          </div>
    )
  }

  function renderMetrics(){
    return(
      <div className="row gutters-sm">
            <div className="col-sm-6 mb-3">
              <div className="card h-100">
                <div className="card-body">
                  <h6 className="d-flex align-items-center mb-3"><i className="material-icons text-info mr-2">assignment</i>Project Status</h6>
                  <small>Web Design</small>
                  <div className="progress mb-3" style={{height: 5}}>
                    <div className="progress-bar bg-primary" role="progressbar" style={{width: '80%'}} aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} />
                  </div>
                  <small>Website Markup</small>
                  <div className="progress mb-3" style={{height: 5}}>
                    <div className="progress-bar bg-primary" role="progressbar" style={{width: '72%'}} aria-valuenow={72} aria-valuemin={0} aria-valuemax={100} />
                  </div>
                  <small>One Page</small>
                  <div className="progress mb-3" style={{height: 5}}>
                    <div className="progress-bar bg-primary" role="progressbar" style={{width: '89%'}} aria-valuenow={89} aria-valuemin={0} aria-valuemax={100} />
                  </div>
                  <small>Mobile Template</small>
                  <div className="progress mb-3" style={{height: 5}}>
                    <div className="progress-bar bg-primary" role="progressbar" style={{width: '55%'}} aria-valuenow={55} aria-valuemin={0} aria-valuemax={100} />
                  </div>
                  <small>Backend API</small>
                  <div className="progress mb-3" style={{height: 5}}>
                    <div className="progress-bar bg-primary" role="progressbar" style={{width: '66%'}} aria-valuenow={66} aria-valuemin={0} aria-valuemax={100} />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 mb-3">
              <div className="card h-100">
                <div className="card-body">
                  <h6 className="d-flex align-items-center mb-3"><i className="material-icons text-info mr-2">assignment</i>Project Status</h6>
                  <small>Web Design</small>
                  <div className="progress mb-3" style={{height: 5}}>
                    <div className="progress-bar bg-primary" role="progressbar" style={{width: '80%'}} aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} />
                  </div>
                  <small>Website Markup</small>
                  <div className="progress mb-3" style={{height: 5}}>
                    <div className="progress-bar bg-primary" role="progressbar" style={{width: '72%'}} aria-valuenow={72} aria-valuemin={0} aria-valuemax={100} />
                  </div>
                  <small>One Page</small>
                  <div className="progress mb-3" style={{height: 5}}>
                    <div className="progress-bar bg-primary" role="progressbar" style={{width: '89%'}} aria-valuenow={89} aria-valuemin={0} aria-valuemax={100} />
                  </div>
                  <small>Mobile Template</small>
                  <div className="progress mb-3" style={{height: 5}}>
                    <div className="progress-bar bg-primary" role="progressbar" style={{width: '55%'}} aria-valuenow={55} aria-valuemin={0} aria-valuemax={100} />
                  </div>
                  <small>Backend API</small>
                  <div className="progress mb-3" style={{height: 5}}>
                    <div className="progress-bar bg-primary" role="progressbar" style={{width: '66%'}} aria-valuenow={66} aria-valuemin={0} aria-valuemax={100} />
                  </div>
                </div>
              </div>
            </div>
          </div>
    )
  }

  return (
    <div className="main-body">
      <div className="row gutters-sm">
        <div className="col-md-4 mb-3">
          {renderProfile()}
          {renderBottonLeftList()}
        </div>
        <div className="col-md-8">
          {renderInfo()}
          {renderMetrics()}
        </div>
      </div>
    </div>
  );
};

export default DetailedUser;