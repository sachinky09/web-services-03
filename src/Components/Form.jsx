import React, { useState } from 'react';
import './Form.css';

const CustomAppForm = () => {
  const [budget, setBudget] = useState(0);
  const [demoPage, setDemoPage] = useState(false);
  const [fileUploaded, setFileUploaded] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  const decreaseBudget = () => {
    setBudget((prevBudget) => prevBudget - 100);
  };

  const increaseBudget = () => {
    setBudget((prevBudget) => prevBudget + 100);
  };

  const handleDemoPageChange = (e) => {
    setDemoPage(e.target.value === 'yes');
    setFileUploaded(false);
  };

  const handleFileUpload = (e) => {
    setSelectedFile(e.target.files[0]);
    setFileUploaded(true);
  };
  const handleSubmit= () => {
    alert("Your Response was recorded \n We'll get back to you via E-mail.");
  };
  return (
    <div className="form-page">
      <h1>Custom Application Request</h1>
      <p>Please fill out the form below to request a customized application.</p>
      <form>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="category">Category:</label>
            <select id="category" name="category">
              <option value="web">Web Development</option>
              <option value="mobile">Mobile App Development</option>
              <option value="ai">AI Solutions</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="projectName">Project Name:</label>
            <input type="text" id="projectName" name="projectName" placeholder="Enter project name" />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="projectDetails">Project Details:</label>
            <textarea id="projectDetails" name="projectDetails" placeholder="Enter project details"></textarea>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="duration">Duration (in days):</label>
            <input type="number" id="duration" name="duration" placeholder="Enter duration" />
          </div>
          <div className="form-group">
            <label htmlFor="budget" className='budget-heading'>Budget (in ₹):</label>
            <div className="budget-control">
              <button type="button" onClick={decreaseBudget}>-</button>
              <span>₹{budget}</span>
              <button type="button" onClick={increaseBudget}>+</button>
            </div>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="clientName">Your Name:</label>
            <input type="text" id="clientName" name="clientName" placeholder="Enter your name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="Enter your email" />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="demoPage">Have a demo page?</label>
            <select id="demoPage" name="demoPage" onChange={handleDemoPageChange}>
              <option value="no">No</option>
              <option value="yes">Yes</option>
            </select>
          </div>
          {demoPage && (
            <div className="form-group">
              <label htmlFor="fileUpload">Upload File:</label>
              <input type="file" id="fileUpload" name="fileUpload" onChange={handleFileUpload} />
              {fileUploaded && <p>File uploaded: {selectedFile.name}</p>}
            </div>
          )}
        </div>
        <button type="submit" onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
};

export default CustomAppForm;
