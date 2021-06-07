import React from "react";
import s from './Users.module.css';

let Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                photoUrl: 'https://yt3.ggpht.com/a/AATXAJwP-Cll0SICtcx5Yyddhrkcl4RKJZNVtyu9vuQn=s900-c-k-c0x00ffffff-no-rj',
                followed: false,
                fullName: "Dmitrii",
                status: "hello1",
                location: {city: "Minsk", country: "Belarus"}
            },
            {
                id: 2,
                photoUrl: 'https://th.bing.com/th/id/OIP.5eTzsiVmsszqm8ZoCYf5EwHaH7?pid=ImgDet&rs=1',
                followed: true,
                fullName: "Dmitrii",
                status: "hello2",
                location: {city: "Minsk", country: "Belarus"}
            },
            {
                id: 3,
                photoUrl: 'https://th.bing.com/th/id/OIP.5eTzsiVmsszqm8ZoCYf5EwHaH7?pid=ImgDet&rs=1',
                followed: false,
                fullName: "Dmitrii",
                status: "hello3",
                location: {city: "Minsk", country: "Belarus"}
            }
        ])
    }

    return <div>
        {
            props.users.map(u => <div key={u.id}>
          <span>
              <div className={s.userPhoto}>
                  <img src={u.photoUrl}/>
              </div>
              <div>
                  {u.followed
                      ? <button onClick={() => {
                          props.unfollow(u.id)
                      }}>Unfollow</button>
                      : <button onClick={() => {
                          props.follow(u.id)
                      }}>Follow</button>}
              </div>
          </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                         <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.city}</div>
                        <div>{u.location.country}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}
export default Users;