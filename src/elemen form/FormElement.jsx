import React from 'react';
import './form.css';

class FormElem extends React.Component {
  state = {
    nama: '',
    jurusan: '',
    kelamin: '',
    alamat: '',
    member: false,
    errors: [],
  };
  handleSubmit = (a) => {
    a.preventDefault();
    alert(`
            nama:${this.state.nama}
            jurusan:${this.state.jurusan}
            kelamin:${this.state.kelamin}
            alamat:${this.state.alamat}
            member:${this.state.member ? 'yes' : 'no'}
        `);

    let message = [];
    const { nama, alamat } = this.state;
    if (nama.length === 0) {
      message = [...message, `nama gk boleh kosong`];
      alert(message);
    }
    if (alamat.length === 0) {
      message = [...message, `alamat gk boleh kosong`];
      alert(message);
    }
    if (message.length > 0) {
      this.setState(
        {
          errors: message,
        },
        () => console.log(this.state.errors)
      );
    }
    this.setState({
      nama: 'Andi',
      jurusan: null,
      kelamin: '',
      alamat: '',
      member: false,
    });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <table>
          <tbody>
            <tr>
              <td>Nama</td>
              <td>:</td>
              <td>
                <input
                  type="text"
                  name="nama"
                  onChange={(e) =>
                    this.setState({ nama: e.target.value }, () =>
                      console.log(this.state)
                    )
                  }
                  value={this.state.nama}
                />
              </td>
            </tr>
            <tr>
              <td>Jurusan</td>
              <td>:</td>
              <td>
                <select
                  name="jurusan"
                  onChange={(e) =>
                    this.setState({ jurusan: e.target.value }, () =>
                      console.log(this.state)
                    )
                  }
                  //   checked={this.state.jurusan}
                >
                  <option value="">Pilih Jurusan</option>
                  <option value="TI">TI</option>
                  <option value="SI">SI</option>
                  <option value="Kom">Kom</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>Kelamin</td>
              <td>:</td>
              <td>
                <input
                  type="radio"
                  name="kelamin"
                  value="Laki-laki"
                  onChange={(e) =>
                    this.setState({ kelamin: e.target.value }, () =>
                      console.log(this.state)
                    )
                  }
                  // checked={this.state.kelamin}
                />
                Laki-laki
              </td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td>
                <input
                  type="radio"
                  name="kelamin"
                  value="Perempuan"
                  onChange={(e) =>
                    this.setState({ kelamin: e.target.value }, () =>
                      console.log(this.state)
                    )
                  }
                  // checked={this.state.kelamin}
                />
                Perempuan
              </td>
            </tr>
            <tr>
              <td>Alamat</td>
              <td>:</td>
              <td>
                <textarea
                  name="alamat"
                  cols="30"
                  rows="3"
                  onChange={(e) =>
                    this.setState({ alamat: e.target.value }, () =>
                      console.log(this.state)
                    )
                  }
                  value={this.state.alamat}
                ></textarea>
              </td>
            </tr>
            <tr>
              <td>Member</td>
              <td>:</td>
              <td>
                <input
                  type="checkbox"
                  name="member"
                  id="mem"
                  checked={this.state.member}
                  onChange={(e) =>
                    this.setState({ member: e.target.checked }, () =>
                      console.log(this.state)
                    )
                  }
                />
              </td>
            </tr>
          </tbody>
        </table>
        <div className="submit">
          <input
            type="submit"
            value="Daftar"
            name="subm"
            onClick={() => this.setState({ jurusan: null })}
          />
        </div>
      </form>
    );
  }
}

export default FormElem;
