import React from "react";
import s from './Users.module.css';
import userPhoto from "../../assets/images/user-avatar.png"
import {NavLink} from "react-router-dom";
import {usersApi} from "../../api/api";

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div>
        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p && s.selectedPage}
                             onClick={(e) => {
                                 props.onPageChanged(p)
                             }}>{p}</span>
            })}
        </div>
        {
            props.users.map(u => <div key={u.id}>
          <span>
              <div className={s.userPhoto}>
                  <NavLink to={'/profile/' + u.id}>
                  <img src={u.photos.small != null ? u.photos.small : userPhoto}/>
                  </NavLink>
              </div>
              <div>
                  {u.followed
                      ? <button onClick={() => {
                          usersApi.unfollowUser(u.id).then(data => {
                              if (data.resultCode === 0) {
                                  props.unfollow(u.id)

                              }
                          })
                      }}>Unfollow</button>
                      : <button onClick={() => {
                          usersApi.followUser(u.id).then(data => {
                              if (data.resultCode === 0) {
                                  props.follow(u.id)
                              }
                          })
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
export default Users;