import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import Wrapper from "../../components/Wrapper/Wrapper";
import {
  deleteUser,
  getAllUsers,
  IsAdmin,
  IsUser,
} from "../../services/userService";
import { IsLogged } from "../../utils/IsLogged";

const UserManagement = () => {
  IsLogged();

  let history = useHistory();

  const [users, setUsers] = useState([]);
  useEffect(() => {
    if (!IsAdmin()) {
      if (IsUser()) {
        history.push("/");
      } else {
        history.push("/404");
      }
    }
  }, [history]);
  useEffect(() => {
    const script = document.createElement("script");
    script.src = `${process.env.PUBLIC_URL}/js/datatables-demo.js`;
    document.body.appendChild(script);
  }, []);

  useEffect(() => {
    getAllUsers()
      .then((data) => {
        console.log(data.users);
        setUsers(data.users);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Wrapper>
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">
            DataTables Example
          </h6>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table
              className="table table-bordered"
              id="dataTable"
              width="100%"
              cellSpacing="0"
            >
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Firstname</th>
                  <th>Lastname</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tfoot>
                <tr>
                  <th>ID</th>
                  <th>Firstname</th>
                  <th>Lastname</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </tfoot>
              <tbody>
                {users.map((el) => (
                  <tr key={el._id}>
                    <td>{el._id}</td>
                    <td>{el.firstname}</td>
                    <td>{el.lastname}</td>
                    <td>{el.email}</td>
                    <td>{el.role}</td>
                    <td>{el.status ? "Active" : "Desactive"}</td>
                    <td>
                      <button
                        className="btn btn-sm ml-1 btn-danger"
                        onClick={() => {
                          deleteUser(el._id).then((_) => {
                            setUsers(
                              users.filter((user) => user._id === el._id)
                            );
                          });
                        }}
                      >
                        Del
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default UserManagement;
