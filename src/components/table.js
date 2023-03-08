import React from "react";
import axios from "axios";

import { useEffect, useState } from "react";
import Pagination from "./pagination";

function Table() {
  const [member, setMember] = useState([]);
  const [page, setPage] = useState(1);

  const [url, setUrl] = useState(
    "https://randomuser.me/api/?page=1&results=10"
  );
  const handleSetPage = (page) => {
    setPage(page);
    setUrl(`https://randomuser.me/api/?page=${page}&results=10`);
  };

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(url);
      return setMember(res.data.results);
    };
    getData();
    console.log(url);
  }, [page, url]);

  return (
    <>
      <div className="col-sm-9 col-sm-offset-3 col-lg-10 col-lg-offset-2 main">
        <div className="row">
          <ol className="breadcrumb">
            <li>
              <a href="/">
                <svg className="glyph stroked home">
                  <use xlinkHref="#stroked-home" />
                </svg>
              </a>
            </li>
            <li className="active">LIST MEMBERS</li>
          </ol>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <h1 className="page-header">Members</h1>
          </div>
        </div>

        <div id="toolbar" className="btn-group"></div>
        <div className="row">
          <div className="col-lg-12">
            <div className="panel panel-default">
              <div className="panel-body">
                <table
                  className="table"
                  data-toolbar="#toolbar"
                  data-toggle="table"
                >
                  <thead>
                    <tr>
                      <th data-field="id" data-sortable="true">
                        No.
                      </th>
                      <th data-field="name" data-sortable="true">
                        Full name
                      </th>
                      <th data-field="name" data-sortable="true">
                        User name
                      </th>
                      <th data-field="price" data-sortable="true">
                        Age
                      </th>
                      <th>Email</th>
                      <th>Country</th>
                      <th>Phone Numbers</th>
                      <th>Image</th>
                    </tr>
                  </thead>
                  <tbody>
                    {member.map((value, index) => {
                      return (
                        <tr key={index}>
                          <td name="key">{index + 1}</td>
                          <td name="fullname">
                            {value.name.first} {value.name.last}{" "}
                          </td>
                          <td name="username">{value.login.username}</td>

                          <td name="age">{value.dob.age}</td>
                          <td name="email">{value.email}</td>
                          <td name="country">{value.location.country}</td>
                          <td name="phonenumber">{value.phone}</td>
                          <td className="form-group">
                            <img width={100} src={value.picture.medium} />
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              <Pagination page={page} handleSetPage={handleSetPage} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Table;
