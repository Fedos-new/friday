import React from 'react';


type ProfileType = {
    name: string
}


export const Profile = (props: ProfileType) => {

    const {name} = props

    return (
    <div>
        <h2>Profile</h2>
        <div> Name: {name}</div>
    </div>
  );
}
