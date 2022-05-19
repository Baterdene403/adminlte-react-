import React from 'react'
import { useState } from "react";
import { storage } from "../firebase";
export default function Image() {

  const [progress, setProgress] = useState(0);
  const formHandler = (e) => {
    e.preventDefault();
    const file = e.target[0].files[0];
    uploadFiles(file);
  };

  const uploadFiles = (file) => {
    //
    const uploadTask = storage.ref(`files/${file.name}`).put(file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        //
        const prog = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(prog);
      },
      (error) => console.log(error),
      () => {
        storage
          .ref("files")
          .child(file.name)
          .getDownloadURL()
          .then((url) => {
            console.log(url);
          });
      }
    );
  };

  return (
    <div className="content-wrapper">
      {/* Content Header (Page header) */}
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
            </div>{/* /.col */}
            <div className="col-sm-6">
            </div>{/* /.col */}
          </div>{/* /.row */}
        </div>{/* /.container-fluid */}
      </div>
      {/* /.content-header */}
      {/* Main content */}
      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6">
              <div className="card">

                {/* /.card */}

              </div>
              {/* /.card */}
            </div>
            {/* /.col-md-6 */}
            <div>
            </div>
            {/* /.col-md-6 */}
          </div>
          {/* /.row */}
          <div className='row'>
            <div className="col-12">
              <div className="App">
                <form onSubmit={formHandler}>
                  <input type="file" className="input" />
                  <button type="submit">Upload</button>
                </form>
                <hr />
                <h2>Uploading done {progress}%</h2>
              </div>

            </div>
          </div>
        </div>
        {/* /.container-fluid */}
      </div>
      {/* /.content */}
    </div>

  );
}