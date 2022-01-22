import React, { Component } from 'react';
import Button from '@mui/material/Button';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      nume: '',
    };
  }

  handleLogin() {
    const email = this.state.email;
    const password = this.state.password;
    fetch('http://localhost:3000/users/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    }).then((res) => res.json())
      .then((data) => {
        if (data.error) alert('E eroare');
        else {
          toast.success('Autentificare cu succes!')
          localStorage.setItem('id', data.id);
         
        }
      }).catch(() => toast.error('Autentificare esuata!'));
    if (email == 'admin@gmail.com' && password == 'admin') {
      localStorage.setItem('admin', true);
      window.location.href = '/admin';
    } else {
      localStorage.removeItem('admin');
      window.location.href = '/';
    }
  }

  handleRegister() {
    const email = this.state.newEmail;
    const password = this.state.newPassword;
    const fullname = this.state.nume;
    fetch('http://localhost:3000/users', {
      method: 'POST',
      body: JSON.stringify({ email, password, fullname }),
      headers: { 'Content-Type': 'application/json' },
    }).then((res) => {
      if (res.ok) {
        this.setState({ newEmail: '', newPassword: '', nume: '' });
        toast.success('Inregistrare cu succes!')
      } else {
        toast.error('Inregistrare esuata!')
      }
    });
  }
  render() {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
          flexDirection: 'column',
          height: '100vh',
        }}
      >
        <h2 style={{ marginTop: '10px' }}>Autentificare cu cont existent</h2>
        <div style={{ width: '500px' }}>
          <label>Email:</label>
          <input
            className="form-control"
            value={this.state.email}
            onChange={(e) => this.setState({ email: e.target.value })}
          />
        </div>
        <div style={{ width: '500px' }}>
          <label>Parola:</label>
          <input
            className="form-control"
            type={'password'}
            value={this.state.password}
            onChange={(e) => this.setState({ password: e.target.value })}
          />
        </div>
        <Button
          style={{ marginTop: '10px' }}
          onClick={() => this.handleLogin(this.props.functie)}
        >
          Autentificare
        </Button>
        <h2 style={{ marginTop: '100px' }}>Inregistrare cu un cont nou</h2>
        <div style={{ width: '500px' }}>
          <label>Nume:</label>
          <input
            className="form-control"
            value={this.state.nume}
            onChange={(e) => this.setState({ nume: e.target.value })}
          />
        </div>
        <div style={{ width: '500px' }}>
          <label>Email:</label>
          <input
            className="form-control"
            value={this.state.newEmail}
            onChange={(e) => this.setState({ newEmail: e.target.value })}
          />
        </div>
        <div style={{ width: '500px' }}>
          <label>Parola:</label>
          <input
            className="form-control"
            type={'password'}
            value={this.state.newPassword}
            onChange={(e) => this.setState({ newPassword: e.target.value })}
          />
        </div>
        <Button
          style={{ marginTop: '10px' }}
          onClick={() => this.handleRegister()}
        >
          Inregistrare
        </Button>
      </div>
    );
  }
}
