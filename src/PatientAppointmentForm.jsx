import React, { useState } from "react";

export default function PatientAppointmentForm() {
  const [formData, setFormData] = useState({
    date: "",
    timeRange: "",
    patientName: "",
    gender: "",
    email: "",
    phone: "",
    doctor: "",
    appointmentPriority: "",
    liveConsultant: "",
    availability: "",
    status: "",
    nurse: "",
    description: "",
    caseId: "CAS-2024-001",
    encounterId: "ENC-2024-001",
    paymentMode: "Cash",
    paymentStatus: "",
  });

  const [showModal, setShowModal] = useState(false);
  const [isDoctorOpen, setIsDoctorOpen] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  return (
    <>
      <style>
        {`
          .doctor-select option:hover {
            background-color: #3b82f6 !important;
            color: white !important;
          }
          .doctor-select:focus option:checked {
            background-color: #3b82f6 !important;
            color: white !important;
          }
        `}
      </style>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white shadow-lg w-[900px]">
          <div className="flex items-center bg-gradient-to-r from-blue-500 to-blue-500 text-white px-4 py-3">
            <div className="flex-1 pr-4">
              <label className="block text-xs font-semibold mb-1">Select Patient</label>
              <select
                className="w-full bg-white text-gray-800 p-3 rounded h-12 text-sm"
                aria-label="Select Patient"
              >
                <option>Select Patient</option>
              </select>
            </div>
            <div className="flex-1 px-4">
              <label className="block text-xs font-semibold mb-1 text-center">Add New Patient</label>
              <button
                type="button"
                className="w-full bg-white text-blue-600 px-4 py-3 rounded h-12 flex items-center justify-center gap-2 text-sm font-medium"
                aria-label="Add New Patient"
              >
                <span className="text-lg font-bold leading-none">+</span>
                <span>New Patient</span>
              </button>
            </div>
            <div className="w-10 flex items-start justify-end">
              <button
                type="button"
                className="ml-2 text-white text-xl font-bold px-2 py-1 rounded hover:bg-white/10"
                aria-label="Close"
              >
                ×
              </button>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="p-4 space-y-4">
            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="block">
                  Date <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full border p-2 rounded"
                  required
                />
              </div>
              <div>
                <label className="block">
                  Time Range <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="timeRange"
                  placeholder="09:00 AM - 10:00 AM"
                  value={formData.timeRange}
                  onChange={handleChange}
                  className="w-full border p-2 rounded"
                  required
                />
              </div>
              <div>
                <label className="block">
                  Patient Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="patientName"
                  value={formData.patientName}
                  onChange={handleChange}
                  className="w-full border p-2 rounded"
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="block">Gender</label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className="w-full border p-2 rounded"
                >
                  <option>Select</option>
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </div>
              <div>
                <label className="block">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border p-2 rounded"
                />
              </div>
              <div>
                <label className="block">
                  Phone <span className="text-red-500">*</span>
                </label>
                <div className="flex border rounded overflow-hidden">
                  <div className="px-3 py-2 bg-gray-100 border-r border-gray-300">233 (GHA)</div>
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    className="flex-1 px-3 py-2 outline-none"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="block">Doctor</label>
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setIsDoctorOpen(!isDoctorOpen)}
                    className="w-full border p-2 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 flex justify-between items-center bg-white"
                  >
                    {formData.doctor || 'Select'}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {isDoctorOpen && (
                    <ul className="absolute z-10 w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-48 overflow-y-auto mt-1">
                      <li
                        className={`p-2 cursor-pointer hover:bg-blue-500 hover:text-white ${formData.doctor === '' ? 'bg-blue-500 text-white' : ''}`}
                        onClick={() => {
                          setFormData({ ...formData, doctor: '' });
                          setIsDoctorOpen(false);
                        }}
                      >
                        Select
                      </li>
                      <li
                        className={`p-2 cursor-pointer hover:bg-blue-500 hover:text-white ${formData.doctor === 'George William' ? 'bg-blue-500 text-white' : ''}`}
                        onClick={() => {
                          setFormData({ ...formData, doctor: 'George William' });
                          setIsDoctorOpen(false);
                        }}
                      >
                        George William
                      </li>
                      <li
                        className={`p-2 cursor-pointer hover:bg-blue-500 hover:text-white ${formData.doctor === 'Helen Jones' ? 'bg-blue-500 text-white' : ''}`}
                        onClick={() => {
                          setFormData({ ...formData, doctor: 'Helen Jones' });
                          setIsDoctorOpen(false);
                        }}
                      >
                        Helen Jones
                      </li>
                      <li
                        className={`p-2 cursor-pointer hover:bg-blue-500 hover:text-white ${formData.doctor === 'Kofi Owusu Boahene' ? 'bg-blue-500 text-white' : ''}`}
                        onClick={() => {
                          setFormData({ ...formData, doctor: 'Kofi Owusu Boahene' });
                          setIsDoctorOpen(false);
                        }}
                      >
                        Kofi Owusu Boahene
                      </li>
                      <li
                        className={`p-2 cursor-pointer hover:bg-blue-500 hover:text-white ${formData.doctor === 'Akwasi Owusu' ? 'bg-blue-500 text-white' : ''}`}
                        onClick={() => {
                          setFormData({ ...formData, doctor: 'Akwasi Owusu' });
                          setIsDoctorOpen(false);
                        }}
                      >
                        Akwasi Owusu
                      </li>
                      <li
                        className={`p-2 cursor-pointer hover:bg-blue-500 hover:text-white ${formData.doctor === 'Samuel Mensah' ? 'bg-blue-500 text-white' : ''}`}
                        onClick={() => {
                          setFormData({ ...formData, doctor: 'Samuel Mensah' });
                          setIsDoctorOpen(false);
                        }}
                      >
                        Samuel Mensah
                      </li>
                      <li
                        className={`p-2 cursor-pointer hover:bg-blue-500 hover:text-white ${formData.doctor === 'Dr. Jane Doe' ? 'bg-blue-500 text-white' : ''}`}
                        onClick={() => {
                          setFormData({ ...formData, doctor: 'Dr. Jane Doe' });
                          setIsDoctorOpen(false);
                        }}
                      >
                        Dr. Jane Doe
                      </li>
                    </ul>
                  )}
                </div>
              </div>
              <div>
                <label className="block">Appointment Priority</label>
                <select
                  name="appointmentPriority"
                  value={formData.appointmentPriority}
                  onChange={handleChange}
                  className="w-full border p-2 rounded"
                >
                  <option>--Select--</option>
                  <option>Normal</option>
                  <option>Urgent</option>
                </select>
              </div>
              <div>
                <label className="block">
                  Live Consultant (On Video Conference) <span className="text-red-500">*</span>
                </label>
                <select
                  name="liveConsultant"
                  value={formData.liveConsultant}
                  onChange={handleChange}
                  className="w-full border p-2 rounded"
                  required
                >
                  <option>-Select-</option>
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </div>
            </div>
            <div className="w-full">
              <label className="block">Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="w-full border p-2 rounded h-20"
                placeholder="Enter description..."
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="block">Availability</label>
                <select
                  name="availability"
                  value={formData.availability}
                  onChange={handleChange}
                  className="w-full border p-2 rounded"
                >
                  <option>Select</option>
                  <option>Available</option>
                  <option>Busy</option>
                </select>
              </div>
              <div>
                <label className="block">Status</label>
                <select
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  className="w-full border p-2 rounded"
                >
                  <option>-Select-</option>
                  <option>Pending</option>
                  <option>Confirmed</option>
                  <option>Completed</option>
                </select>
              </div>
              <div>
                <label className="block">Nurse</label>
                <input
                  type="text"
                  name="nurse"
                  value={formData.nurse}
                  onChange={handleChange}
                  className="w-full border p-2 rounded"
                />
              </div>
            </div>
            <div className="grid grid-cols-4 gap-4">
              <div>
                <label className="block">Case ID</label>
                <input
                  type="text"
                  name="caseId"
                  value={formData.caseId}
                  onChange={handleChange}
                  className="w-full border p-2 rounded"
                />
              </div>
              <div>
                <label className="block">Encounter ID</label>
                <input
                  type="text"
                  name="encounterId"
                  value={formData.encounterId}
                  onChange={handleChange}
                  className="w-full border p-2 rounded"
                />
              </div>
              <div>
                <label className="block">Payment Mode</label>
                <select
                  name="paymentMode"
                  value={formData.paymentMode}
                  onChange={handleChange}
                  className="w-full border p-2 rounded"
                >
                  <option>Cash</option>
                  <option>Card</option>
                  <option>Insurance</option>
                </select>
              </div>
              <div>
                <label className="block">Payment Status</label>
                <select
                  name="paymentStatus"
                  value={formData.paymentStatus}
                  onChange={handleChange}
                  className="w-full border p-2 rounded"
                >
                  <option>-Select-</option>
                  <option>Paid</option>
                  <option>Unpaid</option>
                  <option>Pending</option>
                </select>
              </div>
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded"
              >
                Save
              </button>
            </div>
          </form>
        </div>
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded shadow-lg w-[500px]">
              <h2 className="text-xl font-bold mb-4">Appointment Details</h2>
              <pre className="bg-gray-100 p-4 rounded text-sm">
                {JSON.stringify(formData, null, 2)}
              </pre>
              <div className="flex justify-end mt-4">
                <button
                  className="bg-blue-600 text-white px-4 py-2 rounded"
                  onClick={() => setShowModal(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
