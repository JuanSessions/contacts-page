import React, { useEffect, useState } from 'react'

function UserAccountInfo(props) {
    console.log("props:", props);
    const [firstName, setFirstName] = useState(null)
    const [userData, setUserData] = useState(null)

    useEffect(() => {
        fetch('http://localhost:3001/contacts')
            .then(res => res.json())
            .then(data => {
                setUserData(data.contact)
            })

    }, [])


    console.log("user data:", userData)

    return (
        <div>
            <h1>User Personal Info</h1>
            <h3>Items purchased and history</h3>

            {
                userData && userData.map((user, i) => {
                    return (
                        <div>
                            <h3>{user.firstName} </h3>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default UserAccountInfo
