import React from "react";
import s from './Users.module.css';
import * as axios from "axios";
import userPhoto from "../../assets/images/user-avatar.png"

class Users extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(resp => this.props.setUsers(resp.data.items));
    }

    render() {
        return <div>
            {
                this.props.users.map(u => <div key={u.id}>
          <span>
              <div className={s.userPhoto}>
                  <img src={u.photos.small != null ? u.photos.small : userPhoto}/>
              </div>
              <div>
                  {u.followed
                      ? <button onClick={() => {
                          this.props.unfollow(u.id)
                      }}>Unfollow</button>
                      : <button onClick={() => {
                          this.props.follow(u.id)
                      }}>Follow</button>}
              </div>
          </span>
                    <span>
                    <span>
                        <div>{u.name}</div>
                         <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{"u.location.city"}</div>
                        <div>{"u.location.country"}</div>
                    </span>
                </span>
                </div>)
            }
        </div>
    }
}

export default Users;