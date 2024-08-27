'use client'
import React, { useEffect, useState } from 'react';
import "../components/css/datatable.css"
import axios from 'axios';

// const data1 = [
//     {
//         name: "Ayush Pratap Singh",
//         email: "ayush@example.com",
//         phoneNumber: "+91 XXXX XX XXXX",
//         interest: "Web Development",
//         message: "Looking for a website redesign.",
//     },
//     {
//         name: "Ayush Pratap Singh",
//         email: "ayush@example.com",
//         phoneNumber: "+91 XXXX XX XXXX",
//         interest: "Web Development",
//         message: "Looking for a website redesign.",
//     },
//     {
//         name: "Ayush Pratap Singh",
//         email: "ayush@example.com",
//         phoneNumber: "+91 XXXX XX XXXX",
//         interest: "Web Development",
//         message: "Looking for a website redesign.",
//     },
//     {
//         name: "Ayush Pratap Singh",
//         email: "ayush@example.com",
//         phoneNumber: "+91 XXXX XX XXXX",
//         interest: "Web Development",
//         message: "Looking for a website redesign.",
//     },
//     {
//         name: "Ayush Pratap Singh",
//         email: "ayush@example.com",
//         phoneNumber: "+91 XXXX XX XXXX",
//         interest: "Web Development",
//         message: "Looking for a website redesign.",
//     },
//     {
//         name: "Ayush Pratap Singh",
//         email: "ayush@example.com",
//         phoneNumber: "+91 XXXX XX XXXX",
//         interest: "Web Development",
//         message: "Looking for a website redesign.",
//     },
// ];

export default function Datatable() {
    const [data,setData] = useState([])
    const [renError,setRenError] = useState("")

    async function fetchData (){
        try {
            setData([])
            const response = await axios.get("https://indibus.net/api/contactus/getallData");
            setData(response.data.contactInfo); 

        } catch (error) {
            setRenError(error.message);
        }
    };

    // useEffect(() => {
    //     fetchData(); // Call the async function
    // },[]);


    return (
        <div className="datatable-container">
            {renError}
            <h2 className="datatable-title">IndiBus Software Solutions Private Limited</h2>
            <table className="datatable-table">
                <thead className="datatable-thead">
                    <tr className="datatable-th">
                        <th className="contact-table-header">Name</th>
                        <th className="contact-table-header">Email</th>
                        <th className="contact-table-header">Phone Number</th>
                        <th className="contact-table-header">Interest</th>
                        <th className="contact-table-header">Message</th>
                    </tr>
                </thead>
                <tbody className="datatable-tbody">
                    {data.map((item,id) => (
                        <tr key={id} className="datatable-tr">
                            <td className="contact-table-data">{item.name}</td>
                            <td className="contact-table-data">{item.email}</td>
                            <td className="contact-table-data">{item.phoneNumber}</td>
                            <td className="contact-table-data">{item.interest}</td>
                            <td className="contact-table-data">{item.message}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="datatable-pagination">
                {/* <button className="datatable-pagination-btn datatable-pagination-prev">Previous</button> */}
                {/* <span className="datatable-pagination-info">Page 1 of 10</span> */}
                <button className="datatable-pagination-btn datatable-pagination-next" onClick={fetchData}>Refresh</button>
            </div>
        </div>
    );
}
