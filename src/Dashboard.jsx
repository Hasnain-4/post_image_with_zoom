import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const Dashboard = () => {
    return (
        <div className="text-center bg-dark text-white p-5">
            <h2>Image Uploaded Successfully</h2>
            <Link to={'/zoom_image'}>
            <Button variant="btn btn-info mt-4">Click button to view images</Button>
            </Link>

        </div>
    )
}

export default Dashboard
