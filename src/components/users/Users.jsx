import React from "react";
import s from './Users.module.css';
import * as axios from "axios";
import userPhoto from "../../assets/images/user-avatar.png"

class Users extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(resp => {
                this.props.setUsers(resp.data.items);
                this.props.setTotalCount(resp.data.totalCount);
            });

    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(resp => this.props.setUsers(resp.data.items));
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

        return <div>
            <div>
                {pages.map(p => {
                    return <span className={this.props.currentPage === p && s.selectedPage}
                                 onClick={(e) => {
                                     this.onPageChanged(p)
                                 }}>{p}</span>
                })}
            </div>
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