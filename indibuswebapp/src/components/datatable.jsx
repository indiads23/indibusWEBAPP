import React from 'react'
import "../components/css/datatable.css"

export default function Datatable() {
    return (
        <div class="datatable-container">
            <h2 class="datatable-title">IndiBus Software Solutions Limited</h2>
            <table class="datatable-table">
                <thead class="datatable-thead">
                    <tr class="datatable-tr">
                        <th class="datatable-th">Name</th>
                        <th class="datatable-th">Email</th>
                        <th class="datatable-th">Role</th>
                        <th class="datatable-th">Status</th>
                        <th class="datatable-th">Action</th>
                    </tr>
                </thead>
                <tbody class="datatable-tbody">
                    <tr class="datatable-tr">
                        <td class="datatable-td">Ayush Pratap Singh</td>
                        <td class="datatable-td">ayush@example.com</td>
                        <td class="datatable-td">Admin</td>
                        <td class="datatable-td">Active</td>
                        <td class="datatable-td">
                            <button class="datatable-btn datatable-btn-edit">Edit</button>
                            <button class="datatable-btn datatable-btn-delete">Delete</button>
                        </td>
                    </tr>
                    <tr class="datatable-tr">
                        <td class="datatable-td">Ayush Pratap Singh</td>
                        <td class="datatable-td">ayush@example.com</td>
                        <td class="datatable-td">Admin</td>
                        <td class="datatable-td">Active</td>
                        <td class="datatable-td">
                            <button class="datatable-btn datatable-btn-edit">Edit</button>
                            <button class="datatable-btn datatable-btn-delete">Delete</button>
                        </td>
                    </tr>
                    <tr class="datatable-tr">
                        <td class="datatable-td">Ayush Pratap Singh</td>
                        <td class="datatable-td">ayush@example.com</td>
                        <td class="datatable-td">Admin</td>
                        <td class="datatable-td">Active</td>
                        <td class="datatable-td">
                            <button class="datatable-btn datatable-btn-edit">Edit</button>
                            <button class="datatable-btn datatable-btn-delete">Delete</button>
                        </td>
                    </tr>
                    <tr class="datatable-tr">
                        <td class="datatable-td">Ayush Pratap Singh</td>
                        <td class="datatable-td">ayush@example.com</td>
                        <td class="datatable-td">Admin</td>
                        <td class="datatable-td">Active</td>
                        <td class="datatable-td">
                            <button class="datatable-btn datatable-btn-edit">Edit</button>
                            <button class="datatable-btn datatable-btn-delete">Delete</button>
                        </td>
                    </tr>
                    <tr class="datatable-tr">
                        <td class="datatable-td">Ayush Pratap Singh</td>
                        <td class="datatable-td">ayush@example.com</td>
                        <td class="datatable-td">Admin</td>
                        <td class="datatable-td">Active</td>
                        <td class="datatable-td">
                            <button class="datatable-btn datatable-btn-edit">Edit</button>
                            <button class="datatable-btn datatable-btn-delete">Delete</button>
                        </td>
                    </tr>
                    <tr class="datatable-tr">
                        <td class="datatable-td">Ayush Pratap Singh</td>
                        <td class="datatable-td">ayush@example.com</td>
                        <td class="datatable-td">Admin</td>
                        <td class="datatable-td">Active</td>
                        <td class="datatable-td">
                            <button class="datatable-btn datatable-btn-edit">Edit</button>
                            <button class="datatable-btn datatable-btn-delete">Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div class="datatable-pagination">
                <button class="datatable-pagination-btn datatable-pagination-prev">Previous</button>
                <span class="datatable-pagination-info">Page 1 of 10</span>
                <button class="datatable-pagination-btn datatable-pagination-next">Next</button>
            </div>
        </div>
    )
}
