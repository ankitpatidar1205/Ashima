import React, { useEffect, useState } from "react";
import DashboardLayout from "../../Layout/DashboardLayout";
import { useDispatch, useSelector } from "react-redux";
import { createAdmin, getAdmins, updateAdminStatus } from "../../Redux/slices/adminSlice/adminSlice";

const UserInfo = () => {
    const dispatch = useDispatch();
    const [showModal, setShowModal] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        phone: "",
        address: "",
        avatar: null,
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === "avatar") {
            setFormData((prev) => ({ ...prev, avatar: files[0] }));
        } else {
            setFormData((prev) => ({ ...prev, [name]: value }));
        }
    };
    const updateStatus = async (id, is_active) => {
        await dispatch(updateAdminStatus({ id, is_active }))
        await dispatch(getAdmins())
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = new FormData();
        data.append("name", formData.name);
        data.append("email", formData.email);
        data.append("password", formData.password);
        data.append("phone", formData.phone);
        data.append("address", formData.address);
        if (formData.avatar) {
            data.append("avatar", formData.avatar);
        }

        dispatch(createAdmin(data));
        setShowModal(false);
        setFormData({
            name: "",
            email: "",
            password: "",
            phone: "",
            address: "",
            avatar: null,
        });
    };

    useEffect(() => {
        dispatch(getAdmins());
    }, [dispatch]);

    const admins = useSelector((state) => state?.admins?.Admin);

    return (
        <DashboardLayout>
            <div className="container mt-4">
                {/* Header */}
                <header className="container-fluid bg-white shadow-sm p-3 rounded mb-4">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <div
                                className="input-group rounded"
                                style={{
                                    borderRadius: "50px",
                                    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                                    overflow: "hidden",
                                }}
                            >
                                <input
                                    type="text"
                                    className="form-control border-2 ps-4 py-2"
                                    placeholder="Search by name or email..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                                <span className="input-group-text bg-white border-0 pe-4">
                                    <i className="fas fa-search text-muted"></i>
                                </span>
                            </div>
                        </div>
                        <div className="col-md-6 d-flex justify-content-md-end align-items-center mt-2 mt-md-0">
                            <button className="btn btn-outline-dark" onClick={() => setShowModal(true)}>
                                Add
                            </button>
                        </div>
                    </div>
                </header>

                {/* <h2 className="mb-4">User Info</h2> */}
                <div className="table-responsive">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>

                                <th>Phone </th>
                                <th>Address</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {admins?.filter((user) =>
                                `${user?.name} ${user?.email}`.toLowerCase().includes(searchTerm.toLowerCase())
                            ).map((user, index) => (
                                <tr key={index}>
                                    <td>
                                        <span style={{ display: 'flex', alignItems: 'center' }}>
                                            <img
                                                src={user?.avatar || "https://via.placeholder.com/40"}
                                                alt={user?.name}
                                                style={{
                                                    width: "40px",
                                                    height: "40px",
                                                    borderRadius: "50%",
                                                    objectFit: "cover",
                                                }}
                                            />
                                            <span style={{ marginLeft: '5px' }}>{user?.name}</span>
                                        </span>
                                    </td>
                                    <td>{user?.email}</td>
                                    <td>{user?.phone}</td>
                                    <td>{user?.address}</td>
                                    <td>
                                        <button
                                            className={`btn btn-sm ${user?.is_active == 1 ? "btn-success" : "btn-danger"
                                                }`}
                                            onClick={() => updateStatus(user?.id, user?.is_active == 1 ? false : true)}
                                        >
                                            {user?.is_active == 1 ? "Active" : "Inactive"}
                                        </button>

                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Modal */}
            {showModal && (
                <div className="modal show fade d-block" tabIndex="-1" role="dialog" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <form onSubmit={handleSubmit}>
                                <div className="modal-header">
                                    <h5 className="modal-title">Create Admin</h5>
                                    <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
                                </div>
                                <div className="modal-body">
                                    <div className="mb-3">
                                        <label className="form-label">Name</label>
                                        <input type="text" className="form-control" name="name" value={formData.name} onChange={handleChange} required />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Email</label>
                                        <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} required />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Password</label>
                                        <input type="password" className="form-control" name="password" value={formData.password} onChange={handleChange} required />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Phone</label>
                                        <input type="text" className="form-control" name="phone" value={formData.phone} onChange={handleChange} />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Address</label>
                                        <input type="text" className="form-control" name="address" value={formData.address} onChange={handleChange} />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Avatar (Image)</label>
                                        <input type="file" className="form-control" name="avatar" accept="image/*" onChange={handleChange} />
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="submit" className="btn btn-primary">Create</button>
                                    <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>Cancel</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </DashboardLayout>
    );
};

export default UserInfo;
