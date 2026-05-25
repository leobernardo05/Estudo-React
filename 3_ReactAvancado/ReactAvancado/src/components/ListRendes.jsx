import React, { useState } from 'react'

const ListRendes = () => {
    const [list] = useState(["Zeca", "zezin", "joão", "maria", "joaquim", "zefa"])
 
    const [users, setUsers] = useState ([
        {id: 1, name: 'Zeca', age: 31},
        {id: 2, name: 'Zezin', age:25},
        {id: 3, name: 'João', age:30},

    ])

    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 4) ;

        setUsers((prevUsers) => {

            return prevUsers.filter((user) => randomNumber !== user.id)

        })
    }

    return (
    <div>
        <ul>
            {/* map percorre todo o array */}
            {list.map((item, i) => (
                // i serve para percorrer o Array como chave unica 
                <li key={i}>{item}</li>
            ))}
        </ul>
        <ul>
            {users.map((user) => (
                <li>
                    {user.name} -{user.age}
                </li>
            ))}
        </ul>

        <button onClick={deleteRandom}>Delete random user</button>

    </div>
  );
};

export default ListRendes