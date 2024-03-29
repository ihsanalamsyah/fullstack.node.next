'use client'

import AddProduct from "./addProduct";
import Logout from "./logout";
import TableProduct from "./tableProduct";
import { getCookie } from '../../utils/cookies';

interface User {
    id: number;
    name: string;
    email: string;
    gender: string;
    password: string;
    role: string;
}


interface GetUser {
    data: User;
    msg: string;
    status: string;
}

// const getUserByName = async (token: string | null | undefined, name: string | null | undefined) => {

//     const route = process.env.NEXT_PUBLIC_ROUTE;
//     try {
               
//         const response = await fetch(`${route}/user`, {
//             method: 'POST',
//             headers:{
//                 'Authorization': 'Bearer '+ token,
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({
//                 name: name
//             })
//         });
       
//         const content = await response.json();
        
//         return content;
        
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
// };

export default async function Products(){
    const name = getCookie("name");
    const role = getCookie("role");
    let isAdmin = false;
    if(role == "Admin"){
        isAdmin = true;
    }
    console.log(process.env.NEXT_PUBLIC_ROUTE);
    console.log(process.env.ROUTE);
    return (
        //<></>
        <div className="py-10 px-10">
            <div className="flex justify-center my-2">
                {isAdmin ? (
                    <p><b>Welcome to dashboard admin {name} </b></p>
                ) : (
                    <p><b>Welcome to dashboard {name} </b></p>
                )}
            </div>
            <div className="py-2 flex">
                {isAdmin ? (
                    <AddProduct />
                ) : (
                    <div></div>
                )}
            </div>

            <hr></hr>
            <TableProduct />
            <div className="py-2 flex flex-row-reverse">         
                <Logout />
            </div>
        </div>
    )

    
}